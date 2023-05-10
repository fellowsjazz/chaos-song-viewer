import React from "react";
import { Select, Box, ColorModeProvider, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

export default function SongSelect(props) {
  const [selectedSong, setSelectedSong] = useState();
  const [isSmallerThanDesktop] = useMediaQuery("(max-width: 1080px)");

  function handleSelectChange(event) {
    setSelectedSong(event.target.value);
    console.log("Selected Song: ", event.target.value);
    props.onSongSelect(event.target.value);
  }

  const options = [
    "Struggle No More",
    "Monday",
    "Moviess",
    "Cocktail",
    "Lagrimas De Cielo",
    "Gonna Make It",
    "Where Things Fall Apart",
    "Chaos",
    "Content",
    "It All Led Me Back To You",
    "In The Silence",
    "Crash",
    "Ruckus",
    "Golden Apple",
    "Walls",
    "Everseen",
    "Walls to Fade",
    ".ETHY",
    "Immortalized",
    "Honeybee",
    "Let It Fall",
    "Moonrise",
    "Pull Me Under",
    "Unravel Me",
    "Part Time Internet Friends",
    "Single Hater",
    "Forget You",
    "Here and Now",
    "Special",
    "We've Been Here",
    "I'm Alright",
    "Enemies",
    "You",
    "Falling",
    "Late Bloomer",
    "Bonsai",
    "Six of Wands",
    "Mad Vision",
    "iNVASiON ",
    "Oxytocin",
    "FROLiC",
    "OuttaControl!",
    "PROViDE",
    "The Fire",
    "Way Of The DAO",
  ];

  const customOptionStyles = {
    bg: "#181818"
  }

  return (
    <ColorModeProvider value="dark">
    <Select
      placeholder="SELECT SONG"
      onChange={handleSelectChange}
      border={"1px solid rgba(90, 90, 90, 0.25)"}
      boxShadow={"4px 4px 12px rgba(117, 117, 117, 0.15);"}
      w={isSmallerThanDesktop ? "90%":"356px"}
      textAlign={"left"}
      bgColor={"#181818"}
    iconSize="s"
    variant={"outline"}>
      {options.map((option) => (
        <option key={option.value} value={option} style={customOptionStyles}>
          {option.toUpperCase()}
        </option>
      ))}
    </Select>
    </ColorModeProvider>
  );
}
