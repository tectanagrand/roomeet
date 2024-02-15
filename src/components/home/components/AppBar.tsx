import { useMediaQuery } from "@mui/material";
import {
  Bars3Icon,
  HomeIcon,
  BookmarkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Button, Popover, Box, Avatar, IconButton } from "@mui/material";
import ButtonCard from "@/common/ButtonCard";
import { BaseSyntheticEvent, useState } from "react";
import UserMenu from "@/common/UserMenu";

const AppBar = () => {
  const mobile = useMediaQuery("(max-width:480px)");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorMenu, setAnchorMenu] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenu = (e: BaseSyntheticEvent) => {
    setAnchorMenu(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorMenu(null);
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
                className="rounded-full p-0 "
                disableRipple={true}
                onClick={handleClick}
              >
                <Bars3Icon className="h-8 w-8 text-neutral-950" />
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
                    link="/dashboard"
                  />
                  <ButtonCard
                    name="List Book"
                    icon={<BookmarkIcon className="text-neutral-100" />}
                    link="#"
                  />
                  <ButtonCard
                    name="New Book"
                    icon={<PlusIcon className="text-neutral-100" />}
                    link="dashboard/book"
                  />
                </Box>
              </Popover>
            </>
          )}
          <p className="font-semibold grow md:text-center text-neutral-900">
            ROOMEET
          </p>
          <IconButton className="p-0" onClick={handleUserMenu}>
            <Avatar className="h-8 w-8 bg-neutral-600 rounded-full" />
          </IconButton>
          <UserMenu anchorEl={anchorMenu} handleClose={handleMenuClose} />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
