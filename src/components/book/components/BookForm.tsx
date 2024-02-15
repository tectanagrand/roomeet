"use client";

import DatePickerComp from "@/common/DatePicker";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import TimePickerComp from "@/common/TimePicker";
import { CardRoom } from "./CardRoom";
import { TextFieldComp } from "@/common/TextField";
import { room } from "@/mock/room";
import { BaseSyntheticEvent, useState } from "react";
import Slider from "react-slick";
import NumericFieldComp from "@/common/NumericField";

export default function BookForm() {
  const form = useForm({
    defaultValues: {
      dateBook: new Date(),
      capacity: "",
      ruangan: "",
      agenda: "",
    },
  });
  const onSubmit = (values: object) => {
    console.log(values);
  };
  const handleSubmit = form.handleSubmit;
  const register = form.register;
  const setValue = form.setValue;
  const formState = form.formState;
  const [roomId, setRoomid] = useState<string>("");
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };

  const selectRoom = (idRoom: string) => {
    setRoomid(idRoom);
    setValue("ruangan", idRoom);
    form.clearErrors("ruangan");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col container gap-4 pt-6 px-10">
        <DatePickerComp
          name="dateBook"
          label="Booking Date"
          control={form.control}
          rules={{ required: "This field is required" }}
        />
        <div className="flex gap-1">
          <TimePickerComp
            name="startTime"
            label="Start Time"
            control={form.control}
            rules={{ required: "This field is required" }}
          />
          <TimePickerComp
            name="endTime"
            label="End Time"
            control={form.control}
            disabled={true}
            sx={{
              "&.Mui-disabled": {
                color: "white",
              },
            }}
          />
          <input {...register("ruangan")} hidden={true} />
        </div>
        <div className="flex gap-1">
          <NumericFieldComp
            control={form.control}
            name="durationHour"
            label="Hour Duration"
            rules={{ required: "Insert duration" }}
          />
          <NumericFieldComp
            control={form.control}
            name="capacity"
            label="Capacity"
            rules={{ required: "Insert capacity" }}
          />
          <input
            {...register("ruangan", { required: "Please input" })}
            hidden={true}
          />
        </div>
        <Slider {...settings}>
          {room.map((item) => (
            <div className="py-4 pt-6" key={item.id}>
              <CardRoom
                roomInfo={item}
                selectedId={roomId}
                clickCard={selectRoom}
                error={!!formState.errors?.ruangan}
              />
            </div>
          ))}
        </Slider>
        <TextFieldComp control={form.control} name="agenda" label="Agenda" />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
}
