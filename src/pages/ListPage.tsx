import { Flex, Text } from "@chakra-ui/react";
import Cards from "@components/Cards";
import { Layout } from "@components/Element";
import { getFetcher } from "@utils/fetcher";
import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

import Board from "@/interfaces/Board";

const ListPage = () => {
  const { data } = useSWR<Board[]>("/boards", getFetcher);

  return (
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
        {data &&
          data.map((value, index) => (
            <Link key={index} to="/">
              <Cards board={value} />
            </Link>
          ))}
      </Flex>
    </Layout>
  );
};

export default ListPage;
