import { SignInResponse } from "@interfaces/Response";
import User from "@interfaces/User";
import { Modal } from "antd";
import axios from "axios";
import moment from "moment";
import create from "zustand";
import { persist } from "zustand/middleware";

export interface AuthState {
  user?: User;
  login: (username: string, password: string) => Promise<void>;
  signIn: (signIn: SignInResponse) => void;
  loadMe: () => Promise<void>;
  initial: () => Promise<void>;
  logout: () => void;
  loaded: boolean;
  signedAt?: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpireAt?: string;
  refreshTokenExpireAt?: string;
}

const AUTH_HEADER = import.meta.env.VITE_AUTH_HEADER;

axios.interceptors.request.use(async (value) => {
  if (!axios.defaults.headers.common[AUTH_HEADER]) return value;

  /**
   * AUTH_HEADER가 존재하는 로그인 된 유저만 추가 확인
   */

  const {
    accessTokenExpireAt,
    refreshTokenExpireAt,
    refreshToken,
    logout,
    signIn,
  } = useAuth.getState();

  if (moment(accessTokenExpireAt).isAfter()) return value;
  if (moment(refreshTokenExpireAt).isBefore()) {
    logout();
    return Promise.reject(new Error("Refresh Token is expired"));
  }

  try {
    delete axios.defaults.headers.common[AUTH_HEADER];
    const { data } = await axios.post<SignInResponse>("/refresh", {
      token: refreshToken,
    });
    signIn(data);
  } catch (e) {
    console.error("Refresh Token request is failed");
    logout();
    return Promise.reject(e);
  }
  return value;
});

axios.interceptors.response.use(undefined, (error) => {
  if (error?.response?.status === 401) {
    // 401일 경우 권한 부족
    useAuth.getState().logout();
  }
  return Promise.reject(error);
});

const useAuth = create(
  persist<AuthState>(
    (set, get) => ({
      loaded: false,
      initial: async () => {
        const {
          logout,
          accessToken,
          accessTokenExpireAt,
          loaded,
          refreshTokenExpireAt,
          refreshToken,
          signIn,
        } = get();

        if (loaded) return;

        set({
          loaded: true,
        });

        if (accessTokenExpireAt && moment(accessTokenExpireAt).isBefore()) {
          if (
            !refreshToken ||
            (refreshTokenExpireAt && moment(refreshTokenExpireAt).isBefore())
          ) {
            logout();
            Modal.info({
              content: "토큰이 만료되었습니다.",
            });
            return;
          }
          try {
            delete axios.defaults.headers.common[AUTH_HEADER];
            const { data } = await axios.post<SignInResponse>("/refresh", {
              token: refreshToken,
            });
            signIn(data);
          } catch (e) {
            console.error("Refresh Token request is failed");
            logout();
            return Promise.reject(e);
          }

          return;
        }
        if (accessToken)
          axios.defaults.headers.common[AUTH_HEADER] = "Bearer " + accessToken;
      },
      login: async (username, password) => {
        try {
          // const formData = new FormData();
          // formData.append("username", username);
          // formData.append("password", password);
          //
          // const { data } = await axios.post<SignInResponse>(
          //   "/signin",
          //   formData
          // );
          // get().signIn(data);
          // await get().loadMe();

          /**
           * @todo
           * 실 배포시 제거
           */
          console.log(username, password);
          set({
            user: {
              email: "",
              tier: 0,
              username: "",
              name: "",
              phone: "",
            },
            signedAt: moment().toISOString(),
          });
        } catch (e) {
          console.error(e);
          Modal.error({
            content: "로그인 실패",
          });
        }
      },
      logout: () => {
        delete axios.defaults.headers.common[AUTH_HEADER];
        set({
          user: undefined,
          signedAt: undefined,
          accessTokenExpireAt: undefined,
          accessToken: undefined,
          refreshTokenExpireAt: undefined,
          refreshToken: undefined,
        });
      },
      signIn: (signIn) => {
        axios.defaults.headers.common[AUTH_HEADER] =
          "Bearer " + signIn.accessToken;

        set({
          ...signIn,
          signedAt: moment().toISOString(),
        });
      },
      loadMe: async () => {
        try {
          const { data } = await axios.get<User>("/me");
          set({
            user: data,
          });
        } catch (e) {
          console.error(e);
        }
      },
    }),
    {
      name: "auth",
      partialize: (state) => ({
        ...state,
        loaded: false,
      }),
    }
  )
);

export default useAuth;
