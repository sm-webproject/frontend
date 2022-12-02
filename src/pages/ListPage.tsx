import { Flex, Text } from "@chakra-ui/react";
import Cards from "@components/Cards";
import { Layout } from "@components/Element";
import React from "react";

import Board from "@/interfaces/Board";

const sampleData: Board[] = [
  {
    mainImg: "/images/main/example_1.png",
    title: "테스트1",
    writer: "작성자1",
    content: "내용이 너무 길어서 넘칠때 ...처리해준다",
    create_at: "2020-11-29",
  },
  {
    mainImg: "/images/main/example_2.png",
    title: "테스트2",
    writer: "작성자2",
    content: "내용2",
    create_at: "2020-11-29",
  },
  {
    mainImg: "/images/main/example_1.png",
    title: "테스트3",
    writer: "작성자3",
    content: "내용3",
    create_at: "2020-11-29",
  },
  {
    mainImg: "/images/main/example_1.png",
    title: "테스트4",
    writer: "작성자4",
    content: "내용4",
    create_at: "2020-11-29",
  },
  {
    mainImg: "/images/main/example_1.png",
    title: "테스트5",
    writer: "작성자5",
    content: "내용5",
    create_at: "2020-11-29",
  },
];

const ListPage = () => (
  <Layout>
    <Flex flexDir="column" gap="16px" height="100px">
      <Text
        fontSize="20px"
        fontWeight="bold"
        lineHeight="100px"
        textAlign="center"
      >
        Board List
      </Text>
    </Flex>

    <Flex flexDir="column" gap="16px">
      {sampleData.map((value, index) => (
        <Cards key={index} board={value} />
      ))}
    </Flex>
  </Layout>
);

export default ListPage;
