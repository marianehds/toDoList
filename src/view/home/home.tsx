// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Typography,
// } from "@mui/material";
import React from "react";
// import Button from "@mui/material/Button";
import "./Home.scss";
import {
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  createSvgIcon,
} from "@mui/material";
// import month from "../../assets/img/month.png";
// import Avatar from "../profile/Avatar";

const Home = () => {
  const userName = localStorage.getItem("user")?.replace(/[\\"]/g, "");

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
  return (
    <>
      <div className="header">
        {/* <img className="header--month" src={month} alt="escrita Month" /> */}
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
                <Paper className="task-card" variant="outlined">
                  default variant
                </Paper>
                <span>
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
      </div>
    </>
  );
};

export default Home;
