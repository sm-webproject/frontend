import { ChakraProvider, ThemeProvider, useColorMode } from "@chakra-ui/react";
import Splash from "@components/Splash";
import { css, Global } from "@emotion/react";
import RootRoutes from "@routes/RootRoute";
import useAuth from "@store/useAuth";
import Theme from "@theme/theme";
import { ConfigProvider, Modal } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import axios from "axios";
import moment from "moment";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
moment.fn.toJSON = function () {
  return this.toISOString(true);
};
moment.fn.toString = function () {
  return this.toISOString(true);
};

console.info("%cBASE_URL: " + import.meta.env.VITE_BASE_URL, "font-size:16px;");
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

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <InnerApp />
      </ChakraProvider>
    </HelmetProvider>
  );
}

function InnerApp() {
  const { colorMode } = useColorMode();
  const [modal, contextHolder] = Modal.useModal();
  const { initial, loaded } = useAuth();

  const theme = colorMode === "dark" ? Theme.dark : Theme.light;

  useEffect(() => {
    if (!loaded) {
      initial();

      Modal.confirm = modal.confirm;
      Modal.success = modal.success;
      Modal.info = modal.info;
      Modal.warning = modal.warning;
      Modal.error = modal.error;
    }
  }, [initial, loaded, modal]);

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
      <ConfigProvider locale={koKR}>
        <Global
          styles={css`
            body {
              background-color: ${theme.colors.background} !important;
              // antd의 잘 못 된 설정 수정
              font-size: initial;
              word-break: keep-all;
            }

            // antd modal footer 제거
            .rm-modal-footer .ant-modal-confirm-btns {
              display: none;
            }
          `}
        />
        {contextHolder}
        <Splash show={!loaded} />
        {loaded && (
          <HashRouter>
            <RootRoutes />
          </HashRouter>
        )}
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
