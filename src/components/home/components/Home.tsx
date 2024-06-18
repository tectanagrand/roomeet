"use client";

import DigitalClock from "./DigitalClock";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { CardRooms } from "./HomeCardRoom";
import { CardsSkeleton } from "@/common/skeletons/CardSkeleton";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
};

const hoursOpt = [
  { key: "1", value: 1 },
  { key: "2", value: 2 },
  { key: "3", value: 3 },
];

interface RoomsData {
  id: string;
  id_ruangan: string;
  kapasitas: number;
  lokasi: string;
  nama: string;
}

interface RoomInfo {
  id: string;
  name: string;
  capacity: number;
  location: string;
  image: string;
}

const Home = () => {
  const [hours, setHours] = useState<string>("1");
  const { data } = useSession();
  return (
    <div className="flex flex-col px-4">
      <h3>Welcome {data?.user.name}</h3>
      <DigitalClock />
      <h4 className="mb-0">Available Room : </h4>
      <div className="flex items-center gap-2 mb-2">
        <Select
          value={hours}
          onChange={(e: SelectChangeEvent) => {
            setHours(e.target.value as string);
          }}
        >
          {hoursOpt.map((item) => (
            <MenuItem key={`${item.key}-${item.value}`} value={item.key}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
        <h3>Hours</h3>
      </div>
      <Suspense fallback={<CardsSkeleton />}>
        <CardRooms hours={hours} />
      </Suspense>
    </div>
  );
};

export default Home;
