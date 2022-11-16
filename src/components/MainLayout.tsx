import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <Flex bg="background" flexDir="column" mx="20px">
    <Header />
    <Outlet />
  </Flex>
);

export default MainLayout;
