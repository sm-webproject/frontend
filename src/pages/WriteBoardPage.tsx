import { Flex } from "@chakra-ui/react";
import Editor from "@components/Editor";
import { Button } from "@components/Element";
import useAuth from "@store/useAuth";
import { getFetcher } from "@utils/fetcher";
import { Form, Input, Modal } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

const WritePage = () => {
  const [value, setValue] = useState("");

  const id = new URLSearchParams(location.search).get("id");
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form] = Form.useForm();

  const { data } = useSWR(id ? "/boards/" + id : "", getFetcher);

  useEffect(() => {
    setValue(data?.content);
    form.setFieldValue("title", data?.title);
  }, [data, form]);

  const handleFinish = useCallback(
    async (v) => {
      if (!value) return;
      try {
        if (id) {
          await axios.put("/boards/" + id, {
            ...data,
            content: value,
            title: v.title,
          });
        } else {
          await axios.post("/boards", {
            content: value,
            title: v.title,
            writer: user?.username,
          });
        }
        Modal.success({
          title: "게시글 " + (id ? "수정" : "등록"),
          content: "게시글이 " + (id ? "수정" : "등록") + "되었습니다.",
        });
        navigate("/board");
      } catch (e) {
        Modal.error({
          title: "게시글 " + (id ? "수정" : "등록"),
          content: "오류가 발생했습니다.",
        });
      }
    },
    [data, id, navigate, user, value]
  );

  return (
    <Form form={form} onFinish={handleFinish}>
      <Flex flexDir="column" gap="16px">
        <Form.Item
          name="title"
          rules={[{ required: true, message: "제목을 입력해주세요." }]}
        >
          <Input placeholder="제목을 입력해주세요." />
        </Form.Item>
        <Editor onChange={(v) => setValue(v)} value={value} />
        <Button bg="background" color="mainText" htmlType="submit">
          완료
        </Button>
      </Flex>
    </Form>
  );
};

export default WritePage;
