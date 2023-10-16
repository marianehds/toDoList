import React, { useState } from "react";
import "./Home.scss";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Modal,
  Paper,
  Typography,
  createSvgIcon,
} from "@mui/material";
// import Avatar from "../profile/Avatar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
  border: "2px solid #771f64b5",
  borderRadius: "25px",
  boxShadow:
    "0px 11px 15px -7px #771f64, 1px 5px 12px 8px #771f6473 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
};

type TTask = {
  title?: string;
  description?: string;
  progress?: number;
};

const Home = () => {
  const userName = localStorage.getItem("user")?.replace(/[\\"]/g, "");
  const [modalAddTask, setModalAddTask] = useState(false);
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
    setTasks([...tasks, task]);
  };

  return (
    <>
      <div className="header">
        <div className="header--user">
          <p className="header--user-name">{userName}</p>
          {/* <Avatar /> */}
        </div>
      </div>
      <div className="week">
        <Grid display={"flex"} flexDirection={"row"}>
          <Grid item width={300}>
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
                    <Paper
                      className="task-card"
                      variant="outlined"
                      key={key}
                    >
                      {item.title}
                    </Paper>
                  );
                })}
                <span onClick={() => setModalAddTask(true)}>
                  <PlusIcon />
                </span>
              </CardContent>
            </Card>
          </Grid>
          <Grid item width={300}>
            b
          </Grid>
          <Grid item width={300}>
            c
          </Grid>
        </Grid>
        <Modal open={modalAddTask} onClose={() => setModalAddTask(false)}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New card To Do:
            </Typography>
            <Input
              name="title"
              color="secondary"
              fullWidth
              onChange={(e) =>
                setTask({ ...task, [e.target.name]: e.target.value })
              }
            />
            <div style={{}}>
              <Button color="secondary" onClick={() => setModalAddTask(false)}>
                Cancelar
              </Button>
              <Button color="secondary" onClick={() => handleClickModal()}>
                Confirmar
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Home;
