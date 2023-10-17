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

  const [form, setForm] = useState({
    name: "",
    valid: false,
  });
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleLogin() {
    if (form.name === "") {
      setForm({ ...form, valid: true });
    } else {
      dispatch(changeUser(form));
      navigate("/home");
    }
  }
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
