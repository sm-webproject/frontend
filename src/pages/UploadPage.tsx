import { Box, Center, Flex, Img } from "@chakra-ui/react";
import { Br, Button, Text } from "../components/Element";
import { Form, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useCallback, useState } from "react";

const UploadPage = () => {
  const [preview, setPreview] = useState("");

  const handleUpload = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Flex flexDir="column">
      <Form onFinish={handleUpload}>
        <Center flexDir="column" gap="16px" my="32px">
          <Form.Item name="image" noStyle>
            <Upload
              className="avatar-uploader"
              customRequest={() => {}}
              name="avatar"
              onChange={(e) => {
                const reader = new FileReader();
                reader.addEventListener("load", () =>
                  setPreview(reader.result as string)
                );
                reader.readAsDataURL(e.file.originFileObj as RcFile);
              }}
              showUploadList={false}
            >
              <Center
                border="8px dashed"
                borderColor="primary"
                borderRadius="32px"
                px="16px"
              >
                <Img
                  height="100%"
                  maxHeight="320px"
                  maxWidth="320px"
                  src={preview ? preview : "/images/main/camera.png"}
                  width="100%"
                />
              </Center>
            </Upload>
          </Form.Item>
          <Box fontSize="24px" fontWeight="bold">
            <Text color="secondary">카메라 버튼</Text>을 클릭하여
            <Br />
            이미지를 등록하세요!
          </Box>
        </Center>
        <Center flexDir="column" gap="16px">
          <Button
            background="primary"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            height="100%"
            maxWidth="360px"
            p="16px"
            width="100%"
          >
            분석 시작
          </Button>
          <Button
            background="secondary"
            color="white"
            fontSize="18px"
            fontWeight="bold"
            height="100%"
            maxWidth="360px"
            p="16px"
            width="100%"
          >
            최근 결과 보기
          </Button>
        </Center>
      </Form>
    </Flex>
  );
};

export default UploadPage;
