import { Center } from "@chakra-ui/react";
import { Layout } from "@components/Element";
import useAuth from "@store/useAuth";
import { Input } from "antd";

const MyPage = () => {
  const { user } = useAuth();

  return (
    <Layout>
      {user && (
        <Center flexDir="column" gap="16px">
          <Input disabled value={user.name} />
          <Input disabled value={user.email} />
          <Input disabled value={user.phone} />
          <Input disabled value={user.username} />
        </Center>
      )}
    </Layout>
  );
};

export default MyPage;
