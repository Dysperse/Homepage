import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography variant="h4">
        There are{" "}
        <span style={{ textDecoration: "line-through", opacity: 0.4 }}>24</span>{" "}
        25 hours in a day
      </Typography>
      <Typography>
        Meet #dysperse. It's human productivity, but with superpowers. It adapts
        to the way you work and helps you get more done.
      </Typography>
    </Box>
  );
}
