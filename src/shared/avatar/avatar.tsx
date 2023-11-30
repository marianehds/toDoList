import React from "react";
import { AvatarProps, BigHead } from "@bigheads/core";
const Avatar = ({
  hair,
  mouth,
  eyes,
  eyebrows,
  facialHair,
  clothing,
  accessory,
}: AvatarProps) => {
  const userAvatarCustom = JSON.parse(
    localStorage.getItem("userAvatar") || "{}"
  );
  const hairToUse = userAvatarCustom.hair || "afro";
  const mouthToUse = userAvatarCustom.mouth || "openSmile";
  const eyesToUse = userAvatarCustom.eyes || "content";
  const eyebrowsToUse = userAvatarCustom.eyebrows || "raised";
  const facialHairToUse = userAvatarCustom.facialHair || "none";
  const clothingToUse = userAvatarCustom.clothing || "shirt";
  const accessoryToUse = userAvatarCustom.accessory || "none";
  return (
    <>
      <BigHead
        hair={hairToUse ? hairToUse : hair}
        hairColor="black"
        eyes={eyesToUse ? eyesToUse : eyes}
        mouth={mouthToUse ? mouthToUse : mouth}
        eyebrows={eyebrowsToUse ? eyebrowsToUse : eyebrows}
        facialHair={facialHairToUse ? facialHairToUse : facialHair}
        clothing={clothingToUse ? clothingToUse : clothing}
        accessory={accessoryToUse ? accessoryToUse : accessory}
        body="chest"
        circleColor="blue"
        clothingColor="black"
        graphic="vue"
        hat="none"
        hatColor="green"
        lipColor="purple"
        skinTone="brown"
      />
    </>
  );
};

export default Avatar;
