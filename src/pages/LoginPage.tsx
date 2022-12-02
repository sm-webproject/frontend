import { Center, Flex } from "@chakra-ui/react";
import { Layout, Text } from "@components/Element";
import useAuth from "@store/useAuth";
import { Button, Form, Input } from "antd";
import { useCallback } from "react";

const LoginPage = () => {
  const { login } = useAuth();

  /** Form Submit
   * @param {any} v */
  const handleSubmit = useCallback(
    async ({ id, pw }) => {
      await login(id, pw);
    },
    [login]
  );

  return (
    <Layout>
      <Form onFinish={handleSubmit}>
        <Center>
          <Flex
            bg="rgb(0, 0, 0, 0.6)"
            borderRadius="20px"
            boxShadow="0 15px 15px lightgray"
            flexDir="column"
            gap="8px"
            minWidth="320px"
            p="32px"
          >
            <Text color="white" fontWeight="bold" textShadow="1px 1px 1px #000">
              ID
            </Text>
            <Form.Item name="id" noStyle>
              <Input type="text" />
            </Form.Item>
            <Text color="white" fontWeight="bold" textShadow="1px 1px 1px #000">
              PW
            </Text>
            <Form.Item name="pw" noStyle>
              <Input type="password" />
            </Form.Item>
            <Flex justifyContent="end">
              <Text color="white" fontSize="xs" textShadow="1px 1px 1px #000">
                아이디/비밀번호 찾기
              </Text>
            </Flex>
            <Button
              htmlType="submit"
              style={{
                background: "black",
                color: "white",
                borderColor: "black",
              }}
            >
              로그인
            </Button>
          </Flex>
        </Center>
      </Form>
    </Layout>
  );
};

export default LoginPage;
