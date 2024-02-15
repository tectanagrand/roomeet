import { useMediaQuery } from "@mui/material";
import {
  Bars3Icon,
  HomeIcon,
  BookmarkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Button, Popover, Box, Avatar } from "@mui/material";
import ButtonCard from "@/common/ButtonCard";
import { useState } from "react";

const AppBar = () => {
  const mobile = useMediaQuery("(max-width:480px)");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <div className="fixed w-full max-w-[480px] z-50">
      <div className="h-10 bg-neutral-200 rounded-b-xl">
        <div className="flex justify-between items-center px-3 h-full">
          {!mobile && (
            <>
              <Button
                className="rounded-full p-0"
                disableRipple={true}
                onClick={handleClick}
              >
                <Bars3Icon className="h-4 w-4" />
              </Button>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box className="p-3">
                  <ButtonCard
                    name="Home"
                    icon={<HomeIcon className="text-neutral-100" />}
                    link="/"
                  />
                  <ButtonCard
                    name="List Book"
                    icon={<BookmarkIcon className="text-neutral-100" />}
                    link="#"
                  />
                  <ButtonCard
                    name="New Book"
                    icon={<PlusIcon className="text-neutral-100" />}
                    link="/book"
                  />
                </Box>
              </Popover>
            </>
          )}
          <p className="font-semibold grow md:text-center">ROOMEET</p>
          <Avatar className="h-8 w-8 bg-neutral-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
