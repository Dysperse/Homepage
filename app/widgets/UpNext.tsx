import { Button, Typography } from "@mui/material";
import { addHslAlpha, grassDark } from "../themes";
import { CardContainer } from "./CardContainer";
import { useColorTheme } from "../useColor";

export function UpNext() {
  const theme = useColorTheme();

  return (
    <CardContainer
      sx={{
        flex: undefined,
        p: 3,
        background: theme[3],
        borderColor: theme[6],
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          textTransform: "uppercase",
          color: theme[10],
        }}
      >
        Up next
      </Typography>
      <Typography
        variant="h4"
        sx={{ mt: 1, fontSize: 37, fontWeight: 200, color: theme[11] }}
      >
        hangout @ chipotle
      </Typography>
      <Typography
        sx={{
          opacity: 0.6,
          mb: 2,
          fontSize: 18,
          mt: 0.5,
          color: theme[11],
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
          backgroundColor: theme[9],
          "&:hover": {
            backgroundColor: theme[11],
          },
          "&:active": {
            backgroundColor: theme[8],
          },
          fontWeight: 300,
        }}
        size="large"
        onClick={() => {
          window.open("https://locations.chipotle.com", "_blank");
        }}
      >
        <span className="material-symbols-rounded">location_on</span>
        Open directions
      </Button>
    </CardContainer>
  );
}
