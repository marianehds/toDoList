import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { changeUser } from "../../core/redux/userSlice";

import { Button, TextField } from "@mui/material";
import "./login.scss";
import ModalUserLogged from "../../shared/components/modalUserLogged";

const Login = () => {
  const navigate = useNavigate();
  const userLocalStorage = localStorage.getItem("user")?.replace(/[\\"]/g, "");
  const [isUserLogged, setIsUserLogged] = useState(
    userLocalStorage === undefined ? false : true
  );
  const [form, setForm] = useState({
    name: "",
    valid: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const cleanUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userAvatar");
    setIsUserLogged(false);
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
    <section data-page="login">
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

      <ModalUserLogged
        user={userLocalStorage}
        open={isUserLogged}
        onClickConfirm={() => navigate("/home")}
        onClickCancel={() => cleanUser()}
      />
    </section>
  );
};

export default Login;
