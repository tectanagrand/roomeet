"use client";
import CardEvent from "@/common/CardEvent";
import CalendarEvent from "./CalendarEvent";

const Room = () => {
  return (
    <>
      <CalendarEvent />
      <CardEvent />
      <CardEvent />
      <p className="text-center text-neutral-100 pt-2">View More</p>
    </>
  );
};

export default Room;
