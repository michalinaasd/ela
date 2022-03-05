import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Device from "./Device";

const DeviceList = (props) => {
  const [deviceList, setDeviceList] = useState([]);

  const getData = () => {
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
    getData();
  }, []);

  return (
    <Flex
      bg="green.300"
      direction="column"
      w={props.width}
      align="center"
      overflow="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "100%",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#38A169",
          borderRadius: "24px",
        },
        height: "100vh",
      }}
    >
      {deviceList.map((item) => (
        <Device
          key={item.id}
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
