import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, TextField } from "@mui/material";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [invalidName, setInvalidName] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleButtonClick() {
    if (name === "") {
      setInvalidName(true);
    } else {
      navigate("/home");
      localStorage.setItem('user', JSON.stringify(name));

    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        value={name}
        id="standard-basic"
        label="Seu nome aqui"
        variant="standard"
        error={invalidName}
        onChange={((e) => (setName(e.target.value), setInvalidName(false)))}
        helperText={invalidName ? "Por favor, insira o seu nome" : ""}
        size="medium"
        color="secondary"
      />
      <Button type="submit" onClick={handleButtonClick} color="secondary" size="large">
        Entrar
      </Button>
    </form>
  );
};

export default Login;
