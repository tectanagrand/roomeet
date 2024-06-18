"use client";

import { useState, Suspense } from "react";
import { CardsListBook } from "@/components/booklist/CardListBook";
import { Select, MenuItem, useMediaQuery } from "@mui/material";
import { CardsListBookSkeleton } from "@/common/skeletons/CardSkeleton";

export default function BookListPage() {
  const [eventStatus, setStatus] = useState("all");
  return (
    <>
      <div className="flex justify-evenly items-center m-5 ">
        <div className="w-full h-12 bg-neutral-400 text-center mr-4">
          Search Bar
        </div>
        <Select
          value={eventStatus}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          className="w-[14rem]"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="upcoming">Upcoming</MenuItem>
          <MenuItem value="prospective">Prospective</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
      </div>
      <div className="h-[82vh] overflow-y-scroll rounded-xl">
        <Suspense fallback={<CardsListBookSkeleton />}>
          <CardsListBook />
        </Suspense>
      </div>
    </>
  );
}
