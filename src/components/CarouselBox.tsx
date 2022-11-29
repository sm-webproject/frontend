import { Box, Center } from "@chakra-ui/react";
import { Carousel } from "antd";
import React from "react";

const Carouselbox = () => (
  <Carousel autoplay>
    <Center bg="primary" color="mainText" height="360px" width="100%">
      <Box>Tlog 상단 배너 #1</Box>
    </Center>
    <Center bg="primary" color="mainText" height="360px" width="100%">
      Tlog 상단 배너 #2
    </Center>
    <Center bg="primary" color="mainText" height="360px" width="100%">
      Tlog 상단 배너 #3
    </Center>
    <Center bg="primary" color="mainText" height="360px" width="100%">
      Tlog 상단 배너 #4
    </Center>
    <Center bg="primary" color="mainText" height="360px" width="100%">
      Tlog 상단 배너 #5
    </Center>
  </Carousel>
);

export default Carouselbox;
