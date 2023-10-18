import { Paper, Typography } from "@mui/material";
import React from "react";

type TTask = {
  key: number;
  title?: string;
  description?: string;
};

export const Task = ({ key, title, description }: TTask) => {
  return (
    <section data-page="a">
      <Paper className="task-card" variant="outlined" key={key}>
        <Typography fontSize={20} fontWeight={500}>
          {" "}
          {title}
        </Typography>
        <Typography fontSize={14}> {description}</Typography>
      </Paper>
    </section>
  );
};

export default Task

