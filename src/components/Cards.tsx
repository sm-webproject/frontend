import { Box } from "@chakra-ui/react";
import { Card } from "antd";

const Cards = () => {
  return (
    <Box>
      <Card extra={<a href="#">More</a>} style={{ width: "70%" }} title="Title">
        <p>content</p>
      </Card>
      <Card extra={<a href="#">More</a>} style={{ width: "70%" }} title="Title">
        <p>content</p>
      </Card>
      <Card extra={<a href="#">More</a>} style={{ width: "70%" }} title="Title">
        <p>content</p>
      </Card>
      <Card extra={<a href="#">More</a>} style={{ width: "70%" }} title="Title">
        <p>content</p>
      </Card>
    </Box>
  );
};

export default Cards;
