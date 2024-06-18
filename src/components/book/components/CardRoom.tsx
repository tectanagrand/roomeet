import { Badge, Button } from "@mui/material";
import { UserIcon, MapPinIcon } from "@heroicons/react/24/outline";
import MiniBadge from "@/common/MiniBadge";
import clsx from "clsx";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, createRef, useLayoutEffect } from "react";
import useSWR from "swr";
import Slider from "react-slick";
import { CardsBookSkeleton } from "@/common/skeletons/CardSkeleton";

interface RoomInfo {
  id: string;
  name: string;
  capacity: number;
  location: string;
  facility: Array<string>;
  image: string;
}

interface RoomData {
  id: string;
  id_ruangan: string;
  nama: string;
  kapasitas: string;
  lokasi: string;
  image: string;
  fasilitas: Array<string>;
}

interface CardProp {
  roomInfo: RoomInfo;
  selectedId: string;
  clickCard: (id: string) => void;
  error: boolean;
}

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
};

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
      badgeContent={<CheckBadgeIcon className="h-8 w-8 p-0" />}
      color="primary"
      invisible={!(roomInfo.id === selectedId)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        "& .MuiBadge-badge": {
          right: 30,
          height: 40,
          width: 40,
        },
      }}
    >
      <Button
        sx={{ alignItems: "start", justifyContent: "start" }}
        onClick={() => onClickCard(roomInfo.id)}
        className={clsx(
          "h-52 w-44 mr-4 rounded-xl hover:bg-slate-300 focus:bg-slate-500 flex flex-col p-3 text-neutral-800 text-left",
          roomInfo.id === selectedId ? "bg-slate-500" : "bg-slate-400",
          error && "border-red-500 border-2 border-solid"
        )}
      >
        <p className="text-xl my-0 font-semibold">{roomInfo.name}</p>
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

export const CardRooms = ({
  selectedId,
  clickCard,
  errorData,
}: {
  selectedId: string;
  clickCard: (id: string) => void;
  errorData: boolean;
}) => {
  const {
    data: rooms,
    error,
    isLoading,
  } = useSWR("/room/fas", { suspense: true, fallback: { "/room/fas": [] } });
  const roomData: Array<RoomInfo> = rooms?.data?.map((item: RoomData) => {
    return {
      id: item.id_ruangan,
      name: item.nama,
      capacity: item.kapasitas,
      location: item.lokasi,
      facility: item.fasilitas,
      image: item.image,
    };
  });

  return (
    <>
      {!isLoading && (
        <Slider {...settings}>
          {roomData?.map((item) => (
            <div className="py-4 pt-6" key={item.id}>
              <CardRoom
                roomInfo={item}
                selectedId={selectedId}
                clickCard={clickCard}
                error={errorData}
              />
            </div>
          ))}
        </Slider>
      )}
      {isLoading && <CardsBookSkeleton />}
    </>
  );
};
