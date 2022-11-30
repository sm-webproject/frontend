import {
  EditOutlined,
  LoginOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@components/Element";
import useAuth from "@store/useAuth";
import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Flex
      alignItems="center"
      bg="transparent"
      height="80px"
      justifyContent="space-between"
      width="100%"
    >
      <Link to="/">
        <Text color="mainText" fontSize="2xl" fontWeight="bold">
          Tlog
        </Text>
      </Link>
      <Flex alignItems="center" gap="16px">
        {user && (
          <Link to="/mypage">
            <Avatar icon={<UserOutlined />} />
          </Link>
        )}
        {user && (
          <Link to="/write">
            <Avatar icon={<EditOutlined />} />
          </Link>
        )}
        <Link to="list">
          <Avatar icon={<OrderedListOutlined />} />
        </Link>
        {user ? (
          <Box cursor="pointer">
            <Avatar icon={<LogoutOutlined />} onClick={() => logout()} />
          </Box>
        ) : (
          <Link to="login">
            <Avatar icon={<LoginOutlined />} />
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
