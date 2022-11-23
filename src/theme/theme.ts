import "@emotion/react";

import { ChakraTheme, theme as chakraTheme } from "@chakra-ui/react";
import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  // export interface Theme extends ChakraTheme {
  //   colors: {
  //     primary: string;
  //     secondary: string;
  //     error: string;
  //     info: string;
  //     processing: string;
  //     success: string;
  //     warning: string;
  //     mainText: string;
  //     subText: string;
  //     background: string;
  //     containerBackground: string;
  //   };
  //   // space: number[];
  //   // fontSizes: number[];
  // }
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
    // space: number[];
    // fontSizes: number[];
  }
}

chakraTheme.styles.global = {
  "html, body": {
    backgroundColor: "background !important",
  },
};

const theme: { light: Theme & ChakraTheme; dark: Theme & ChakraTheme } = {
  light: {
    ...chakraTheme,
    colors: {
      primary: "#6600CC",
      secondary: "#FF9933",
      error: "#ff4d4f",
      info: "#1890ff",
      processing: "#1890ff",
      success: "#52c41a",
      warning: "#faad14",
      mainText: "#000",
      subText: "#000",
      background: "white",
      containerBackground: "white",
      ...chakraTheme.colors,
    },
  },
  dark: {
    ...chakraTheme,
    colors: {
      primary: "#6600CC",
      secondary: "#FF9933",
      error: "#ff4d4f",
      info: "#1890ff",
      processing: "#1890ff",
      success: "#52c41a",
      warning: "#faad14",
      mainText: "#fff",
      subText: "#fff",
      background: "#0e0e0e",
      containerBackground: "#1D1F21",
      ...chakraTheme.colors,
    },
    styles: {
      global: {
        "body, html": {
          backgroundColor: "red !important",
        },
      },
    },
  },
};

export default theme;
