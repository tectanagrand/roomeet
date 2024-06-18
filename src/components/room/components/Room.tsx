"use client";
import CardEvent from "@/common/CardEvent";
import TitleRoom from "./TitleRoom";
import { MenuItem, Select } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import BigCalendar from "./BigCalendar";

const Room = () => {
  return (
    <>
      <div className="px-4 mt-4">
        <div className="flex justify-end">
          <TitleRoom name={"ROOM 12"} />
        </div>
        <BigCalendar />
        {/* <CalendarEvent /> */}
        <CardEvent />
        <CardEvent />
        <p className="text-center text-neutral-100 pt-2">View More</p>
      </div>
    </>
  );
};

export default Room;
