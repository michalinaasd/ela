import { Icon, Switch, Text } from "@chakra-ui/react";
import React from "react";
import { IoFlashOutline } from "react-icons/io5";
import DetailsListItem from "./DetailsListItem";
const Outlet = (props) => {
  if (props.device.connectionState === "disconnected") {
    return <Text>disconnected</Text>;
  }
  return (
    <>
      <DetailsListItem>
        <Icon as={IoFlashOutline} h="40%" w="2rem" />
        <Text>{props.device.name}</Text>
        <Switch id="isTurnedOn" isChecked={props.device.isTurnedOn} />
      </DetailsListItem>

      <DetailsListItem>
        <Text fontSize="15">power consumption</Text>
        <Text>{props.device.powerConsumption} W</Text>
      </DetailsListItem>
    </>
  );
};

export default Outlet;
