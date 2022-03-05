import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Bulb from "./Bulb";
import Outlet from "./Outlet";
import TemperatureSensor from "./TemperatureSensor";

const Details = (props) => {
  const [deviceDetails, setDeviceDetails] = useState();

  const getData = () => {
    fetch("SmartDevicesDetails.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        myJson.forEach((item) => {
          if (item.id === props.device.id) {
            setDeviceDetails(item);
          }
        });
      });
  };

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, [props]);

  if (props.device.connectionState === "disconnected") {
    return (
      <Text p="2" align="center">
        disconnected
      </Text>
    );
  }

  return (
    <Flex direction="column" p="10">
      {deviceDetails && deviceDetails.type === "bulb" && (
        <Bulb device={deviceDetails} />
      )}
      {deviceDetails && deviceDetails.type === "outlet" && (
        <Outlet device={deviceDetails} />
      )}
      {deviceDetails && deviceDetails.type === "temperatureSensor" && (
        <TemperatureSensor device={deviceDetails} />
      )}
    </Flex>
  );
};

export default Details;
