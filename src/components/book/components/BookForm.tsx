"use client";

import DatePickerComp from "@/common/DatePicker";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import TimePickerComp from "@/common/TimePicker";
import { CardRoom, CardRooms } from "./CardRoom";
import { TextFieldComp } from "@/common/TextField";
import { room } from "@/mock/room";
import { useState } from "react";
import Slider from "react-slick";
import { Suspense } from "react";
import { CardsBookSkeleton } from "@/common/skeletons/CardSkeleton";
import NumericFieldComp from "@/common/NumericField";
import { addHours, format } from "date-fns";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import axios, { AxiosError } from "axios";

interface DefaultVal {
  dateBook: Date;
  startTime: Date | null | undefined;
  endTime: Date | null | undefined;
  durationHour: number;
  capacity: number;
  ruangan: string;
  agenda: string;
  remark: string;
}

export default function BookForm({ bookpar }: { bookpar: string[] }) {
  let idRoom, bookId;
  if (bookpar?.length == 2) {
    idRoom = bookpar[0];
    bookId = bookpar[1];
  } else if (bookpar !== undefined) {
    idRoom = bookpar[0];
  }
  const { data } = useSession();
  const axiosAuth = useAxiosAuth();
  const form = useForm({
    defaultValues: {
      dateBook: new Date(),
      startTime: null,
      endTime: null,
      durationHour: 0,
      capacity: 0,
      ruangan: "",
      agenda: "",
      remark: "",
    } as DefaultVal,
  });
  const onSubmit = async (values: DefaultVal) => {
    const payload = {
      id_ruangan: values.ruangan,
      id_user: data?.user.id_user,
      book_date: format(values.dateBook, "Y-L-d"),
      time_start: format(values.startTime as Date, "HH:mm"),
      duration: values.durationHour,
      agenda: values.agenda,
      participant: values.capacity,
      remark: values.remark,
    };
    console.log(payload);
    try {
      const res = await axiosAuth.post("/book", { data: payload });
      toast.success(res.data.message);
    } catch (error) {
      const errors = error as AxiosError;
      if (axios.isAxiosError(error)) {
        const data = errors.response?.data as { message: string };
        toast.error(data.message);
      } else {
        toast.error("error");
      }
      console.error(error);
    }
  };
  const handleSubmit = form.handleSubmit;
  const register = form.register;
  const setValue = form.setValue;
  const values = form.getValues();
  const formState = form.formState;
  const [roomId, setRoomid] = useState<string>("");
  const [endTime, setEndTime] = useState<Date | undefined>();
  const [startTime, setStartTime] = useState<Date | undefined>();
  const [dur, setDur] = useState<number | undefined>(0);
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

  const onChangeDur = (value: any) => {
    setDur(value);
    const timeTemp = new Date(startTime?.toISOString() as string);
    const endTime = (startTime: any) => {
      const end = addHours(startTime, value);
      return end;
    };
    setEndTime(endTime(timeTemp));
    form.setValue("endTime", endTime(timeTemp));
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
            onChangeOvr={(value) => {
              const timeTemp = new Date(value?.toISOString() as string);
              const endTime = (startTime: any) => {
                const end = addHours(startTime, dur as number);
                return end;
              };
              setEndTime(endTime(timeTemp));
              form.setValue("endTime", endTime(timeTemp));
              setStartTime(value);
            }}
          />
          <TimePickerComp
            name="endTime"
            label="End Time"
            control={form.control}
            disabled={true}
            valueOvr={endTime}
          />
          <input {...register("ruangan")} hidden={true} />
        </div>
        <div className="flex gap-1">
          <NumericFieldComp
            control={form.control}
            name="durationHour"
            label="Hour Duration"
            onChangeOvr={onChangeDur}
            rules={{
              required: "Insert duration",
              min: { value: 1, message: "Minimum value 1" },
              max: { value: 24, message: "Maximum value 24" },
            }}
            type="number"
            min={0}
            max={24}
          />
          <NumericFieldComp
            control={form.control}
            name="capacity"
            label="Capacity"
            type="number"
            min={0}
            max={100}
            rules={{
              required: "Insert capacity",
              min: { value: 1, message: "Minimum value 1" },
            }}
          />
          <input
            {...register("ruangan", { required: "Please input" })}
            hidden={true}
          />
        </div>
        <p className="my-0">Room :</p>
        <Suspense fallback={<CardsBookSkeleton />}>
          <CardRooms
            selectedId={roomId}
            clickCard={selectRoom}
            errorData={!!formState.errors?.ruangan}
          />
        </Suspense>
        {/* <Slider {...settings}>
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
        </Slider> */}
        <TextFieldComp
          control={form.control}
          name="agenda"
          label="Agenda"
          rules={{
            required: "This field is required",
            maxLength: {
              value: 50,
              message: "Please input less than 50 character",
            },
          }}
        />
        <TextFieldComp
          multiline={true}
          rows={5}
          control={form.control}
          name="remark"
          label="Remark"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
      <Toaster />
    </form>
  );
}
