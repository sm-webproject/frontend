import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Carouselbox from "@components/CarouselBox";
import Searchbar from "@components/SearchBar";
import React from "react";

import { Layout } from "../components/Element";

const IndexPage = () => {
  return (
    <Layout bg="background">
      <Flex flexDir="column" px="20px">
        <Flex height="40px" justifyContent="end">
          <Searchbar />
        </Flex>
        <Carouselbox />
        <Box my="48px" width="100%">
          <Text fontSize="4xl" fontWeight="bold">
            What is &apos;D&apos;log(임의지정)?
          </Text>
          <Text>
            Developer&apos;s Blog의 약자로 개발자들을 위한 Blog 사이트 입니다
          </Text>
        </Box>
        <Box width="100%">
          <Text height="40px">Dlog에서 제공되는 template을 활용해보세요</Text>
          <Flex gap="20px" width="100%">
            <Image src="images\main\example_1.png" width="50%" />
            <Image src="images\main\example_2.png" width="50%" />
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
