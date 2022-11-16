import { Flex, Img } from "@chakra-ui/react";
import React from "react";

import { Layout } from "../components/Element";

const IndexPage = () => {
  return (
    <Layout bg="background">
      <Img height="320px" src="/images/logo.png" width="100%" />
      <Flex flexDir="column">
        <Flex borderBottom="1px solid black" height="80px" width="100%">
          아이템 1
        </Flex>
        <Flex borderBottom="1px solid black" height="80px" width="100%">
          아이템 1
        </Flex>
        <Flex borderBottom="1px solid black" height="80px" width="100%">
          아이템 1
        </Flex>
        <Flex borderBottom="1px solid black" height="80px" width="100%">
          아이템 1
        </Flex>
        <Flex borderBottom="1px solid black" height="80px" width="100%">
          아이템 1
        </Flex>
        <Flex borderBottom="1px solid black" height="80px" width="100%">
          아이템 1
        </Flex>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
