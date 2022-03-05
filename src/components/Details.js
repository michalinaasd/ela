import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Bulb from "./Bulb";
import Outlet from "./Outlet";
import TemperatureSensor from "./TemperatureSensor";

const Details = (props) => {
  if (props.device?.connectionState === "disconnected")
    return (
      <Flex direction="column" p="10">
        <Text p="2" align="center">
          disconnected
        </Text>
        <Button onClick={props.onClick}>Generate</Button>
      </Flex>
    );

  return (
    <>
      <Flex direction="column" p="10">
        {props.device && props.device.type === "bulb" && (
          <Bulb device={props.device} />
        )}
        {props.device && props.device.type === "outlet" && (
          <Outlet device={props.device} />
        )}
        {props.device && props.device.type === "temperatureSensor" && (
          <TemperatureSensor device={props.device} />
        )}
        <Button onClick={props.onClick}>Generate</Button>
      </Flex>
    </>
  );
};

export default Details;
