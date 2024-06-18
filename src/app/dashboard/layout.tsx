"use client";

import Wrapper from "@/common/Wrapper";
import { SWRConfig } from "swr";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const axiosAuth = useAxiosAuth();
  const swrConfig = {
    fetcher: (url: any) => axiosAuth.get(url).then((res) => res.data),
  };

  return (
    <SWRConfig value={swrConfig}>
      <Wrapper>{children}</Wrapper>
    </SWRConfig>
  );
}
