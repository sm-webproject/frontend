import { Center, Flex } from "@chakra-ui/react";
import { Image, Layout, Text } from "@components/Element";
import { useEffect, useState } from "react";

import devfiveIcon from "/devfiveicon.svg";

// 스플래시 페이지 로그인 정보 불러올 때 사용
interface SplashPageProps {
  show: boolean;
}

function Splash({ show }: SplashPageProps) {
  const [localShow, setLocalShow] = useState(true);

  useEffect(() => {
    if (!show) {
      setTimeout(() => setLocalShow(false), 500);
    }
  }, [show]);

  return (
    <Layout
      left={0}
      opacity={localShow ? 1 : 0}
      position="fixed"
      top={0}
      transition="0.5s"
      visibility={localShow ? "visible" : "hidden"}
      width="100%"
      zIndex={999}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
        gap="16px"
        height="100vh"
        p={4}
        pt="160px"
        w="100%"
      >
        <Image preview={false} src={devfiveIcon} width="120px" />
        <Text>데브파이브 프론트 시스템</Text>
      </Flex>
      <Center bottom={8} position="fixed" width="100%">
        <Text>ⓒ 2022 devfive all rights reserved.</Text>
      </Center>
    </Layout>
  );
}

export default Splash;
