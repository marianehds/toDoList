import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import "./task.scss";
import { SlPencil, SlTrash, SlHeart } from "react-icons/sl";

type TTask = {
  id: number; // Mudei de 'key' para 'id' para evitar conflitos com a propriedade 'key' reservada do React
  title?: string;
  description?: string;
  onDelete: (id: number) => void;
};

const Task = ({ id, title, description, onDelete }: TTask) => {
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
              <SlTrash size={20} onClick={() => onDelete(id)} />
              <SlPencil size={20} />
            </div>
          )}
        </div>
      </Paper>
    </section>
  );
};

export default Task;
