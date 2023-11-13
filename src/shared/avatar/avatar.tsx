import React from "react";
import { AvatarProps, BigHead } from "@bigheads/core";
const Avatar = ({ hair, mouth, eyes, eyebrows}: AvatarProps) => {

  const userAvatarCustom = JSON.parse(localStorage.getItem("userAvatar") || "{}");
  const hairToUse = userAvatarCustom.hair || "afro";
  const mouthToUse = userAvatarCustom.mouth || "openSmile";
  const eyesToUse = userAvatarCustom.eyes || "content";
  const eyebrowsToUse = userAvatarCustom.eyebrows || "raised";
  return (
    <div>
      <BigHead
        hair={hairToUse? hairToUse : hair }
        hairColor="black"
        eyes={eyesToUse ? eyesToUse : eyes }
        mouth={mouthToUse ? mouthToUse : mouth}
        eyebrows={eyebrowsToUse ? eyebrowsToUse : eyebrows}
        accessory="none"
        body="chest"
        circleColor="blue"
        clothing="tankTop"
        clothingColor="black"
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
