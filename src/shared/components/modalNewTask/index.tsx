import React from "react";

import { Modal, Box, Typography, TextField, Button } from "@mui/material";

type TModalNewTask = {
  status: number;
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  close?: any;
  error?: boolean;
  onChangeTitle?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onChangeDescription?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onClickCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

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

interface MeuObjeto {
  [key: number]: string;
}
const titleStatusNewTask: MeuObjeto = {
  1: "New card To Do",
  2: "New Card In progress",
  3: "New Card Done",
};

export const ModalNewTask = ({
  status,
  open,
  close,
  error,
  onChangeTitle,
  onChangeDescription,
  onClickCancel,
  onClickConfirm,
}: TModalNewTask) => {
  return (
    <section data-page="modal-new-task">
      <Modal open={open} onClose={close} className="stars">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {titleStatusNewTask[status]}
          </Typography>
          <TextField
            name="title"
            color="secondary"
            size="small"
            label="title"
            error={error}
            helperText={error ? "The title is required" : ""}
            fullWidth
            onChange={onChangeTitle}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            name="description"
            color="secondary"
            variant="outlined"
            label="Description"
            fullWidth
            onChange={onChangeDescription}
          />
          <div>
            <Button color="secondary" onClick={onClickCancel}>
              Cancelar
            </Button>
            <Button color="secondary" onClick={onClickConfirm}>
              Confirmar
            </Button>
          </div>
        </Box>
      </Modal>
    </section>
  );
};
export default ModalNewTask;
