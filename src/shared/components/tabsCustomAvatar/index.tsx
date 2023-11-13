import React, { useState, useEffect } from "react";
import { AvatarProps, hairMap, mouthsMap } from "@bigheads/core";
import {
  BottomNavigation,
  BottomNavigationAction,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Avatar from "../../avatar/avatar";
import "./index.style.scss";

const TabsCustomAvatar = () => {
  //   interface MeuObjeto {
  //     [key: number]: string;
  //   }

  const [value, setValue] = React.useState(0);

  const [avatarCustom, setAvatarCustom] = useState<AvatarProps>({});

  useEffect(() => {
    localStorage.setItem("userAvatar", JSON.stringify(avatarCustom));
  }, [avatarCustom]);

  const hairMapKeys = Object.keys(hairMap);
  const mouthsMapKeys = Object.keys(mouthsMap);
  // console.log(avatarCustom)
  // const eyesMapKeys = Object.keys(eyesMap);
  // const eyebrowsMapKeys = Object.keys(eyebrowsMap);
  // const facialHairMap = Object.keys(facialHairMap);
  // const clothingMap = Object.keys(clothingMap);
  // const accessoryMap = Object.keys(accessoryMap);
  // const hatMap = Object.keys(hatMap);

  const propAvatarCustom: {
    [key: number]: JSX.Element;
  } = {
    1: (
      <>
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
      </>
    ),
    2: (
      <>
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
      </>
    ),
    3: <div>olhos</div>,
  };

  return (
    <section data-component="tabs-custom-avatar">
      <div className="avatar">
        <Avatar mouth={avatarCustom.mouth} hair={avatarCustom.hair} />
      </div>
      <div className="ButtonsNavigation">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Hair" value={1} />
          <BottomNavigationAction label="Mouth" value={2} />
          <BottomNavigationAction label="Eyes" value={3} />
          <BottomNavigationAction label="Eyebrows" value={4} />
          <BottomNavigationAction label="FacialHair" value={5} />
          <BottomNavigationAction label="Clothing" value={6} />
          <BottomNavigationAction label="Accessory" value={7} />
          <BottomNavigationAction label="Hat" value={8} />
        </BottomNavigation>
      </div>
      {propAvatarCustom[value]}
    </section>
  );
};

export default TabsCustomAvatar;
