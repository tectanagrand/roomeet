import {
  Menu,
  MenuItem,
  Box,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";

interface UserMenuProps {
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
}

export default function UserMenu({ anchorEl, handleClose }: UserMenuProps) {
  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };
  const { data: session } = useSession();

  return (
    <Menu
      id="avatar-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 30, horizontal: -120 }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      keepMounted
    >
      <MenuItem sx={{ width: "10rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton>
            <Avatar>
              {session?.user?.username?.slice(0, 2).toUpperCase()}
            </Avatar>
          </IconButton>
          <Typography>{session?.user?.name?.split(" ")[0]}</Typography>
        </Box>
      </MenuItem>
      <MenuItem onClick={handleLogout} sx={{ width: "10rem" }}>
        Logout
      </MenuItem>
      {/* <MenuItem onClick={handleUserInfo} sx={{ width: '10rem' }}>
          Edit User Info
        </MenuItem> */}
    </Menu>
  );
}
