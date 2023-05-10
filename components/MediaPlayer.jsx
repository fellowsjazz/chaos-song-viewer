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
  Text,
} from "@chakra-ui/react";
import { FaPause, FaPlay } from "react-icons/fa";
import { format } from "date-fns";

export default function MediaPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [formattedTime, setFormattedTime] = useState();
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
    const formattedTime = format(audioRef.current.currentTime * 1000, "mm:ss");
    setFormattedTime(formattedTime);
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

      <Box
        background={
          isPlaying
            ? "linear-gradient(99.52deg, #FFC076 11.66%, #FF855F 48.53%, #8EEAE4 87.44%),linear-gradient(0deg, #1B1B1B, #1B1B1B)"
            : "rgba(90, 90, 90, 0.25)"
        }
        p={"1px"}
        borderRadius={"4px"}
        boxShadow={
          isPlaying
            ? "4px 4px 12px linear-gradient(99.52deg, #FFC076 11.66%, #FF855F 48.53%, #8EEAE4 87.44%)"
            : "4px 4px 12px rgba(117, 117, 117, 0.15)"
        }
      >
        <Button
          w="89px"
          h="40px"
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={isPlaying ? handlePause : handlePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          bg="#131313"
          border="1px transparent"
          p={"2px"}
          _hover={{ bg: "#1B1B1B" }}
          justifyContent={"flex-start"}
        >
          <HStack pl={"12px"}>
            {isPlaying ? <FaPause /> : <FaPlay />}
            <Text pl={"10px"} letterSpacing={"widest"}>{formattedTime}</Text>
          </HStack>
        </Button>
      </Box>
    </HStack>
  );
}
