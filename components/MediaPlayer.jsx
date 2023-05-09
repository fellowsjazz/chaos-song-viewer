import { useState, useRef } from "react";
import {
  Box,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function MediaPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (value) => {
    audioRef.current.currentTime = value;
  };

  return (
    <HStack>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handlePause}
      />
      
      <IconButton
        w="89px"
        icon={isPlaying ? <FaPause /> : <FaPlay />}
        onClick={isPlaying ? handlePause : handlePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        bg="#131313"
        border="1px solid"
        borderColor={"rgba(90, 90, 90, 0.25)"}
        _hover={{bg:"#1B1B1B"}}
      />
    </HStack>
  );
}
