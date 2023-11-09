import React from "react";
import { AvatarProps, BigHead } from "@bigheads/core";
const Avatar = ({ hair, mouth}: AvatarProps) => {
  return (
    <div>
      <BigHead
        hair={hair ? hair : "afro"}
        hairColor="black"
        eyes="content"
        mouth={mouth ? mouth : "openSmile"}
        accessory="none"
        body="chest"
        circleColor="blue"
        clothing="tankTop"
        clothingColor="black"
        eyebrows="raised"
        facialHair="none"
        graphic="vue"
        hat="none"
        hatColor="green"
        lipColor="purple"
        skinTone="brown"
      />
    </div>
  );
};

export default Avatar;
