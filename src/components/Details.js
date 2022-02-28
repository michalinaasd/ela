import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DetailsListItem from "./DetailsListItem";

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
      {deviceDetails &&
        Object.entries(deviceDetails).map((value) => {
          if (value[0] !== "id" && value[0] !== "type")
            return <DetailsListItem value={value} />;
        })}
    </Flex>
  );
};

export default Details;
