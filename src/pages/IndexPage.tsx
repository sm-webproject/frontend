import { EditOutlined } from "@ant-design/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Carouselbox from "@components/CarouselBox";
import { Layout } from "@components/Element";
import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => (
  <Layout bg="background">
    <Carouselbox />
    <Flex bottom="3" position="fixed" right="3">
      <Link to="/write">
        <Avatar icon={<EditOutlined />} />
      </Link>
    </Flex>
    <Flex flexDir="column" px="20px">
      <Box my="48px" width="100%">
        <Text color="mainText" fontSize="3xl" fontWeight="bold">
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

export default IndexPage;
