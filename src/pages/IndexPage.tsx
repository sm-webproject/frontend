import { EditOutlined } from "@ant-design/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Carouselbox from "@components/CarouselBox";
import Searchbar from "@components/SearchBar";
import React from "react";
import { Link } from "react-router-dom";

import { Layout } from "../components/Element";

const IndexPage = () => {
  return (
    <Layout bg="background">
      <Box height="40px" textAlign="center">
        <Searchbar />
      </Box>
      <Carouselbox />
      <Flex flexDir="column">
        <Box margin="10%" width="100%">
          <Text fontSize="4xl" fontWeight="bold">
            What is &apos;D&apos;log(임의지정)?
          </Text>
          <Text>
            Developer's Blog의 약자로 개발자들을 위한 Blog 사이트 입니다
          </Text>
        </Box>
        <Box margin="10%">
          <Text height="40px">Dlog에서 제공되는 template을 활용해보세요</Text>
          <Flex height="auto" width="100%">
            <Image
              marginRight="10%"
              src="images\main\example_1.png"
              width="50%"
            ></Image>
            <Image src="images\main\example_2.png" width="50%"></Image>
          </Flex>
        </Box>
        <Box
          style={{
            borderRadius: "20px",
            border: "black solid 1px",
            backgroundColor: "white",
            width: "32px",
            height: "32px",
            marginLeft: "85%",
            marginTop: "20%",
            position: "fixed",
            textAlign: "center",
          }}
        >
          <Link to="/write">
            <EditOutlined />
          </Link>
        </Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
