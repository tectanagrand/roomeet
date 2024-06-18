"use client";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon, BookmarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Box, Button, Popover } from "@mui/material";
import { useState } from "react";
import ButtonCard from "./ButtonCard";

const NavButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="fixed bottom-0 right-0 p-5 ">
      <Button
        className="h-12 w-12 bg-neutral-500 rounded-full hover:bg-neutral-400"
        onClick={(e) => handleClick(e)}
      >
        <PlusCircleIcon className="text-neutral-200" />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
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
            link="/dashboard/booklist"
          />
          <ButtonCard
            name="New Book"
            icon={<PlusIcon className="text-neutral-100" />}
            link="/dashboard/book"
          />
        </Box>
      </Popover>
    </div>
  );
};

export default NavButton;
