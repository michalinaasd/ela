import { Flex, Text } from "@chakra-ui/react";
import { SmartDevices } from "../SmartDevices";
import React from "react";
const DetailsListItem = (props) => {
  return (
    <Flex
      justify="space-between"
      shadow="md"
      bg="gray.100"
      border="1px"
      borderColor="gray.400"
      h="2.5rem"
      p="2"
      m="2"
    >
      <Text fontSize="15">
        {SmartDevices[props.value[0]] || props.value[0]}
      </Text>
      <Text fontSize="15">
        {SmartDevices[props.value[1]] || props.value[1]}
      </Text>
    </Flex>
  );
};

export default DetailsListItem;
