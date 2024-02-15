"use client";

import axios from "../axios";
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await axios.post("/user/refreshtoken", {
      refreshToken: session?.user.refreshToken,
      name: session?.user.name,
      email: session?.user.email,
      username: session?.user.username,
    });
    if (session != undefined) session!.user.accessToken = res.data.accessToken;
    else signIn();
  };

  return refreshToken;
};
