import React, { useState } from "react";
import "./home.scss";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  createSvgIcon,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../core/redux/userSlice";

import { ModalNewTask, Task } from "../../shared/components/index";

type TTask = {
  title?: string;
  description?: string;
  progress?: number;
};

const Home = () => {
  const { name } = useSelector(selectUser);

  // const user = localStorage.getItem("user")?.replace(/[\\"]/g, "");

  const [modalAddTask, setModalAddTask] = useState(false);
  const [invalidTitle, setInvalidTitle] = useState(false);
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [task, setTask] = useState<TTask>({});

  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );

  const handleClickModal = () => {
    if (task.title === undefined) {
      setInvalidTitle(true);
    } else {
      setTasks([...tasks, task]);
      setModalAddTask(false);
    }
  };

  return (
    <>
      <div className="header">
        <div className="header--user">
          <p className="header--user-name">{name}</p>
          {/* <Avatar /> */}
        </div>
      </div>
      <Grid display={"flex"} flexDirection={"row"} className="cardsTaskList">
        <Grid item>
          <Card className="card-toDo">
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                To do
              </Typography>

              {tasks.map((item, key) => {
                return (
                  <Task
                    key={key}
                    description={item?.description}
                    title={item.title}
                  />
                );
              })}
              <span onClick={() => setModalAddTask(true)}>
                <PlusIcon />
              </span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card-toDo">
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                In progress
              </Typography>

              {/* {tasks.map((item, key) => {
                  return (
                    <Paper className="task-card" variant="outlined" key={key}>
                      {item.title}
                    </Paper>
                  );
                })} */}
              <span onClick={() => setModalAddTask(true)}>
                <PlusIcon />
              </span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card-toDo">
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Done
              </Typography>

              {/* {tasks.map((item, key) => {
                  return (
                    <Paper className="task-card" variant="outlined" key={key}>
                      {item.title}
                    </Paper>
                  );
                })} */}
              <span onClick={() => setModalAddTask(true)}>
                <PlusIcon />
              </span>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <ModalNewTask
        open={modalAddTask}
        close={() => setModalAddTask(false)}
        error={invalidTitle}
        onChangeTitle={(e) => {
          setTask({ ...task, [e.target.name]: e.target.value });
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
