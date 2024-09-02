"use client";
import { Avatar, Box, Typography } from "@mui/material";
import { skyDark } from "@radix-ui/colors";
import { CardContainer } from "./CardContainer";

export const Weather = () => (
  <CardContainer
    sx={{
      flex: 2,
      background: `linear-gradient(180deg, ${skyDark.sky4} 0%, ${skyDark.sky2} 100%)`,
      borderColor: skyDark.sky5,
      color: skyDark.sky11,
      justifyContent: "center",
      alignItems: "space-between",
      minHeight: { xs: 290, md: 0 },
      px: 4,
      py: 3,
    }}
  >
    <Box>
      <Box sx={{ display: "flex", mb: 2, width: "100%" }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={900} className="monospace">
            74°
          </Typography>
          <Typography marginTop={-0.5} sx={{ opacity: 0.7 }}>
            Cloudy &middot; Feels like 74&deg;
          </Typography>
        </Box>
        <span
          className="material-symbols-rounded"
          style={{ fontSize: 50, color: skyDark.sky11, marginLeft: "auto" }}
        >
          cloudy
        </span>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {[
          { icon: "light_mode", heading: "5:58 AM", subheading: "Sunrise" },
          { icon: "wb_twilight", heading: "7:38 PM", subheading: "Sunset" },
          { icon: "north", heading: "75", subheading: "Low" },
          { icon: "south", heading: "85", subheading: "High" },
        ].map((i) => (
          <Box
            key={i.heading}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
                mr: 1,
                bgcolor: skyDark.sky4,
                color: skyDark.sky11,
              }}
              key={i.heading}
            >
              <span
                className="material-symbols-rounded"
                style={{ fontSize: 20 }}
              >
                {i.icon}
              </span>
            </Avatar>
            <Box>
              <Typography fontWeight={900} fontSize={13}>
                {i.heading}
              </Typography>
              <Typography fontSize={10} sx={{ opacity: 0.7 }}>
                {i.subheading}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </CardContainer>
);
