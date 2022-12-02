import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Layout } from "@components/Element";

const DetailPage = () => {
  return (
    <Layout>
      <Flex flexDir="column" gap="16px">
        <Box margin="auto" my="3" width="80vw">
          <Flex flexDir="row" gap="16px" justify="end">
            <Button
              bg="white"
              border="1px solid black"
              color="mainText"
              fontSize="13px"
              textDecorationLine="underline"
              width="10vw"
            >
              delete
            </Button>
            <Button
              bg="white"
              border="1px solid black"
              color="mainText"
              fontSize="13px"
              textDecorationLine="underline"
              width="10vw"
            >
              edit
            </Button>
          </Flex>
          <Text fontSize="40px" fontWeight="bold">
            title
          </Text>
          <Flex my="3">
            <Text fontWeight="bold">writer&nbsp;·&nbsp;</Text>
            <Text>2022-12-02</Text>
          </Flex>
          <Image
            my="3"
            src="images\main\example_1.png"
            style={{ width: "80vw" }}
          ></Image>
          <Text my="3">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Why do we use it? It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using &apos;Content here, content here&apos;, making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for &apos;lorem ipsum&apos; will uncover many web sites still
            in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default DetailPage;
