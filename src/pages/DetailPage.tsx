import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Layout } from "@components/Element";
import { getFetcher } from "@utils/fetcher";
import { Modal } from "antd";
import axios from "axios";
import moment from "moment";
import { useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

import Board from "@/interfaces/Board";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { data } = useSWR<Board>("/boards/" + id, getFetcher);

  const handleDelete = useCallback(async () => {
    try {
      await axios.delete("/boards/" + id);
      Modal.success({
        title: "게시글 삭제",
        content: "삭제되었습니다.",
        onOk: () => navigate("/board"),
        onCancel: () => navigate("/board"),
      });
    } catch {
      Modal.error({ title: "게시글 삭제", content: "오류가 발생했습니다." });
    }
  }, [id, navigate]);

  return (
    <Layout>
      {data && (
        <Flex flexDir="column" gap="16px" margin="auto" mx={3} my={3}>
          <Flex gap="16px" justifyContent="end">
            <Button
              bg="background"
              border="1px solid"
              borderColor="mainText"
              color="mainText"
              fontSize="sm"
              onClick={() => handleDelete()}
              textDecorationLine="underline"
            >
              Delete
            </Button>
            <Link to={"/write?id=" + id}>
              <Button
                bg="background"
                border="1px solid black"
                borderColor="mainText"
                color="mainText"
                fontSize="sm"
                textDecorationLine="underline"
              >
                Edit
              </Button>
            </Link>
          </Flex>
          <Text fontSize="40px" fontWeight="bold">
            {data.title}
          </Text>
          <Flex my="3">
            <Text fontWeight="bold">{data.writer}&nbsp;·&nbsp;</Text>
            <Text>{moment(data.create_at).format("YYYY년 MM월 DD일")}</Text>
          </Flex>
          <Image src="/images/main/example_1.png" width="100%" />
          <Box dangerouslySetInnerHTML={{ __html: data.content }} m="3" />
        </Flex>
      )}
    </Layout>
  );
};

export default DetailPage;
