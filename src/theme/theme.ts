import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      error: string;
      info: string;
      processing: string;
      success: string;
      warning: string;
      mainText: string;
      subText: string;
      background: string;
      containerBackground: string;
    };
  }
}

const theme: { light: Theme & ChakraTheme; dark: Theme & ChakraTheme } = {
  light: extendTheme({
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
    colors: {
      primary: "#1890ff",
      secondary: "#000",
      error: "#ff4d4f",
      info: "#1890ff",
      processing: "#1890ff",
      success: "#52c41a",
      warning: "#faad14",
      mainText: "#000",
      subText: "#000",
      background: "#F8F9FA",
      containerBackground: "#fff",
    },
  }) as Theme & ChakraTheme,
  dark: extendTheme({
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
    colors: {
      primary: "#202124",
      secondary: "#000",
      error: "#ff4d4f",
      info: "#1890ff",
      processing: "#1890ff",
      success: "#52c41a",
      warning: "#faad14",
      mainText: "#fff",
      subText: "#fff",
      background: "#0e0e0e",
      containerBackground: "#1D1F21",
    },
  }) as Theme & ChakraTheme,
};

export default theme;
