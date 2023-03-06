import { BigHead } from "@bigheads/core";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const Example = () => (
    <BigHead
      accessory="shades"
      body="chest"
      circleColor="blue"
      clothing="tankTop"
      clothingColor="black"
      eyebrows="angry"
      eyes="wink"
      facialHair="mediumBeard"
      graphic="vue"
      hair='long'
      hairColor="black"
      hat="none"
      hatColor="green"
      lashes={true}
      lipColor="purple"
      mask={true}
      faceMask={true}
      mouth="open"
      skinTone="brown"
    />
  );
  const [cabelo, setCabelo] = useState("long");

  return (
    <div>
      <TextField value={cabelo} onChange={(e) => setCabelo(e.target.value)} />
    </div>
  );
};

export default Profile;
