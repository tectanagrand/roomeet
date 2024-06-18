import {
  Calendar,
  dateFnsLocalizer,
  Views,
  ViewsProps,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import id from "date-fns/locale/id";
import { useCallback, useMemo, useState } from "react";
import ToolbarCust from "./ToolbarRBCCust";
import eventMock from "../../../mock/events";

const locales = {
  id: id,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function BigCalendar({ events }: { events?: any }) {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState(Views.MONTH);
  const { views, defaultDate, format } = useMemo(
    () => ({
      views: {
        month: true,
        day: true,
      },
      defaultDate: new Date(),
      format: {
        weekdayFormat: (date: any, culture: any, localizer: any) =>
          localizer.format(date, "E", culture),
        timeGutterFormat: "HH:mm",
      },
    }),
    []
  );
  const onNavigate = useCallback(
    (newDate: Date) => setDate(newDate),
    [setDate]
  );
  const onView = useCallback((newView: any) => setView(newView), [setView]);

  return (
    <div className="my-4">
      <Calendar
        startAccessor="start"
        endAccessor="end"
        localizer={localizer}
        style={{ height: 500 }}
        components={{ toolbar: ToolbarCust }}
        views={views}
        view={view}
        defaultDate={defaultDate}
        onView={onView}
        onNavigate={onNavigate}
        date={date}
        formats={format}
        events={eventMock}
      />
    </div>
  );
}
