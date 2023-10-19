import React from "react";

import { Checkbox, Paper, Typography } from "@mui/material";
import "./task.scss";

type TTask = {
  key: number;
  title?: string;
  description?: string;
};

export const Task = ({ key, title, description }: TTask) => {
  return (
    <section data-page="paper-task">
      <Paper className="task-card" variant="outlined" key={key}>
        <div>
          <Typography fontSize={20} fontWeight={500}>
            {title}
          </Typography>

          <Typography fontSize={14}> {description}</Typography>
        </div>
        <Checkbox className="checkbox-task" />
      </Paper>
    </section>
  );
};

export default Task;
