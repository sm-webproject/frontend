import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Carouselbox from "@components/CarouselBox";
import { Layout } from "@components/Element";
import axios from "axios";
import React from "react";

const IndexPage = () => {
  const testCall = async () => {
    const data = await axios.get("/users");

    console.log(data);
  };

  return (
    <Layout bg="background">
      <Carouselbox />
      <Flex flexDir="column" px="20px">
        <Box my="48px" width="100%">
          <Text
            color="mainText"
            fontSize="3xl"
            fontWeight="bold"
            onClick={() => testCall()}
          >
            What is &apos;T&apos;log?
          </Text>
          <Text color="mainText">
            Template Blog의 약자로 개발자들을 위한 Tlog 사이트 입니다
          </Text>
        </Box>
        <Flex flexDir="column" gap="16px">
          <Text color="mainText" height="40px">
            Tlog에서 제공되는 템플릿을 활용해보세요
          </Text>
          <Flex flexDir={["column", "row", "row"]} gap="20px" width="100%">
            <Image
              src="images\main\example_1.png"
              width={["100%", "50%", "50%"]}
            />
            <Image
              src="images\main\example_2.png"
              width={["100%", "50%", "50%"]}
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
