import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Icon,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import DetailsListItem from "./DetailsListItem";
const Bulb = (props) => {
  if (props.device.connectionState === "disconnected") {
    return <Text>disconnected</Text>;
  }
  return (
    <>
      <DetailsListItem>
        <Icon as={IoBulbOutline} h="40%" w="2rem" />
        <Text>{props.device.name}</Text>
        <Switch id="isTurnedOn" isChecked={props.device.isTurnedOn} />
      </DetailsListItem>
      {props.device.isTurnedOn && (
        <>
          <DetailsListItem>
            <Text fontSize="15">brightness</Text>
            <Slider aria-label="slider-ex-1" value={props.device.brightness}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
              <SliderMark
                value={props.device.brightness}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                {props.device.brightness}%
              </SliderMark>
            </Slider>
          </DetailsListItem>

          <DetailsListItem>
            <Text fontSize="15">color</Text>
            <Box
              w="1.7rem"
              h="1.7rem"
              bg={props.device.color}
              borderRadius={20}
              border="2px solid white"
              shadow="md"
            />
          </DetailsListItem>
        </>
      )}
    </>
  );
};
export default Bulb;
