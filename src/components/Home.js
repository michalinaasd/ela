import { Flex, Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import DeviceList from "./DeviceList";
import interact from "interactjs";
import Details from "./Details";

const Home = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

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
  return (
    <Flex>
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
              shadow="xl"
              w={[null, "15rem", "25rem"]}
              borderRadius={20}
            >
              <Flex justifyContent="space-between" align="center" pt="5" px="3">
                <Text fontSize={["1rem", "1.5rem", "1.5rem"]} pl="1rem">
                  {selectedDevice.name.toUpperCase()}
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
              {selectedDevice && <Details device={selectedDevice} />}
            </Box>
          )}
        </div>
      }
    </Flex>
  );
};

export default Home;
