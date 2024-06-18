import { useState } from "react";
import * as datefns from "date-fns";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button, styled } from "@mui/material";

const ButtonToggle = styled(Button, {
  shouldForwardProp: (prop) => prop != "ontoggle",
})<{ ontoggle: boolean }>(({ ontoggle }) => ({
  ...(ontoggle && {
    backgroundColor: "#d4d4d4",
    color: "#0a0a0a",
    "&:hover": {
      backgroundColor: "#a3a3a3",
      color: "#0a0a0a",
    },
  }),
  ...(!ontoggle && {
    backgroundColor: "#0a0a0a",
    color: "#d4d4d4",
  }),
}));

export default function ToolbarCust(props: any) {
  const [viewState, setViewState] = useState("month");

  const goToDayView = () => {
    props.onView("day");
    setViewState("day");
  };

  const goToMonthView = () => {
    props.onView("month");
    setViewState("month");
  };

  const backView = () => {
    let newDate;
    const rnDate = props.date;
    let view = viewState;

    if (view === "month") {
      newDate = new Date(rnDate.getFullYear(), rnDate.getMonth() - 1, 1);
    } else if (view === "day") {
      newDate = new Date(
        rnDate.getFullYear(),
        rnDate.getMonth(),
        rnDate.getDate() - 1,
        1
      );
    }

    props.onNavigate("prev", newDate);
  };

  const nextView = () => {
    let newDate;
    const rnDate = props.date;
    let view = viewState;

    if (view === "month") {
      newDate = new Date(rnDate.getFullYear(), rnDate.getMonth() + 1, 1);
    } else if (view === "day") {
      newDate = new Date(
        rnDate.getFullYear(),
        rnDate.getMonth(),
        rnDate.getDate() + 1,
        1
      );
    }

    props.onNavigate("next", newDate);
  };

  const todayView = () => {
    const now = new Date();
    props.date.setMonth(now.getMonth());
    props.date.setYear(now.getFullYear());
    props.date.setDate(now.getDate());
    props.onNavigate("current", now);
  };

  const label = () => {
    let rnDate = props.date as Date;
    let month = datefns.format(rnDate, "MMMM");
    let year = datefns.format(rnDate, "yyyy");
    let day = datefns.format(rnDate, "E, MM-dd-yyyy");
    if (viewState === "month") {
      return (
        <span className="rbc-toolbar-label text-center">{`${month} ${year}`}</span>
      );
    } else {
      return <span className="rbc-toolbar-label text-center">{`${day}`}</span>;
    }
  };

  return (
    <div className="flex justify-between my-2 items-center">
      <span className="flex gap-1 items-center">
        <Button className="btn-primary h-8 w-8 " onClick={backView}>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button className="btn-primary today" onClick={todayView}>
          Today
        </Button>
        <Button className="btn-primary h-8 w-8" onClick={nextView}>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </span>
      {label()}
      <span className="flex gap-1">
        <ButtonToggle
          className="h-8"
          ontoggle={viewState === "month"}
          onClick={goToMonthView}
        >
          <span className="label-filter-off">Month</span>
        </ButtonToggle>
        <ButtonToggle
          className="h-8"
          ontoggle={viewState === "day"}
          onClick={goToDayView}
        >
          <span className="label-filter-off">Day</span>
        </ButtonToggle>
      </span>
    </div>
  );
}
