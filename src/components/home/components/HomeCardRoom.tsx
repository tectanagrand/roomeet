"use client";

import {
  UserIcon,
  MapPinIcon,
  InformationCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { Button, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface RoomInfo {
  id: string;
  name: string;
  capacity: number;
  location: string;
  facility: Array<string>;
  image: string;
}

interface CardProp {
  roomInfo: RoomInfo;
}

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
          <Link href="/book" className="grow">
            <Button className="w-full btn-primary">Book</Button>
          </Link>
          <Link href="/room" className="h-10 w-10 ">
            <Button className="w-full h-10 p-0 btn-primary">
              <InformationCircleIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardRoom;
