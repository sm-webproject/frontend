import { Center, Flex } from "@chakra-ui/react";
import { Button, Col, Container, Layout, Row, Text } from "@components/Element";
import { Contact } from "@interfaces/WebappFactory";
import { Input, message, Modal } from "antd";
import { useEffect, useState } from "react";
import { useCopyToClipboard } from "react-use";

function WebappFactoryPage() {
  const [, setCopy] = useCopyToClipboard();

  const [fcm, setFcm] = useState("-");
  const [expoToken, setExpoToken] = useState("-");
  const [location, setLocation] = useState([0, 0]);
  const [version, setVersion] = useState("-");

  useEffect(() => {
    if (window.WebappFactory)
      (async () => {
        setFcm(await window.WebappFactory.getFcmToken());
        setExpoToken(await window.WebappFactory.getToken());
        const c = await window.WebappFactory.getLocation();
        setLocation([c.latitude, c.longitude]);
        setVersion(await window.WebappFactory.getVersion());
      })();
  }, []);

  return (
    <Layout>
      <Container paddingBottom={4}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <Center>
              <Text fontSize="5xl">Webapp Factory 테스트</Text>
            </Center>
          </Col>
          <Col md={12} span={24}>
            <Text fontSize="xl">웹앱 팩토리 접속 여부 : </Text>
          </Col>
          <Col md={12} span={24}>
            <Text fontSize="md">
              {window.WebappFactory
                ? "웹앱 팩토리로 접속 중"
                : "웹앱 팩토리가 아님"}
            </Text>
          </Col>
          <Col md={12} span={24}>
            <Text fontSize="xl">Expo Token</Text>
            <Flex gap={2}>
              <Text fontSize="md">
                <Input disabled value={expoToken} />
              </Text>
              <Button
                onClick={async () => {
                  setCopy(expoToken);
                  await message.success("Expo Token 복사 완료");
                }}
              >
                복사
              </Button>
            </Flex>
          </Col>
          <Col md={12} span={24}>
            <Text fontSize="xl">FCM Token</Text>
            <Flex gap={2}>
              <Text fontSize="md">
                <Input disabled value={fcm} />
              </Text>
              <Button
                onClick={async () => {
                  setCopy(fcm);
                  await message.success("FCM 복사 완료");
                }}
              >
                복사
              </Button>
            </Flex>
          </Col>
          <Col md={12} span={24}>
            <Text fontSize="xl">Location</Text>
            <Flex gap={2}>
              <Text fontSize="md">
                위도
                <Input disabled value={location[0]} />
              </Text>
              <Text fontSize="md">
                경도
                <Input disabled value={location[1]} />
              </Text>
            </Flex>
          </Col>
          <Col md={12} span={24}>
            <Text fontSize="xl">Version</Text>
            <Input disabled value={version} />
          </Col>
          <Col md={12} span={24}>
            <Flex gap={2}>
              <Text fontSize="xl">삽입 광고</Text>
              <Button
                onClick={() => window.WebappFactory?.ads.showInterstitialAd()}
              >
                Play
              </Button>
            </Flex>
          </Col>
          <Col md={12} span={24}>
            <Flex gap={2}>
              <Text fontSize="xl">리워드 광고</Text>
              <Button onClick={() => window.WebappFactory?.ads.showRewardAd()}>
                Play
              </Button>
            </Flex>
          </Col>
          <Col md={12} span={24}>
            <Flex gap={2}>
              <Text fontSize="xl">Contacts</Text>
              <Button
                onClick={async () => {
                  console.log("wtf");
                  Modal.info({
                    title: "Contacts",
                    content: (await window.WebappFactory?.getContacts())
                      .map(
                        (v: Contact) =>
                          `${v.name} : ${v.phoneNumbers?.[0].number ?? "-"}`
                      )
                      .join(""),
                  });
                }}
              >
                Show Contacts
              </Button>
            </Flex>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default WebappFactoryPage;
