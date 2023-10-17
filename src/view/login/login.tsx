import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { changeUser, selectUser } from "../core/redux/userSlice";

import { Button, TextField } from "@mui/material";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { name } = useSelector(selectUser);

  useEffect(() => {
    localStorage.setItem("reduxName", JSON.stringify(name));
  }, [name]);

  const [invalidNome, setInvalidNome] = useState(false);
  const [nome, setNome] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleLogin() {
    if (nome === "") {
      setInvalidNome(true);
    } else {
      dispatch(changeUser(nome));
      navigate("/home");
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        value={nome}
        id="standard-basic"
        label="Seu nome aqui"
        variant="standard"
        error={invalidNome}
        onChange={(e) => (setNome(e.target.value), setInvalidNome(false))}
        helperText={invalidNome ? "Por favor, insira o seu nome" : ""}
        size="medium"
        color="secondary"
      />
      <Button
        type="submit"
        onClick={handleLogin}
        color="secondary"
        size="large"
      >
        Entrar
      </Button>
    </form>
  );
};

export default Login;
