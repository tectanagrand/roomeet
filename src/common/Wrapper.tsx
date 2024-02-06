"use client";

import NavButton from "./NavButton";
import AppBar from "@/components/home/components/AppBar";
import { useMediaQuery } from "@mui/material";

interface WrapperChild {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperChild) => {
  const mobile = useMediaQuery("(max-width:480px)");

  return (
    <>
      <AppBar />
      <div className="pt-10">{children}</div>
      {mobile && <NavButton />}
    </>
  );
};

export default Wrapper;
