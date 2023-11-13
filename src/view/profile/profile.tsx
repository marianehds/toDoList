import React from "react";
import "./profile.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TabsCustomAvatar from "../../shared/components/tabsCustomAvatar";

const Profile = () => {
  const navigate = useNavigate();
  const userLocalStorage = localStorage.getItem("user")?.replace(/[\\"]/g, "");


  return (
    <section data-page="profile">
      <p className="header-username">{userLocalStorage}</p>
      <TabsCustomAvatar />
      <Button onClick={() => navigate("/home")}> Voltar </Button>
    </section>
  );
};

export default Profile;
