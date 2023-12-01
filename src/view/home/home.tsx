import React, { useEffect, useState } from "react";
import "./home.scss";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Menu } from "@mui/base/Menu";

import { useSelector } from "react-redux";
import { selectUser } from "../../core/redux/userSlice";

import { ModalNewTask, Task } from "../../shared/components/index";

import { IoIosAdd } from "react-icons/io";
import { Dropdown, MenuItem } from "@mui/base";
import { useNavigate } from "react-router";
import Avatar from "../../shared/avatar/avatar";

type TTask = {
  id: number;
  title?: string;
  description?: string;
  progress?: 1 | 2 | 3;
};

type TStatus = 1 | 2 | 3;

const Home = () => {
  useEffect(() => {
    const storedTasksString = localStorage.getItem("userTasks");
    const storedTasks: TTask[] = storedTasksString
      ? JSON.parse(storedTasksString)
      : [];
    setTasks(storedTasks);
  }, []);

  const handleDeleteTask = (taskId: number) => {
    // Filtra as tarefas que não têm o ID correspondente para exclusão
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    // Atualiza o estado com as tarefas filtradas
    setTasks(updatedTasks);

    // Salva as tarefas atualizadas no armazenamento local
    localStorage.setItem("userTasks", JSON.stringify(updatedTasks));
  };

  const navigate = useNavigate();

  const { name } = useSelector(selectUser);
  const userLocalStorage = localStorage.getItem("user")?.replace(/[\\"]/g, "");
  //redundância de código apenas para fins de estudos

  const [modalAddTask, setModalAddTask] = useState(false);
  const [invalidTitle, setInvalidTitle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [task, setTask] = useState<TTask>({
    id: 0,
    title: "",
    description: "",
    progress: undefined,
  });

  const [statusNewTask, setStatusNewTask] = useState<TStatus>(1);

  const handleClickModal = () => {
    if (task.title === undefined) {
      setInvalidTitle(true);
    } else {
      const newTask: TTask = {
        ...task,
        id: tasks.length + 1, // atribuir um ID único
        progress: statusNewTask,
      };
  
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("userTasks", JSON.stringify(updatedTasks));
  
      setModalAddTask(false);
      cleanModalFieldsModal();
    }
  };

  const cleanUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userAvatar");
  };

  const handleLogout = () => {
    cleanUser();
    navigate("/");
  };

  const cleanModalFieldsModal = () => {
    setTask({
      id: 0,
      title: "",
      description: "",
      progress: undefined,
    });
  };

  return (
    <section data-page="home">
      <div className="header">
        <div className="header--user">
          <div className="avatar">
            <Avatar />
          </div>
          <p
            className="header--user-name"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {name ? name : userLocalStorage}
          </p>
          <Dropdown open={menuOpen}>
            <Menu className="menuProfile">
              <MenuItem onClick={() => navigate("/profile")}>Perfil</MenuItem>
              <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
            </Menu>
          </Dropdown>
        </div>
      </div>
      <Grid display={"flex"} flexDirection={"row"} className="cardsTaskList">
        <Grid item>
          <Card className="card-toDo">
            <Typography
              sx={{
                fontSize: 22,
                boxShadow: "0 4px 2px -2px #f3ebfa;",
                borderRadius: "4px",
                padding: "10px",
                margin: "0px 10px;",
              }}
              color="text.secondary"
              gutterBottom
            >
              To do
            </Typography>
            <CardContent className="card-content">
              {tasks
                .filter((item) => item.progress === 1)
                .map((item) => (
                  <Task
                    key={item.id}
                    id={item.id}
                    description={item?.description}
                    title={item.title}
                    onDelete={handleDeleteTask}
                  />
                ))}
            </CardContent>
            <span className="footer-card">
              <IoIosAdd
                size={30}
                onClick={() => {
                  setModalAddTask(true);
                  setStatusNewTask(1);
                }}
              />
            </span>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card-toDo">
            <Typography
              sx={{
                fontSize: 22,
                boxShadow: "0 4px 2px -2px #f3ebfa;",
                borderRadius: "4px",
                padding: "10px",
                margin: "0px 10px;",
              }}
              color="text.secondary"
              gutterBottom
            >
              In progress
            </Typography>
            <CardContent>
              {tasks
                .filter((item) => item.progress === 2)
                .map((item) => (
                  <Task
                    key={item.id}
                    id={item.id}
                    description={item?.description}
                    title={item.title}
                    onDelete={handleDeleteTask}
                  />
                ))}
            </CardContent>
            <span className="footer-card">
              <IoIosAdd
                size={30}
                onClick={() => {
                  setModalAddTask(true);
                  setStatusNewTask(2);
                }}
              />
            </span>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card-toDo">
            <Typography
              sx={{
                fontSize: 22,
                boxShadow: "0 4px 2px -2px #f3ebfa;",
                borderRadius: "4px",
                padding: "10px",
                margin: "0px 10px;",
              }}
              color="text.secondary"
              gutterBottom
            >
              Done
            </Typography>
            <CardContent>
              {tasks
                .filter((item) => item.progress === 3)
                .map((item) => (
                  <Task
                    key={item.id}
                    id={item.id}
                    description={item?.description}
                    title={item.title}
                    onDelete={handleDeleteTask}
                  />
                ))}
            </CardContent>
            <span className="footer-card">
              <IoIosAdd
                size={30}
                onClick={() => {
                  setModalAddTask(true);
                  setStatusNewTask(3);
                }}
                className="iconPlus"
              />
            </span>
          </Card>
        </Grid>
      </Grid>

      <ModalNewTask
        status={statusNewTask}
        open={modalAddTask}
        close={() => setModalAddTask(false)}
        error={invalidTitle}
        onChangeTitle={(e) => {
          setTask({
            ...task,
            [e.target.name]: e.target.value,
            progress: statusNewTask,
          });
          setInvalidTitle(false);
        }}
        onChangeDescription={(e) =>
          setTask({ ...task, [e.target.name]: e.target.value })
        }
        onClickCancel={() => setModalAddTask(false)}
        onClickConfirm={() => handleClickModal()}
      />
    </section>
  );
};

export default Home;
