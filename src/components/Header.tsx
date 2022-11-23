import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Flex } from "@chakra-ui/react";
import { Text } from "@components/Element";
import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <Flex
    alignItems="center"
    bg="transparent"
    height="60px"
    justifyContent="space-between"
    width="100%"
  >
    <Text fontSize="2xl" fontWeight="bold">
      <Link style={{ color: "black" }} to="/">
        Dlog
      </Link>
    </Text>
    <Flex alignItems="center" gap="16px">
      <Avatar icon={<UserOutlined />} />
      <Link to="/write">
        <Avatar icon={<EditOutlined />} />
      </Link>
    </Flex>
  </Flex>
);

export default Header;
