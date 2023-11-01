import React, { useState } from "react";
import "./home.scss";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Menu } from "@mui/base/Menu";

import { useSelector } from "react-redux";
import { selectUser } from "../../core/redux/userSlice";

import { ModalNewTask, Task } from "../../shared/components/index";

import { IoIosAdd } from "react-icons/io";
import { Dropdown, MenuItem } from "@mui/base";
import { useNavigate } from "react-router";

type TTask = {
  title?: string;
  description?: string;
  progress?: 1 | 2 | 3;
};

type TStatus = 1 | 2 | 3;

const Home = () => {
  const navigate = useNavigate();

  const { name } = useSelector(selectUser);
  const userLocalStorage = localStorage.getItem("user")?.replace(/[\\"]/g, "");
  //redundância de código apenas para fins de estudos

  const [modalAddTask, setModalAddTask] = useState(false);
  const [invalidTitle, setInvalidTitle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [task, setTask] = useState<TTask>({});
  const [statusNewTask, setStatusNewTask] = useState<TStatus>(1);

  const handleClickModal = () => {
    if (task.title === undefined) {
      setInvalidTitle(true);
    } else {
      setTasks([...tasks, task]);
      setModalAddTask(false);
      cleanModalFieldsModal();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const cleanModalFieldsModal = () => {
    setTask({});
  };

  return (
    <>
      <div className="header">
        <div className="header--user">
          <p className="header--user-name" onClick={() => setMenuOpen(!menuOpen)}>
            {name ? name : userLocalStorage}
          </p>
          <Dropdown open={menuOpen}>
            <Menu className="menuProfile">
              <MenuItem>Perfil</MenuItem>
              <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
            </Menu>
          </Dropdown>
          {/* <Avatar /> */}
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
                .map((item, key) => (
                  <Task
                    key={key}
                    description={item?.description}
                    title={item.title}
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
                .map((item, key) => (
                  <Task
                    key={key}
                    description={item?.description}
                    title={item.title}
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
                .map((item, key) => (
                  <Task
                    key={key}
                    description={item?.description}
                    title={item.title}
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
    </>
  );
};

export default Home;
