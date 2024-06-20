"use client";

import {
  UserIcon,
  MapPinIcon,
  InformationCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { Button, ListItem, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CardsSkeleton } from "@/common/skeletons/CardSkeleton";
import useSWR from "swr";
import Slider from "react-slick";

interface RoomInfo {
  id: string;
  name: string;
  capacity: number;
  location: string;
  image: string;
}

interface RoomsData {
  id: string;
  id_ruangan: string;
  kapasitas: number;
  lokasi: string;
  nama: string;
}

interface CardProp {
  roomInfo: RoomInfo;
}

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
};

const CardRoom = ({ roomInfo }: CardProp) => {
  return (
    <div className="h-[21rem] w-[16rem] mr-4 bg-neutral-300 rounded-3xl flex flex-col text-neutral-900">
      <div className="h-[8rem] w-full bg-neutral-500 rounded-3xl">
        <Image
          src={roomInfo.image}
          width={100}
          height={100}
          className="h-[8rem] w-full rounded-3xl"
          alt="Image of room"
        />
      </div>
      <div className="p-2 flex flex-col grow justify-between">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="my-0.5 text-2xl font-semibold">{roomInfo.name}</p>
            <Tooltip title="Facility">
              <Button
                disableRipple
                className="h-8 w-8 text-neutral-900 p-0"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <EllipsisVerticalIcon />
              </Button>
            </Tooltip>
          </div>

          <div className="flex text-md items-center gap-1 font-medium">
            <UserIcon className="h-5 w-5" />
            <p className="my-0">Capacity : {roomInfo.capacity}</p>
          </div>
          <div className="flex text-md items-center gap-1 font-medium">
            <MapPinIcon className="h-5 w-5" />
            <p className="my-0">Location : {roomInfo.location} </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 ">
          <Link href="dashboard/book" className="grow">
            <Button className="w-full btn-primary">Book</Button>
          </Link>
          <Link href="dashboard/room" className="h-10 w-10 ">
            <Button className="w-full h-10 p-0 btn-primary">
              <InformationCircleIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CardRooms = ({ hours }: { hours?: string }) => {
  const url = `/room/avai?hours=${hours}`;
  console.log(url);
  const {
    data: rooms,
    error,
    isLoading,
  } = useSWR(url, {
    fallback: { url: [] },
  });
  console.log(rooms);
  let roomData = [];
  if (!isLoading) {
    roomData = rooms?.data?.map((item: RoomsData) => ({
      id: item.id,
      name: item.nama,
      capacity: item.kapasitas,
      location: item.lokasi,
      image:
        "https://images.unsplash.com/photo-1576073460027-794a4ab09b12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVldGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
    }));
  }
  return (
    <>
      {!isLoading && roomData.length !== 0 && (
        <Slider {...settings}>
          {roomData.map((item: RoomInfo) => (
            <div key={item.id}>
              <CardRoom roomInfo={item} />
            </div>
          ))}
        </Slider>
      )}
      {(isLoading || roomData.length === 0) && <CardsSkeleton />}
    </>
  );
};
