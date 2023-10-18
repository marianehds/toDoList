import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { changeUser } from "../../core/redux/userSlice";

import { Button, TextField } from "@mui/material";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    valid: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleLogin = () => {
    if (form.name === "") {
      setForm({ ...form, valid: true });
    } else {
      dispatch(changeUser(form.name));
      navigate("/home");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        value={form.name}
        id="standard-basic"
        label="Seu nome aqui"
        variant="standard"
        error={form.valid}
        onChange={(e) => setForm({ name: e.target.value, valid: false })}
        helperText={form.valid ? "Por favor, insira o seu nome" : ""}
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
