"use client";
import * as date from "date-fns";
import { useState, useEffect } from "react";

export default function DigitalClock() {
  const rightNow = new Date();
  const [hour, setHour] = useState<any>(date.format(rightNow, "HH"));
  const [minute, setMinute] = useState<any>(date.format(rightNow, "mm"));
  const [dateNow, setDate] = useState<any>(
    date.format(rightNow, "eeee, do MMMM yyyy")
  );

  useEffect(() => {
    const dateSet = setInterval(() => {
      setHour(date.format(rightNow, "HH"));
      setMinute(date.format(rightNow, "mm"));
      setDate(date.format(rightNow, "eeee, do MMMM yyyy"));
    }, 1000);

    return () => {
      clearInterval(dateSet);
    };
  }, []);

  return (
    <div className="flex flex-col my-2">
      <div className="px-4 md:px-10 flex items-center">
        <div className="rounded-full w-4 h-4 mx-2 bg-neutral-50"></div>
        <p className="">{dateNow}</p>
      </div>
      <div className="flex gap-4 w-full justify-center ">
        <p className="text-[64pt] text-center text-neutral-50 w-32 my-0">
          {hour}
        </p>
        <p className="text-[64pt] text-center text-neutral-50 my-0">:</p>
        <p className="text-[64pt] text-center text-neutral-50 w-32 my-0">
          {minute}
        </p>
      </div>
    </div>
  );
}
