import { Flex, Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import DeviceList from "./DeviceList";
import interact from "interactjs";
import Details from "./Details";
import { connectionState } from "../constants";

const Home = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [deviceDetails, setDeviceDetails] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  interact(".draggable").draggable({
    listeners: {
      start(event) {
        setPosition({
          x: (position.x += event.dx),
          y: (position.y += event.dy),
        });
        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
      move(event) {
        setPosition({
          x: (position.x += event.dx),
          y: (position.y += event.dy),
        });

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });
  const getData = (device) => {
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
          if (item.id === device.id) {
            setDeviceDetails(item);
          }
        });
      });
  };

  return (
    <Flex>
      <DeviceList
        width="25%"
        onClick={(item) => {
          setSelectedDevice(item);
          getData(item);
        }}
      />
      {selectedDevice && (
        <div className="draggable">
          <Box
            bg="green.100"
            shadow="xl"
            w={[null, "15rem", "25rem"]}
            borderRadius={20}
          >
            <Flex justifyContent="space-between" align="center" pt="5" px="3">
              <Text fontSize={["1rem", "1.5rem", "1.5rem"]} pl="1rem">
                {deviceDetails?.name.toUpperCase()}
              </Text>
              <Button
                size="sm"
                onClick={() => {
                  setSelectedDevice(null);
                }}
              >
                Close
              </Button>
            </Flex>
            {selectedDevice && (
              <Details
                device={deviceDetails}
                onClick={() => {
                  setDeviceDetails({
                    ...deviceDetails,
                    connectionState:
                      connectionState[
                        Math.floor(Math.random() * connectionState.length)
                      ],
                    isTurnedOn: Math.random() < 0.8,
                    brightness: Math.floor(Math.random() * 100),
                    color: Math.floor(Math.random() * 16777215).toString(16),
                    temperature: Math.floor(Math.random() * 30),
                  });
                }}
              />
            )}
          </Box>
        </div>
      )}
    </Flex>
  );
};

export default Home;
