import { Modal } from "antd";
import axios from "axios";
import moment, { Moment } from "moment";
import create from "zustand";
import { persist } from "zustand/middleware";

import LoginResult from "@/interfaces/LoginResult";

import User from "../interfaces/User";

export interface ThemeState {
  user?: User;
  login: (id: string, pw: string) => Promise<void>;
  initial: () => void;
  logout: () => void;
  accessToken?: string;
  accessTokenExpiresAt?: Moment;
  loaded: boolean;
}

const useAuth = create(
  persist<ThemeState>(
    (set, get) => ({
      loaded: false,
      initial: () => {
        const { logout, accessToken, accessTokenExpiresAt } = get();
        set({
          loaded: true,
        });
        if (accessTokenExpiresAt) {
          const accessTokenExpiresAtMoment = moment(accessTokenExpiresAt);

          if (accessTokenExpiresAtMoment.isBefore()) {
            logout();
            return;
          }
          axios.defaults.headers.common.Authorization = "Bearer " + accessToken;
        }
      },
      login: async (id, pw) => {
        const formData = new FormData();
        formData.append("username", id);
        formData.append("password", pw);
        const { data } = await axios.post<LoginResult>("/signin", formData);

        try {
          axios.defaults.headers.common.Authorization =
            "Bearer " + data.accessToken;

          const { data: userData } = await axios.get<User>("/me");

          set({
            user: userData,
            accessTokenExpiresAt: moment(data.accessTokenExpireAt),
            accessToken: data.accessToken,
          });
        } catch (e) {
          Modal.error({
            content: "로그인 실패",
          });
        }
      },
      logout: () => {
        set({
          user: undefined,
          accessTokenExpiresAt: undefined,
          accessToken: undefined,
        });
        Modal.success({ title: "로그아웃", content: "로그아웃 되었습니다." });
      },
    }),
    {
      name: "auth",
      partialize: (state) => {
        state.loaded = false;
        return state;
      },
    }
  )
);

export default useAuth;
