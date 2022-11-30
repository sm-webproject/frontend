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
            bg="primary"
            flexDir="column"
            gap="8px"
            minWidth="320px"
            p="32px"
          >
            <Text color="mainText" fontWeight="bold">
              ID
            </Text>
            <Form.Item name="id" noStyle>
              <Input type="text" />
            </Form.Item>
            <Text color="mainText" fontWeight="bold">
              PW
            </Text>
            <Form.Item name="pw" noStyle>
              <Input type="password" />
            </Form.Item>
            <Flex justifyContent="end">
              <Text color="mainText" fontSize="xs">
                아이디/비밀번호 찾기
              </Text>
            </Flex>
            <Button htmlType="submit" type="primary">
              로그인
            </Button>
          </Flex>
        </Center>
      </Form>
    </Layout>
  );
};

export default LoginPage;
