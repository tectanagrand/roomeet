"use client";
import { Skeleton } from "@mui/material";
import * as date from "date-fns";
import { useState, useEffect } from "react";

export default function DigitalClock() {
  const rightNow = new Date();
  const [hour, setHour] = useState<any>("");
  const [minute, setMinute] = useState<any>("");
  const [second, setSecond] = useState<any>("");
  const [dateNow, setDate] = useState<any>("");

  useEffect(() => {
    // setHour(date.format(rightNow, "HH"));
    // setMinute(date.format(rightNow, "mm"));
    // setSecond(date.format(rightNow, "ss"));
    // setDate(date.format(rightNow, "eeee, do MMMM yyyy"));
    const dateSet = setInterval(() => {
      setHour(date.format(rightNow, "HH"));
      setMinute(date.format(rightNow, "mm"));
      setSecond(date.format(rightNow, "ss"));
      setDate(date.format(rightNow, "eeee, do MMMM yyyy"));
    }, 1000);

    return () => {
      clearInterval(dateSet);
    };
  }, [hour, minute, second]);

  return (
    <div className="flex flex-col my-2">
      <div className="px-4 md:px-10 flex items-center">
        <div className="rounded-full w-4 h-4 mx-2 bg-neutral-50"></div>
        {dateNow ? (
          <p className="">{dateNow}</p>
        ) : (
          <Skeleton variant="rounded" width={216} height={48} className="bg-neutral-600" />
        )}
      </div>
      <div className="flex gap-4 w-full justify-center">
        {hour ? (
          <p className="text-[64pt] text-center text-neutral-50 w-32 my-0">
            {hour}
          </p>
        ) : (
          <Skeleton variant="rounded" width={96} height={96} className="bg-neutral-600 my-8" />
        )}
        <p className="text-[64pt] text-center text-neutral-50 my-0">:</p>
        {minute ? (
          <p className="text-[64pt] text-center text-neutral-50 w-32 my-0">
            {minute}
          </p>
        ) : (
          <Skeleton variant="rounded" width={96} height={96} className="bg-neutral-600 my-8" />
        )}
        {/* <p className="text-[64pt] text-center text-neutral-50 my-0">:</p>
        <p className="text-[64pt] text-center text-neutral-50 w-32 my-0">
          {second}
        </p> */}
      </div>
    </div>
  );
}
