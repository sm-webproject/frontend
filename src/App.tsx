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
import { ConfigProvider, Modal } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import RootRoutes from "./routes/RootRoute";
import Theme from "./theme/theme";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

Modal.defaultProps = {
  modalRender: (node) => <ConfigProvider locale={koKR}>{node}</ConfigProvider>,
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

function App() {
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
