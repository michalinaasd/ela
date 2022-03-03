import { Flex } from "@chakra-ui/react";
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
          if (item.id === props.deviceId) {
            setDeviceDetails(item);
          }
        });
      });
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <Flex direction="column" p="1">
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
