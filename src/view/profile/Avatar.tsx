import { BigHead, eyesMap } from "@bigheads/core";
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Avatar.scss";

const Avatar = () => {
  const Example = () => (
    <BigHead
      accessory="none"
      body="chest"
      circleColor="blue"
      clothing="dress"
      clothingColor="white"
      eyebrows="raised"
      eyes="squint"
      faceMask={false}
      faceMaskColor="white"
      facialHair="none"
      graphic="react"
      hair="long"
      hairColor="pink"
      hat="none4"
      hatColor="blue"
      lashes
      lipColor="purple"
      mask
      mouth="lips"
      skinTone="brown"
    />
  );

  return (
    <>
      <h1 className="avatar">{Example()}</h1>
    </>
  );
};

export default Avatar;
