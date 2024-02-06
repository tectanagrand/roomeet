"use client";

import DigitalClock from "./DigitalClock";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import CardRoom from "./HomeCardRoom";
import { room } from "@/mock/room";
import Slider from "react-slick";

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

const Home = () => {
  const [hours, setHours] = useState<string>("1");
  return (
    <div className="flex flex-col px-4">
      <h3>Welcome Mr.xxxxx</h3>
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
      <Slider {...settings}>
        {room.map((item) => (
          <div key={item.id}>
            <CardRoom roomInfo={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
