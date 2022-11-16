import {
  Box,
  Center,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Editor from "@components/Editor";
import {
  Button,
  Col,
  Container,
  Layout,
  Row,
  SkeletonBox,
  Text,
} from "@components/Element";
import { DatePicker, Modal } from "antd";
import React from "react";

function IndexPage() {
  const { toggleColorMode, colorMode } = useColorMode();

  const color = useColorModeValue("blue.500", "red.200");

  return (
    <Layout>
      <Container>
        <Row gutter={3}>
          <Col span={24}>
            <Center>
              <Text fontSize="5xl">데브파이브 프론트 시스템</Text>
            </Center>
            <Center mb={4}>
              <Text>텍스트는 xs, sm, md, lg, xl, xxl 등으로 이루어집니다</Text>
            </Center>
          </Col>
          <Col
            span={12}
            sx={{
              color: "red",
            }}
          >
            <Flex
              cursor="pointer"
              flexDirection="column"
              gap={["20px", "40px", "50px"]}
            >
              <SkeletonBox h="100px" w="100px">
                스켈레톤
              </SkeletonBox>
              <Text fontSize="xx-large">텍스트</Text>
              <Text
                fontSize="xx-large"
                onClick={() =>
                  Modal.success({
                    content: (
                      <>
                        <Box mb={4}>차크라 마진 테스트</Box>
                        아래
                        <DatePicker />
                      </>
                    ),
                  })
                }
                type="success"
              >
                모달
              </Text>
            </Flex>
          </Col>
          <Col span={12}>
            <Text color="error">
              type danger 같은게 힘들고 secondary 같은걸 바로 접근하려면 `color`
              props에서 색을 바로 넣어보세요
            </Text>
            <br />
            <Text>
              Col은 총 24개의 칼럼입니다. 좌 우의 span이 12, 12임으로 50%씩
              채워지겠죠?
            </Text>
          </Col>
        </Row>
        <Box height="32px" />
        <Row>
          <Col span={24}>
            <Text>버튼</Text>
          </Col>
          <Col span={24}>
            <Box color={color}>hello</Box>
            <Button onClick={toggleColorMode} type="primary">
              프라이머리 버튼(테마를 바꿈) 현재 {colorMode}
            </Button>
            <br />
            <Button danger type="primary">
              danger
            </Button>
          </Col>
          <Col span={24}>
            <Text type="warning">
              일부 버튼은 다크모드를 지원하지 않습니다.
            </Text>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Text>Space</Text>
          </Col>
          <Col span={24}>
            <Box p={1}>
              <Text>놀랍게도 패딩 1은 4px 입니다.</Text>
            </Box>
            <Box p={2}>
              <Text type="danger">패딩 2는 8px, 즉 4의 배수입니다.</Text>
            </Box>
          </Col>
        </Row>
        {/*  gutter 는 Col 사이를 떨어뜨립니다. */}
        <Row gutter={[0, 16]}>
          <Col md={24} xs={12}>
            <Editor defaultValue="이 에디터는 폭이 700px 이하일 때 span이 12가 됩니다. xs(x small)로 조절했기 때문이죠" />
          </Col>
          <Col span={24}>
            <Flex border="solid red 1px" flexDirection="column">
              <Text type="success">지금 까지 hover 하기 귀찮으셨죠?</Text>
              <Text code type="success">
                sx를 쓰면 됩니다. 없는 style은 sx로!
              </Text>
              <Text
                code
                sx={{
                  color: "info",
                }}
              >
                더 이상 styled 는 never... <br />
                color는 theme안에 정의된 색으로 써주세요.
              </Text>
              <Box
                _hover={{
                  bg: "blue",
                }}
                height="100px"
                width="100px"
              >
                <Text
                  sx={{
                    color: "yellow",
                    cursor: "pointer",
                  }}
                >
                  마우스를 올려보세요!
                </Text>
              </Box>
            </Flex>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default IndexPage;
