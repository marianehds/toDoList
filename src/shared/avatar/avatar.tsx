import React from "react";
import { BigHead } from "@bigheads/core";
import TAvatar from "./avatar.type";

const Avatar = ({ hair }: TAvatar) => {
  return (
    <div>
      <BigHead
        hair={hair}
        hairColor="black"
        eyes="content"
        mouth="lips"
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
