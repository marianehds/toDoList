import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import "./index.scss";
import { SlPencil, SlTrash, SlHeart } from "react-icons/sl";
import { TaskProps } from "./task.type";


const Task = ({ id, title, description }: TaskProps) => {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <section data-page="paper-task">
      <Paper className="task-card" variant="outlined" key={id}>
        <div>
          <Typography fontSize={20} fontWeight={500}>
            {title}
          </Typography>
          <Typography fontSize={14} color="#fff">
            {description}
          </Typography>
        </div>
        <div className="heart">
          <SlHeart
            onClick={() => {
              setHeartClicked(!heartClicked);
            }}
          />
          {heartClicked && (
            <div className="options">
              <SlTrash size={20} 
              // onClick={() => onDelete(id)} 
              />
              <SlPencil size={20} />
            </div>
          )}
        </div>
      </Paper>
    </section>
  );
};

export default Task;
