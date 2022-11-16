import { Box, Center, Flex, Img } from "@chakra-ui/react";
import { Br, Layout, Text } from "../components/Element";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";

const IndexPage = () => {
  const [page, setPage] = useState(0);
  const [contentHeight, setContentHeight] = useState(window.outerHeight + 2);
  const [loading, setLoading] = useState(false);

  const { y } = useWindowScroll();

  useEffect(() => {
    window.scrollTo(0, 1);
    if (!loading) {
      if (y > 1 && page < 3) {
        setPage(page + 1);
      } else if (y < 1 && page > 0) {
        setPage(page - 1);
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  useEffect(() => {
    const callbackfunc = () => {
      setContentHeight(window.outerHeight + 2);
    };
    window.addEventListener("resize", callbackfunc);
  }, []);

  return (
    <Layout bg="background">
      <Center
        height={contentHeight}
        overflowY={loading ? "hidden" : "initial"}
        width="100vw"
      >
        {page === 0 && (
          <Flex
            data-aos="fade-right"
            data-aos-duration={1000}
            flexDir={["column", "column", "row"]}
            gap="80px"
          >
            <Img src="/images/logo.png" width={["100%", "100%", "50%"]} />
            <Flex
              alignItems={["center", "center", "initial"]}
              flexDir="column"
              gap="8px"
              justifyContent="center"
              textAlign="center"
            >
              <Box>
                <Text color="primary" fontSize="56px" fontWeight="bold">
                  PC
                </Text>
                <Text color="secondary" fontSize="56px" fontWeight="bold">
                  UP
                </Text>
                <Text fontSize="56px" fontWeight="bold">
                  란?
                </Text>
              </Box>
              <Text>
                <Text color="primary" fontSize="32px" fontWeight="bold">
                  P
                </Text>
                <Text fontSize="24px" fontWeight="bold">
                  ersonal
                </Text>{" "}
                <Text color="primary" fontSize="32px" fontWeight="bold">
                  C
                </Text>
                <Text fontSize="24px" fontWeight="bold">
                  olor{" "}
                </Text>
                <Text fontSize="24px" fontWeight="bold">
                  make{" "}
                </Text>
                <Text color="secondary" fontSize="32px" fontWeight="bold">
                  UP
                </Text>
                <Br />
                <Text fontSize="18px" fontWeight="bold">
                  사진 한 장으로 본인의 퍼스널 컬러와 함께, <Br />
                  얼굴에 맞는 화장품을 추천해줍니다.
                </Text>
              </Text>
            </Flex>
          </Flex>
        )}
        {page === 1 && (
          <Flex
            data-aos="fade-right"
            data-aos-duration={1000}
            flexDir={["column", "column", "row"]}
            gap="16px"
            width="100vw"
          >
            <Flex
              justifyContent="end"
              px="80px"
              width={["100%", "100%", "50%"]}
            >
              <Center
                border="8px dashed"
                borderColor="primary"
                borderRadius="32px"
                px="16px"
              >
                <Img maxWidth="320px" src="/images/main/camera.png" />
              </Center>
            </Flex>
            <Flex
              alignItems={["center", "center", "initial"]}
              flexDir="column"
              gap="8px"
              justifyContent="center"
              textAlign="center"
            >
              <Box>
                <Text color="primary" fontSize="56px" fontWeight="bold">
                  사진
                </Text>
                <Text fontSize="36px" fontWeight="bold">
                  을
                </Text>
                <Br />
                <Text color="secondary" fontSize="56px" fontWeight="bold">
                  업로드
                </Text>
                <Text fontSize="36px" fontWeight="bold">
                  하세요!
                </Text>
              </Box>
            </Flex>
          </Flex>
        )}
        {page === 2 && (
          <Flex
            data-aos="fade-right"
            data-aos-duration={1000}
            flexDir={["column", "column", "row"]}
            gap="16px"
          >
            <Img
              px="80px"
              src="/images/main/info.png"
              width={["100%", "100%", "50%"]}
            />
            <Flex
              alignItems={["center", "center", "initial"]}
              flexDir="column"
              gap="8px"
              justifyContent="center"
              textAlign="center"
            >
              <Box>
                <Text color="primary" fontSize="56px" fontWeight="bold">
                  테스트
                </Text>
                <Text color="secondary" fontSize="56px" fontWeight="bold">
                  결과
                </Text>
              </Box>
              <Text>
                <Text fontSize="18px" fontWeight="bold">
                  등록한 사진으로 결과를 확인하세요!
                </Text>
              </Text>
            </Flex>
          </Flex>
        )}
        {page === 3 && (
          <Flex data-aos="fade-down" data-aos-duration={1000}>
            <Link to="/upload">
              <Box>
                <Text color="primary" fontSize="56px" fontWeight="bold">
                  테스트
                </Text>
                <Text color="secondary" fontSize="56px" fontWeight="bold">
                  하기
                </Text>
              </Box>
            </Link>
          </Flex>
        )}
      </Center>
    </Layout>
  );
};

export default IndexPage;
