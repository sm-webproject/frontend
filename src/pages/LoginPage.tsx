import { Center, Flex } from "@chakra-ui/react";
import { Layout, Text } from "@components/Element";
import { Button, Form, Input } from "antd";
import { useCallback } from "react";

const LoginPage = () => {
  /** Form Submit
   * @param {any} v */
  const handleSubmit = useCallback((v: any) => {
    console.log(v);
  }, []);

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
            <Form.Item name="id" noStyle>
              <Text color="mainText" fontWeight="bold">
                ID
              </Text>
              <Input type="text" />
            </Form.Item>
            <Form.Item name="pw" noStyle>
              <Text color="mainText" fontWeight="bold">
                PW
              </Text>
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
