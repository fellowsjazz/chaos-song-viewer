import React from "react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";

export default function SongSelect(props) {
  const [selectedSong, setSelectedSong] = useState();

  function handleSelectChange(event) {
    setSelectedSong(event.target.value);
    console.log("Selected Song: ", event.target.value)
    props.onSongSelect(event.target.value)
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
    "iNVASiON",
    "Oxytocin",
    "FROLiC",
    "OuttaControl!",
    "PROViDE",
    "The Fire",
    "Way Of The DAO",
  ];

  return (
    <Select placeholder="Select Song" onChange={handleSelectChange} variant='outline' p="10px" maxW="400px">
      {options.map((option) => (
        <option key={option.value} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
