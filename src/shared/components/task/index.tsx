import React, { useState } from "react";

import { Checkbox, Paper, Typography } from "@mui/material";
import "./task.scss";

type TTask = {
  key: number;
  title?: string;
  description?: string;
};

export const Task = ({ key, title, description }: TTask) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleSectionClick = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const taskClasses = isCheckboxChecked ? "task-card checked" : "task-card";

  return (
    <section data-page="paper-task" onClick={handleSectionClick}>
      <Paper className={taskClasses} variant="outlined" key={key}>
        <div>
          <Typography fontSize={20} fontWeight={500}>
            {title}
          </Typography>

          <Typography fontSize={14}> {description}</Typography>
        </div>
        <Checkbox className="checkbox-task" checked={isCheckboxChecked} />
      </Paper>
    </section>
  );
};

export default Task;
