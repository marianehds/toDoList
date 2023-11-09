import React, { useEffect, useState } from "react";
import Avatar from "../../shared/avatar/avatar";
import "./profile.scss";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AvatarProps, hairMap, mouthsMap } from "@bigheads/core";

const Profile = () => {
  const navigate = useNavigate();
  const userLocalStorage = localStorage.getItem("user")?.replace(/[\\"]/g, "");

  const [avatarCustom, setAvatarCustom] = useState<AvatarProps>({});
  
  useEffect(() => {
    localStorage.setItem('userAvatar', JSON.stringify(avatarCustom));
  }, [avatarCustom]);

  const hairMapKeys = Object.keys(hairMap);
  const mouthsMapKeys = Object.keys(mouthsMap);
  // console.log(avatarCustom)
  // const eyesMapKeys = Object.keys(eyesMap);
  // const mouthsMap = Object.keys(mouthsMap);
  // const eyebrowsMapKeys = Object.keys(eyebrowsMap);
  // const mouthsMap = Object.keys(mouthsMap);
  // const facialHairMap = Object.keys(facialHairMap);
  // const clothingMap = Object.keys(clothingMap);
  // const accessoryMap = Object.keys(accessoryMap);
  // const hatMap = Object.keys(hatMap);  

  return (
    <section data-page="profile">
      <div className="avatar">
        <Avatar mouth={avatarCustom.mouth} hair={avatarCustom.hair} />
      </div>
      <p className="header--user-name">{userLocalStorage}</p>

      <p>Hair</p>

      <RadioGroup
        defaultValue="none"
        name="radio-group-hair"
        style={{ display: "inline" }}
      >
        {hairMapKeys.map((item, key) => (
          <FormControlLabel
            key={key}
            label={item}
            value={item}
            control={<Radio />}
            onClick={() =>
              setAvatarCustom({
                ...avatarCustom,
                hair: item as AvatarProps["hair"],
              })
            }
          />
        ))}
      </RadioGroup>

      <p>Mouth</p>
      <RadioGroup
        defaultValue="grin"
        name="radio-group-mouth"
        style={{ display: "inline" }}
      >
        {mouthsMapKeys.map((item, key) => (
          <>
            <FormControlLabel
              key={key}
              label={item}
              value={item}
              control={<Radio />}
              onClick={() =>
                setAvatarCustom({
                  ...avatarCustom,
                  mouth: item as AvatarProps["mouth"],
                })
              }
            />
          </>
        ))}
      </RadioGroup>

      {/* <RadioGroup
        defaultValue="normal"
        name="radio-group-eyes"
        style={{ display: "inline" }}
      >
        {eyesMapKeys.map((item) => (
          <FormControlLabel
            key={1}
            label={item}
            value={item}
            control={<Radio />}
            onClick={() =>
              setAvatar({
                ...avatar,
                eyes: item as AvatarProps["eyes"],
              })
            }
          />
        ))}
      </RadioGroup> */}

      <Button onClick={() => navigate("/home")}> Voltar </Button>
    </section>
  );
};

export default Profile;
