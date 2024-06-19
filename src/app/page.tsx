"use client";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return <>
    <Box sx={{minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
      <Typography variant="h4">
        KPN Corp
      </Typography>
      <Typography variant="subtitle1" sx={{color: "primary.main", textTransform: "uppercase", fontWeight: "bold"}}>Book your meeting room</Typography>
      <Link href="/dashboard" passHref>
        <Button variant="contained" className="btn-primary">Start Now</Button>
      </Link>
    </Box>
  </>;
}
