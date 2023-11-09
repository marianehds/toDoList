import React from "react";
import { AvatarProps, BigHead } from "@bigheads/core";
const Avatar = ({ hair, mouth}: AvatarProps) => {

  const userAvatarCustom = JSON.parse(localStorage.getItem("userAvatar") || "{}");
  const hairToUse = userAvatarCustom.hair || "afro";
  const mouthToUse = userAvatarCustom.mouth || "openSmile";
  return (
    <div>
      <BigHead
        hair={hairToUse? hairToUse : hair }
        hairColor="black"
        eyes="content"
        mouth={mouthToUse ? mouthToUse : mouth}
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
