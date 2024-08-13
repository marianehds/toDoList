import React from "react";

import { Card, CardContent, Typography } from "@mui/material";
import { CardComponentProps } from "./cardComponent.type";
import { IoIosAdd, IoIosTrash } from "react-icons/io";
import "./index.scss";

const CardComponent = ({ title }: CardComponentProps) => {
  return (
    <Card data-component="card-component" className="card">
      <header>
        <Typography> {title}</Typography>
      </header>
      <CardContent> aqui task</CardContent>
      <footer>
        <IoIosAdd
          size={40}
          //   onClick={() => {
          //     setModalAddTask(true);
          //     setStatusNewTask(3);
          //   }}
          className="iconPlus"
          color="#fff"
        />
        <IoIosTrash
          size={35}
          //   onClick={() => {
          //     setModalAddTask(true);
          //     setStatusNewTask(3);
          //   }}
          // className="iconPlus"kc
          color="#fff"
        />
      </footer>
    </Card>
  );
};

export default CardComponent;
