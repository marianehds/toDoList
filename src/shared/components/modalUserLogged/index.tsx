import React from "react";

import { Modal, Box, Typography, Button } from "@mui/material";

type TModalNewTask = {
  user?: string;
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  close?: any;
  onClickCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  p: 4,
  border: "2px solid #771f64b5",
  borderRadius: "25px",
  boxShadow:
    "0px 11px 15px -7px #771f64, 1px 5px 12px 8px #771f6473 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const ModalUserLogged = ({
  user,
  open,
  close,
  onClickCancel,
  onClickConfirm,
}: TModalNewTask) => {
  return (
    <section data-page="modal-new-task">
      <Modal open={open} onClose={close}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja continuar com o usuario {user} ?
          </Typography>
          <div>
            <Button
              color="secondary"
              onClick={onClickCancel}
              style={{ borderRight: "1px solid", borderRadius: 0}}
            >
              Ir para a tela de Login
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
export default ModalUserLogged;
