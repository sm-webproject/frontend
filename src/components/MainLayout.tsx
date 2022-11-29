import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const MainLayout = () => (
  <Flex bg="background" flexDir="column" mx="20px">
    <Header />
    <Outlet />
  </Flex>
);

export default MainLayout;
