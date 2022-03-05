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
const Bulb = ({ device }) => {
  return (
    <>
      <DetailsListItem>
        <Icon as={IoBulbOutline} h="40%" w="2rem" />
        <Switch id="isTurnedOn" isChecked={device.isTurnedOn} />
      </DetailsListItem>
      {device.isTurnedOn && (
        <>
          <DetailsListItem>
            <Text fontSize="15">brightness</Text>
            <Slider aria-label="slider-ex-1" value={device.brightness}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
              <SliderMark
                value={device.brightness}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                {device.brightness}%
              </SliderMark>
            </Slider>
          </DetailsListItem>

          <DetailsListItem>
            <Text fontSize="15">color</Text>
            <Box
              w="1.7rem"
              h="1.7rem"
              css={{ background: "#" + device.color }}
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
