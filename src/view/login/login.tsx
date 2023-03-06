import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [invalidName, setInvalidName] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  };

  function handleButtonClick() {
    if (name === "") {
      setInvalidName(true)
    } else {
      navigate("/home");
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          value={name}
          id="standard-basic"
          label="Seu nome aqui"
          variant="standard"
          error={invalidName}
          onChange={(e) => setName(e.target.value)}
          helperText={invalidName? 'Por favor, insira o seu nome' : ''}
        />
        <Button type="submit" onClick={handleButtonClick}>
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Login;
