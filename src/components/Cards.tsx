import { Flex, Img } from "@chakra-ui/react";
import { Text } from "@components/Element";

import Board from "@/interfaces/Board";

interface CardsProps {
  board: Board;
}

const Cards = ({ board }: CardsProps) => (
  <Flex borderBottom=" 1px solid" borderColor="primary" gap="16px" p="16px">
    <Img height="80px" src={board.mainImg} width="80px" />
    <Flex justifyContent="space-between" width="100%">
      <Flex flexDir="column">
        <Text color="mainText" fontSize="md" fontWeight="bold">
          {board.title}
        </Text>
        <Text color="subText" fontSize="xs" fontWeight="bold">
          {board.writer}
        </Text>
      </Flex>
      <Text color="subText" fontSize="xs" fontWeight="bold">
        {board.create_at}
      </Text>
    </Flex>
  </Flex>
);

export default Cards;
