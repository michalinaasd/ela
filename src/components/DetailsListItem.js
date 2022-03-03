import { Flex } from "@chakra-ui/react";
import React from "react";
const DetailsListItem = (props) => {
  return (
    <Flex
      justify="space-between"
      direction="column"
      align="center"
      shadow="md"
      h="5rem"
      p="2"
      m="2"
    >
      {props.children}
    </Flex>
  );
};

export default DetailsListItem;
