import React, { useState } from "react";
import Avatar from "../../shared/avatar/avatar";
import "./profile.scss";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AvatarProps, hairMap } from "@bigheads/core";

const Profile = () => {
  const navigate = useNavigate();
  const userLocalStorage = localStorage.getItem("user")?.replace(/[\\"]/g, "");

  const [avatar, setAvatar] = useState<AvatarProps>({});

  const hairMapKeys = Object.keys(hairMap);
  // const eyesMapKeys = Object.keys(eyesMap);
  // const eyebrowsMapKeys = Object.keys(eyebrowsMap);
  // const hairMapKeys = Object.keys(mouthsMap);
  // const hairMapKeys = Object.keys(facialHairMap);
  // const hairMapKeys = Object.keys(clothingMap);
  // const hairMapKeys = Object.keys(accessoryMap);
  // const hairMapKeys = Object.keys(hatMap);
  // const hairMapKeys = Object.keys(mouthsMap);
  // const hairMapKeys = Object.keys(mouthsMap);

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
        {hairMapKeys.map((item) => (
          <FormControlLabel
            key={item}
            label={item}
            value={item}
            control={<Radio />}
            onClick={() =>
              setAvatar({ ...avatar, hair: item as AvatarProps["hair"] })
            }
          />
        ))}
      </RadioGroup>

      <Button onClick={() => navigate("/home")}> Voltar </Button>
    </section>
  );
};

export default Profile;
