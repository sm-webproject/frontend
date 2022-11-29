import { Button, Flex } from "@chakra-ui/react";
import Editor from "@components/Editor";
import { Input } from "antd";
import React, { useState } from "react";

const { TextArea } = Input;

const WritePage = () => {
  const [value, setValue] = useState("");

  return (
    <Flex flexDir="column" gap="16px">
      <TextArea autoSize={{ minRows: 1, maxRows: 1 }} placeholder="작성자" />
      <Editor onChange={(v) => setValue(v)} value={value} />
      <Button backgroundColor="black" color="white">
        완료
      </Button>
    </Flex>
  );
};

export default WritePage;
