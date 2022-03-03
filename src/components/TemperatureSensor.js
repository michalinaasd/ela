import { Icon, Text } from "@chakra-ui/react";
import React from "react";
import DetailsListItem from "./DetailsListItem";
import { IoThermometerOutline } from "react-icons/io5";
const TemperatureSensor = (props) => {
  return (
    <>
      <DetailsListItem fontSize>
        <Icon as={IoThermometerOutline} h="40%" w="2rem" />
        <Text>{props.device.name}</Text>
      </DetailsListItem>

      <DetailsListItem>
        <Text fontSize="15">temperature</Text>
        <Text>{props.device.temperature}°C</Text>
      </DetailsListItem>
    </>
  );
};

export default TemperatureSensor;
