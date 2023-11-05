import React, { useState } from "react";
import Avatar from "../../shared/avatar/avatar";
import "./profile.scss";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import TAvatar from "../../shared/avatar/avatar.type";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const userLocalStorage = localStorage.getItem("user")?.replace(/[\\"]/g, "");

  const [avatar, setAvatar] = useState<TAvatar>({});

  return (
    <section data-page="profile">
      <div className="avatar">
        <Avatar hair={avatar.hair} />
      </div>
      <p className="header--user-name">{userLocalStorage}</p>

      <p>Hair</p>

      <RadioGroup
        defaultValue="none"
        name="radio-group-hair"
        style={{ display: "inline" }}
      >
        <FormControlLabel
          value="none"
          control={<Radio />}
          label="None"
          onClick={() => setAvatar({ ...avatar, hair: "none" })}
        />
        <FormControlLabel
          value="long"
          control={<Radio />}
          label="Long"
          onClick={() => setAvatar({ ...avatar, hair: "long" })}
        />
        <FormControlLabel
          value="short"
          control={<Radio />}
          label="Short"
          onClick={() => setAvatar({ ...avatar, hair: "short" })}
        />
      </RadioGroup>

      <Button onClick={() =>  navigate("/home")}> Voltar </Button>
    </section>
  );
};

export default Profile;
