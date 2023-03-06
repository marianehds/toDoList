import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const navigate = useNavigate();
  
  function handleButtonClick() {
    navigate('/home');

  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <Button type="submit" onClick={handleButtonClick} > Entrar </Button>
      </form>
    </div>
  );
};

export default Login;
