import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface MainTextBoxProps {
  text: string;
  number: number;
  reverse?: boolean;
}

const MainTextBox = ({ text, number, reverse }: MainTextBoxProps) => (
  <Flex flexDir="column" m="20px">
    <Box
      bg="primary"
      borderRadius="8px 8px 0px 0px"
      height="32px"
      ml="8px"
      width="120px"
    />
    <Box bg="primary" borderRadius="8px 8px 0 0" height="8px" width="100%" />
    <Flex height="100%">
      <Flex bg="secondary" borderRadius="0 0 0 8px" width="8px" />
      <Flex
        bg="containerBackground"
        borderRadius="0px 0px 8px 0px"
        height="100%"
        p="8px"
        width="100%"
      >
        <Text fontSize="12px">{text}</Text>
      </Flex>
    </Flex>
  </Flex>
);

export default MainTextBox;
