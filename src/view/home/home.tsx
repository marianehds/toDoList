import React, { useEffect, useState } from "react";
import "./home.scss";
import { Button, Grid } from "@mui/material";
import { Menu } from "@mui/base/Menu";

import { useSelector } from "react-redux";
import { selectUser } from "../../core/redux/userSlice";

import { ModalNewTask } from "../../shared/components/index";

import { Dropdown, MenuItem } from "@mui/base";
import { useNavigate } from "react-router";
import CardComponent from "../../shared/components/card";
import { TaskProps } from "../../shared/components/task/task.type";
import { HomeLabel } from "../../shared/const/HomeLabel";

type TStatus = 1 | 2 | 3;

const Home = () => {
  useEffect(() => {
    const storedTasksString = localStorage.getItem("userTasks");
    const storedTasks: TaskProps[] = storedTasksString
      ? JSON.parse(storedTasksString)
      : [];
    setTasks(storedTasks);
  }, []);

  // const handleDeleteTask = (taskId: number) => {
  //   // Filtra as tarefas que não têm o ID correspondente para exclusão
  //   const updatedTasks = tasks.filter((task) => task.id !== taskId);

  //   // Atualiza o estado com as tarefas filtradas
  //   setTasks(updatedTasks);

  //   // Salva as tarefas atualizadas no armazenamento local
  //   localStorage.setItem("userTasks", JSON.stringify(updatedTasks));
  // };

  const navigate = useNavigate();

  const { name } = useSelector(selectUser);
  const userLocalStorage = localStorage.getItem("user")?.replace(/[\\"]/g, "");
  //redundância de código apenas para fins de estudos

  const [modalAddTask, setModalAddTask] = useState(false);
  const [invalidTitle, setInvalidTitle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [task, setTask] = useState<TaskProps>({
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
      const newTask: TaskProps = {
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
      <div className="user">
        <Button
          className="header--user-name"
          onClick={() => setMenuOpen(!menuOpen)}
          color="secondary"
        >
          {name ? name : userLocalStorage}
        </Button>
        <Dropdown open={menuOpen}>
          <Menu className="menuProfile">
            {/* <MenuItem onClick={() => navigate("/profile")}>Perfil</MenuItem> */}
            <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
          </Menu>
        </Dropdown>
      </div>
      <Grid className="grid-cards">
        {HomeLabel.map((item) => (
          <Grid item sm={4} key={item}>
            <CardComponent title={item} task={tasks} />
          </Grid>
        ))}
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
