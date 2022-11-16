import { Box, chakra } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  Button as AntdButton,
  Col as AntdCol,
  Image as _Image,
  Row as AntdRow,
} from "antd";
import _Text from "antd/es/typography/Text";
import { ReactNode } from "react";

export const Br = chakra(styled.br``);
export const Button = chakra(AntdButton);
export const Col = chakra(AntdCol);
export const Row = chakra(AntdRow);
export const Text = chakra(_Text, {
  baseStyle: {
    color: "mainText",
  },
});
export const Image = chakra(_Image);
export const Layout = chakra(Box, {
  baseStyle: {
    backgroundColor: "background",
  },
});

const StyledContainer = chakra(Box, {
  baseStyle: {
    backgroundColor: "containerBackground",
  },
});

export const Container = chakra(
  ({ children }: { children: ReactNode | ReactNode[] }) => (
    <StyledContainer mx="auto" px={4}>
      {children}
    </StyledContainer>
  )
);
