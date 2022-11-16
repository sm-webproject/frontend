import "aos/dist/aos.css";
import "antd/dist/antd.css";

import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  ThemeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import RootRoutes from "./routes/RootRoute";
import Theme from "./theme/theme";
import { ConfigProvider, Modal } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import AOS from "aos";
import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

Modal.defaultProps = {
  modalRender: (node) => <ConfigProvider locale={koKR}>{node}</ConfigProvider>,
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <ChakraProvider
      theme={extendTheme({
        config,
      })}
    >
      <InnerApp />
    </ChakraProvider>
  );
}

function InnerApp() {
  const { colorMode } = useColorMode();

  const theme = colorMode === "dark" ? Theme.dark : Theme.light;

  console.info(
    "%cBASE_URL: " + import.meta.env.VITE_BASE_URL,
    "font-size:16px;"
  );
  console.info("%cMODE " + import.meta.env.MODE, "font-size:16px;");
  console.info(
    "%c함께하는 개발 파트너, 데브파이브",
    "color: #a600f4;font-size:22px;background:white;"
  );
  console.info(
    "%c ____   _____ __     __ _____  ___ __     __ _____ \n" +
      "|  _ \\ | ____|\\ \\   / /|  ___||_ _|\\ \\   / /| ____|\n" +
      "| | | ||  _|   \\ \\ / / | |_    | |  \\ \\ / / |  _|  \n" +
      "| |_| || |___   \\ V /  |  _|   | |   \\ V /  | |___ \n" +
      "|____/ |_____|   \\_/   |_|    |___|   \\_/   |_____|",
    "color: #a600f4;"
  );

  ConfigProvider.config({
    theme: {
      primaryColor: theme.colors.primary,
      errorColor: theme.colors.error,
      infoColor: theme.colors.info,
      processingColor: theme.colors.processing,
      successColor: theme.colors.success,
      warningColor: theme.colors.warning,
    },
  });

  useEffect(() => {
    const antdStyle: HTMLLinkElement | null = document.getElementById(
      "antd-style"
    ) as HTMLLinkElement | null;
    const link =
      colorMode === "dark"
        ? "/css/antd.dark.min.css"
        : "/css/antd.variable.min.css";

    if (antdStyle) {
      antdStyle.href = link;
    } else {
      const linkElement = document.createElement("link");
      linkElement.id = "antd-style";
      linkElement.href = link;
      linkElement.rel = "stylesheet";
      document.head.insertBefore(linkElement, document.head.firstChild);
    }
  }, [colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            background-color: ${theme.colors.background} !important;
            ::-webkit-scrollbar {
              display: none;
            }
          }
        `}
      />
      <ConfigProvider locale={koKR}>
        <BrowserRouter>
          <RootRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
