import { Box, Button } from "@chakra-ui/react";
import { Input } from "antd";
import React, { useState } from "react";

const { TextArea } = Input;

const WritePage = () => {
  const [value, setValue] = useState("");
  return (
    <Box justifyContent="center">
      <Box>
        <TextArea autoSize={{ minRows: 1, maxRows: 1 }} placeholder="작성자" />
        <TextArea
          autoSize={{ minRows: 13, maxRows: 15 }}
          onChange={(e) => setValue(e.target.value)}
          placeholder="텍스트를 입력하세요."
          value={value}
        />
      </Box>
      <Button backgroundColor="black" color="white">
        완료
      </Button>
    </Box>
  );
};

export default WritePage;
