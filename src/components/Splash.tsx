import { Flex } from "@chakra-ui/react";
import { Image, Layout } from "./Element";
import React, { useEffect, useState } from "react";
// 스플래시 페이지 로그인 정보 불러올 때 사용
interface SplashPageProps {
  show: boolean;
}

function Splash({ show }: SplashPageProps) {
  const [localShow, setLocalShow] = useState(true);

  useEffect(() => {
    if (!show) {
      setTimeout(() => setLocalShow(false), 1000);
    }
  }, [show]);

  return (
    <Layout
      display={localShow ? "block" : "none"}
      left={0}
      opacity={show ? 1 : 0}
      position="fixed"
      sx={{
        transition: "0.5s",
        visibility: show ? "visible" : "hidden",
      }}
      top={0}
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
      >
        <Image
          height="320px"
          preview={false}
          src="/images/logo.png"
          width="320px"
        />
      </Flex>
    </Layout>
  );
}

export default Splash;
