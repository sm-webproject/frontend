import { Button, Flex } from "@chakra-ui/react";
import Editor from "@components/Editor";
import { Input } from "antd";
import React from "react";

const { TextArea } = Input;

const WritePage = () => {
  return (
    <Flex flexDir="column" gap="16px">
      <TextArea autoSize={{ minRows: 1, maxRows: 1 }} placeholder="제목" />
      <Editor />
      <Button backgroundColor="black" color="white">
        완료
      </Button>
    </Flex>
  );
};

export default WritePage;
