import { Flex, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import {
  IoBulbOutline,
  IoThermometerOutline,
  IoFlashOutline,
} from "react-icons/io5";

const Device = (props) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 480px)");
  const deviceIcon = {
    temperatureSensor: IoThermometerOutline,
    bulb: IoBulbOutline,
    outlet: IoFlashOutline,
  };
  return (
    <Flex
      as="button"
      direction={["column", "row", "row"]}
      justifyContent={["center", "space-between", "space-between"]}
      align="center"
      bg="white"
      w="80%"
      shadow="md"
      minHeight="5.5rem"
      m=".5rem"
      p={["1rem", ".5rem", "1rem"]}
      borderRadius={8}
      onClick={() => props.onClick()}
    >
      <Icon as={deviceIcon[props.device.type]} h="100%" w="2rem" />
      <Flex direction="column" textAlign={["center", "right", "right"]}>
        <Text fontSize={[10, 10, 20]}>{props.device.name}</Text>
        <Text
          fontSize={[null, 7, 15]}
          fontWeight="light"
          hidden={isSmallScreen}
        >
          {props.device.connectionState}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Device;
