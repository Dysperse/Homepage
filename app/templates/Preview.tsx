import { Box, Chip, SxProps, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Emoji } from "../Emoji";

export function Preview({ large, showToolbar, view, labels }: any) {
  const Container = ({ children, sx }: { children: any; sx?: SxProps }) => (
    <Box
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 5,
        color: "hsl(0, 0%, 50%)",
        background: "hsl(0, 0%, 17%)",
      }}
    >
      {showToolbar && (
        <Box
          sx={{
            display: "flex",
            gap: 0.7,
            mb: 2,
            py: 1,
            pb: 2,
            px: 2,
            mx: -2,
            borderBottom: "1px solid hsl(0, 0%, 24%)",
          }}
        >
          {["#f73443", "#f7ae00", "#00c900"].map((color) => (
            <Box
              key={color}
              sx={{
                width: 15,
                height: 15,
                borderRadius: 99,
                background: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ))}
        </Box>
      )}
      <Box
        sx={{
          aspectRatio: large ? "16/9" : "13/9",
          display: "flex",
          fontWeight: 900,
          gap: 0.5,
          overflow: "hidden",
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );

  switch (view) {
    case "planner":
      return (
        <Container>
          {new Array(7).fill(0).map((_, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: 1,
                p: 1,
                flex: 1,
                background: "hsl(0, 0%, 20%)",
                borderRadius: 2,
                justifyContent: "center",
              }}
            >
              {dayjs().startOf("week").add(i, "day").format("dddd")[0]}
            </Box>
          ))}
        </Container>
      );
    case "kanban":
      return (
        <Container sx={{ gap: 1 }}>
          {labels.slice(0, 4).map((label: any) => (
            <Box
              key={label.name}
              sx={{
                gap: 2,
                p: 1.5,
                py: 2,
                flex: 1,
                background: "hsl(0, 0%, 20%)",
                borderRadius: 2,
                whiteSpace: "nowrap",
                ...(large
                  ? {
                      flexDirection: "column",
                      justifyContent: "center",
                    }
                  : {
                      textOrientation: "mixed",
                      writingMode: "vertical-rl",
                    }),
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Emoji size={large ? 40 : undefined} emoji={label.emoji} />
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontSize: !large ? 13 : { xs: 13, sm: 30 },
                  minWidth: 0,
                  maxWidth: "100%",
                }}
                fontWeight={700}
              >
                {label.name}
              </Typography>
            </Box>
          ))}
          {labels.length > 4 && (
            <Box
              sx={{
                gap: 1,
                p: 1,
                flex: 1,
                background: "hsl(0, 0%, 20%)",
                borderRadius: 2,
                minWidth: 100,
              }}
            />
          )}
          {labels.length < 4 &&
            new Array(4 - labels.length).fill(0).map((_, i) => (
              <Box
                key={i}
                sx={{
                  gap: 1,
                  p: 1,
                  flex: 1,
                  background: "hsl(0, 0%, 20%)",
                  borderRadius: 2,
                }}
              />
            ))}
        </Container>
      );
    case "stream":
      return (
        <Container sx={{ flexDirection: "column" }}>
          {["Backlog", "Upcoming", "Completed", "Unscheduled"].map(
            (label: any) => (
              <Chip
                key={label}
                label={label}
                sx={{
                  background: "hsl(0, 0%, 20%)",
                  color: "hsl(0, 0%, 50%)",
                  fontWeight: 900,
                  flex: 1,
                }}
              />
            )
          )}
        </Container>
      );
    case "grid":
      const t = labels.splice(0, 4);
      return (
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "1fr",
            gap: 1,
          }}
        >
          {t.map((label: any) => (
            <Box
              key={label.name}
              sx={{
                background: "hsl(0, 0%, 20%)",
                borderRadius: 2,
                p: 1,
                px: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Emoji emoji={label.emoji} />
              <Typography
                sx={{
                  fontSize: !large ? 13 : { xs: 13, sm: 15 },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                fontWeight={700}
              >
                {label.name}
              </Typography>
            </Box>
          ))}
          {t.length < 4 &&
            new Array(4 - t.length).fill(0).map((_, i) => (
              <Box
                key={i}
                sx={{
                  background: "hsl(0, 0%, 20%)",
                  borderRadius: 2,
                  p: 1,
                }}
              />
            ))}
        </Container>
      );
    case "workload":
      return (
        <Container>
          {[
            [2, "Minimum effort"],
            [4, "Little effort"],
            [8, "Moderate effort"],
            [16, "Significant effort"],
            [32, "Maximum effort"],
          ].map(([number, text]) => (
            <Box
              key={text}
              sx={{
                gap: 2,
                p: 1.5,
                flex: 1,
                background: "hsl(0, 0%, 20%)",
                borderRadius: 2,
                whiteSpace: "nowrap",
                textOrientation: "mixed",
                writingMode: "vertical-rl",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  minWidth: 30,
                  minHeight: 30,
                  transform: "rotate(-90deg)",
                  borderRadius: 99,
                  background: "hsl(0, 0%, 25%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography style={{ fontWeight: 900 }}>{number}</Typography>
              </Box>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontSize: !large ? 13 : { xs: 13, sm: 15 },
                }}
                fontWeight={700}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Container>
      );
    case "list":
      return (
        <Container sx={{ flexDirection: "column" }}>
          {labels.map((label: any) => (
            <Chip
              key={label.name}
              icon={<Emoji emoji={label.emoji} />}
              label={label.name}
              sx={{
                justifyContent: "flex-start",
                px: 2,
                background: "hsl(0, 0%, 20%)",
                color: "hsl(0, 0%, 50%)",
                fontWeight: 900,
                flex: 1,
              }}
            />
          ))}
        </Container>
      );
    case "matrix":
      return (
        <Container
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              pt: 5,
              "& *": {
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "scale(-1)",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: !large ? 12 : { xs: 12, sm: 15 },
                flex: 1,
              }}
            >
              Important
            </Typography>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: !large ? 12 : { xs: 12, sm: 15 },
                flex: 1,
              }}
            >
              Urgent
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flex: 1, gap: 1 }}>
            <Box
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: !large ? 12 : { xs: 12, sm: 15 },
                }}
              >
                Not urgent
              </Typography>
              <Box
                sx={{
                  background: "hsl(0, 0%, 20%)",
                  borderRadius: 2,
                  p: 1,
                  flex: 1,
                }}
              />
              <Box
                sx={{
                  background: "hsl(0, 0%, 20%)",
                  borderRadius: 2,
                  p: 1,
                  flex: 1,
                }}
              />
            </Box>
            <Box
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: !large ? 12 : { xs: 12, sm: 15 },
                }}
              >
                Not important
              </Typography>
              <Box
                sx={{
                  background: "hsl(0, 0%, 20%)",
                  borderRadius: 2,
                  p: 1,
                  flex: 1,
                }}
              />
              <Box
                sx={{
                  background: "hsl(0, 0%, 20%)",
                  borderRadius: 2,
                  p: 1,
                  flex: 1,
                }}
              />
            </Box>
          </Box>
        </Container>
      );
    case "calendar":
      return (
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridAutoRows: "1fr",
          }}
        >
          {new Array(7).fill(0).map((_, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: 1,
                p: 1,
                background: "hsl(0, 0%, 23%)",
                borderRadius: 2,
                justifyContent: "center",
              }}
            >
              {dayjs().startOf("week").add(i, "day").format("dddd")[0]}
            </Box>
          ))}
          {new Array(35).fill(0).map((_, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: 1,
                p: 1,
                background: "hsl(0, 0%, 20%)",
                borderRadius: 2,
                justifyContent: "center",
              }}
            />
          ))}
        </Container>
      );
  }
}
