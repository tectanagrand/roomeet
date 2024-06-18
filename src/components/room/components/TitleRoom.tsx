import { Button, Autocomplete, Popper, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

interface TitleRoomProps {
  name: string;
  onChange?: () => void;
}

const Rooms = [
  { label: "Room 1", id: 1 },
  { label: "Room 2", id: 2 },
  { label: "Room 3", id: 3 },
];

export default function TitleRoom({ name, onChange }: TitleRoomProps) {
  const [roomName, setRoomName] = useState<{
    label: string;
    id: number;
  } | null>({
    label: name,
    id: 1,
  });
  const [openPopper, setOpenPop] = useState(false);
  const [anchorEl, setAnchor] = useState<null | HTMLElement>(null);
  const axiosAuth = useAxiosAuth();
  const closeTitle = () => {
    setOpenPop(false);
  };

  return (
    <>
      <Button
        disableRipple
        disableFocusRipple
        onClick={(e) => {
          setOpenPop(!openPopper);
          setAnchor(anchorEl ? null : e.currentTarget);
        }}
        className="border-neutral-400 border-2 border-solid text-neutral-200 w-[20rem] justify-start"
      >
        <ChevronDownIcon className="w-4 h-4 mr-4" />
        <p className="my-0 text-[14pt]">{roomName?.label}</p>
      </Button>
      <Popper open={openPopper} anchorEl={anchorEl}>
        <Paper
          sx={{
            border: 1,
            p: 1,
            m: 10,
            width: "20rem",
            backgroundColor: "black",
          }}
        >
          <Autocomplete
            fullWidth
            options={Rooms}
            value={roomName}
            renderInput={(params) => <TextField {...params} />}
            onChange={(e, value) => {
              if (value !== null) {
                setRoomName(value);
              }
              setOpenPop(false);
              setAnchor(null);
            }}
          />
        </Paper>
      </Popper>
    </>
  );
}
