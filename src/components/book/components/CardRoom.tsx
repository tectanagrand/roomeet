import { Badge, Button } from "@mui/material";
import { UserIcon, MapPinIcon } from "@heroicons/react/24/outline";
import MiniBadge from "@/common/MiniBadge";
import clsx from "clsx";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, createRef, useLayoutEffect } from "react";

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
  selectedId: string;
  clickCard: (id: string) => void;
  error: boolean;
}

export const CardRoom = ({
  roomInfo,
  selectedId,
  clickCard,
  error,
}: CardProp) => {
  const btnRef = createRef();
  function onClickCard(id: string) {
    clickCard(id);
  }
  return (
    <Badge
      badgeContent={<CheckBadgeIcon className="h-4 w-4 p-0" />}
      color="primary"
      invisible={!(roomInfo.id === selectedId)}
    >
      <Button
        sx={{ alignItems: "start", justifyContent: "start" }}
        onClick={() => onClickCard(roomInfo.id)}
        className={clsx(
          "h-44 md:h-52 w-36 md:w-44 rounded-xl hover:bg-slate-300 focus:bg-slate-500 flex flex-col p-3 text-neutral-800 text-left",
          roomInfo.id === selectedId ? "bg-slate-500" : "bg-slate-400",
          error && "border-red-500 border-2 border-solid"
        )}
      >
        <p className="md:text-xl my-0 font-semibold">{roomInfo.name}</p>
        <div className="flex text-xs items-center gap-1">
          <UserIcon className="h-5 w-5 " />
          <p className="my-0">Capacity : {roomInfo.capacity}</p>
        </div>
        <div className="flex text-xs items-center gap-1 ">
          <MapPinIcon className="h-5 w-5" />
          <p className="my-0">Location : {roomInfo.location} </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-4">
          {roomInfo.facility.map((item, idx) => (
            <MiniBadge color="bg-neutral-800" text={item} key={idx + item} />
          ))}
        </div>
      </Button>
    </Badge>
  );
};
