import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Device from "./Device";

const DeviceList = (props) => {
  const [deviceList, setDeviceList] = useState([]);

  const getData = (props) => {
    fetch("SmartDevice.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setDeviceList(myJson);
      });
  };

  useEffect(() => {
    if (deviceList) {
      const interval = setInterval(() => {
        getData();
      }, 20000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Flex
      bg="green.300"
      direction="column"
      maxWidth="100vh"
      w={props.width}
      align="center"
      overflow="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#38A169",
          borderRadius: "24px",
        },
      }}
    >
      {deviceList.map((item) => (
        <Device
          device={item}
          onClick={() => {
            props.onClick(item);
          }}
        />
      ))}
    </Flex>
  );
};
export default DeviceList;
