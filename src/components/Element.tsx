import { As, Box, chakra } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  Button as _Button,
  ButtonProps,
  Col as _Col,
  ColProps,
  Image as _Image,
  ImageProps,
  Row as _Row,
  RowProps,
  Typography as _Text,
} from "antd";
import { TextProps } from "antd/lib/typography/Text";
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export const Br = chakra(styled.br``);
export const Button = chakra<As, ButtonProps>(_Button);
export const Col = chakra<As, ColProps>(_Col);
export const Row = chakra<As, RowProps>(_Row);
export const Text = chakra<As, TextProps>(_Text.Text, {
  baseStyle: {
    color: "mainText",
  },
});
export const SkeletonBox = chakra((props) => (
  <Box
    _after={{
      position: "absolute",
      top: 0,
      right: "-150%",
      bottom: 0,
      left: "-150%",
      background:
        "linear-gradient(90deg, hsla(0, 0%, 74.5%, .2) 25%, hsla(0, 0%, 50.6%, .24) 37%, hsla(0, 0%, 74.5%, .2) 63%)",
      animation: "ant-skeleton-loading 1.4s ease infinite",
      content: `""`,
    }}
    background="hsla(0, 0%, 74.5%, .2)"
    display="block"
    h="100%"
    lineHeight="32px"
    overflow="hidden"
    position="relative"
    verticalAlign="top"
    w="100%"
    zIndex="0"
    {...props}
  />
));

export const Image = chakra<As, ImageProps>(_Image);
export const Layout = chakra(
  ({
    title,
    children,
    ...rest
  }: {
    title?: string;
    children?: ReactNode | ReactNode[];
  }) => (
    <>
      <Helmet title={title} />
      <Box {...rest}>{children}</Box>
    </>
  ),
  {
    baseStyle: {
      backgroundColor: "background",
    },
  }
);

const StyledContainer = chakra(Box, {
  baseStyle: {
    backgroundColor: "containerBackground",
  },
});

export const Container = chakra(
  ({ children, ...rest }: { children: ReactNode | ReactNode[] }) => (
    <StyledContainer
      maxWidth={["540px", "720px", "1140px"]}
      mx="auto"
      px={4}
      {...rest}
    >
      {children}
    </StyledContainer>
  )
);
