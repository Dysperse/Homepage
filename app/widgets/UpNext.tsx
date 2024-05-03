import { Button, Typography } from "@mui/material";
import { addHslAlpha, grassDark } from "../themes";
import { CardContainer } from "./CardContainer";

export function UpNext() {
  return (
    <CardContainer
      sx={{
        flex: undefined,
        p: 3,
        background: grassDark.grass3,
        borderColor: grassDark.grass6,
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          textTransform: "uppercase",
          color: grassDark.grass10,
        }}
      >
        Up next
      </Typography>
      <Typography
        variant="h4"
        sx={{ mt: 1, fontSize: 37, fontWeight: 200, color: grassDark.grass11 }}
      >
        hangout @ chipotle
      </Typography>
      <Typography
        sx={{
          opacity: 0.6,
          mb: 2,
          fontSize: 18,
          mt: 0.5,
          color: grassDark.grass11,
        }}
        fontWeight={600}
      >
        in 3 minutes
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: "auto",
          transition: "none",
          backgroundColor: grassDark.grass9,
          "&:hover": {
            backgroundColor: grassDark.grass11,
          },
          "&:active": {
            backgroundColor: grassDark.grass8,
          },
          fontWeight: 300,
        }}
        size="large"
      >
        <span className="material-symbols-rounded">location_on</span>
        Open directions
      </Button>
    </CardContainer>
  );
}
