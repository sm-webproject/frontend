import { Center, Flex } from "@chakra-ui/react";
import { Text } from "@components/Element";

const Header = () => (
  <Flex
    bg="transparent"
    flexDir="column"
    height="80px"
    justifyContent="center"
    pb="12px"
    width="100%"
  >
    <Center gap="32px">
      <Text fontSize="xl" fontWeight="bold">
        홈
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        주제별 페이지
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        마이 페이지
      </Text>
    </Center>
  </Flex>
);

export default Header;
