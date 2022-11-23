import { UserOutlined } from "@ant-design/icons";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@components/Element";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const Header = () => (
  <Flex
    bg="transparent"
    flexDir="column"
    float="right"
    height="60px"
    pb="12px"
    width="100%"
  >
    <Text fontSize="2xl" fontWeight="bold" textAlign="center">
      <Link style={{ color: "black" }} to="/">
        Dlog
      </Link>
    </Text>
    <Box float="right" marginTop="1" position="absolute">
      <Avatar icon={<UserOutlined />} />
    </Box>
    {
      // Avartar 오른쪽으로 밀어놓기..
    }
  </Flex>
);

export default Header;
