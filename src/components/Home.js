import { Flex, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import DeviceList from "./DeviceList";
import interact from "interactjs";
import Details from "./Details";

const Home = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  //const position = { x: 0, y: 0 };
  const [position, setPosition] = useState({ x: 0, y: 0 });

  interact(".draggable").draggable({
    listeners: {
      start(event) {
        console.log(position.x);
        setPosition({
          x: (position.x += event.dx),
          y: (position.y += event.dy),
        });
        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
      move(event) {
        //position.x += event.dx;
        // position.y += event.dy;
        setPosition({
          x: (position.x += event.dx),
          y: (position.y += event.dy),
        });

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });
  return (
    <Flex w="100vw" h="100vh">
      <DeviceList
        width="25%"
        onClick={(device) => {
          setSelectedDevice(device);
        }}
      />
      {
        <div className="draggable" hidden={!selectedDevice}>
          {selectedDevice && (
            <Box
              bg="green.100"
              shadow="sm"
              h="30rem"
              w={["10rem", "15rem", "20rem"]}
              borderRadius={20}
            >
              <Flex justifyContent="right">
                <Button
                  onClick={() => {
                    setSelectedDevice(null);
                  }}
                >
                  Close
                </Button>
              </Flex>
              {selectedDevice && (
                <Details
                  device={selectedDevice.type}
                  deviceId={selectedDevice.id}
                />
              )}
            </Box>
          )}
        </div>
      }
    </Flex>
  );
};

export default Home;
