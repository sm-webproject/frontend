import { Center, Flex, Img, Text } from "@chakra-ui/react";

const Header = () => (
  <Flex
    borderBottom="3px solid"
    borderColor="primary"
    flexDir="column"
    justifyContent="center"
    pb="12px"
    width="100%"
  >
    <Center>
      <Img height="80px" src="/images/logo.png" width="80px" />
      <Text color="primary" fontSize="60px" lineHeight={1}>
        PC
      </Text>
      <Text color="secondary" fontSize="60px" lineHeight={1}>
        UP
      </Text>
    </Center>
    <Center>
      <Text color="primary" fontSize="16px" fontWeight="bold" lineHeight={1}>
        Personal Color & Make Up
      </Text>
    </Center>
  </Flex>
);

export default Header;
