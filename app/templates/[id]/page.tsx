import { Emoji } from "@/app/Emoji";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import { mintDark } from "@radix-ui/colors";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { collectionCategories } from "../categories";
import { Preview } from "../Preview";
import { ProfilePicture } from "../ProfilePicture";
import Link from "next/link";

const Filter = require("bad-words");

function Back() {
  return (
    <Link href="/templates">
      <Button
        variant="contained"
        disableElevation
        size="small"
        sx={{
          m: -1,
          background: "transparent",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.1)",
          },
          "&:active": {
            background: "rgba(255, 255, 255, 0.2)",
          },
          color: "#aaa",
        }}
      >
        <span className="material-symbols-rounded">west</span> Back to templates
      </Button>
    </Link>
  );
}

export default async function Page({ params: { id } }: any) {
  const template = await getTemplate(id);

  if (!template)
    return (
      <Container sx={{ pt: 20 }}>
        <Back />
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{
            fontSize: 40,
            mt: 2,
            mb: 1,
            fontWeight: 900,
            fontFamily: "Agrandir",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{ fontSize: 20, fontWeight: 900, fontFamily: "Agrandir" }}
        >
          Template not found
        </Typography>
      </Container>
    );

  if (template.offensive)
    return (
      <Container sx={{ pt: 20 }}>
        <Back />
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{ fontSize: 30, fontWeight: 900, fontFamily: "Agrandir" }}
        >
          We&apos;ve hidden this template for containing offensive content.
        </Typography>
      </Container>
    );

  return (
    <Container sx={{ pt: 20 }}>
      <Back />
      <Box>
        {template.category && (
          <Chip
            icon={
              <span
                className="material-symbols-rounded"
                style={{ paddingRight: 10 }}
              >
                {collectionCategories.find((c) => c.text === template.category)
                  ?.icon || "help"}
              </span>
            }
            variant="outlined"
            label={template.category}
            sx={{
              pl: 2,
              height: "auto",
              fontSize: 15,
              py: 1,
              mt: 3,
              borderRadius: 99,
            }}
          />
        )}
        <Box
          sx={{
            mt: 1,
            alignItems: { xs: "flex-start", sm: "center" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            fontWeight={900}
            variant="h1"
            sx={{
              fontSize: { xs: 40, sm: 80 },
              fontWeight: 900,
              fontFamily: "Agrandir",
            }}
          >
            {template?.name}
          </Typography>
          <Button
            sx={{
              mt: { xs: 2, sm: 3 },
              px: 4,
              mb: { xs: 3, sm: 0 },
              py: 1.5,
              ml: { sm: "auto" },
              fontSize: 20,
              fontWeight: 900,
              textTransform: "uppercase",
              borderRadius: 99,
              background: mintDark.mint11,
              color: mintDark.mint5,
              flexShrink: 0,
              "&:hover": {
                background: mintDark.mint10,
              },
              "&:active": {
                background: mintDark.mint9,
              },
            }}
          >
            Get&nbsp;template
          </Button>
        </Box>
        <ProfilePicture template={template} />
        <Typography variant="h5" fontWeight={900} sx={{ mb: 1, mt: 5 }}>
          {template.labels.length} label
          {template.labels.length !== 1 ? "s" : ""}
        </Typography>
        {template.labels.map((label: any) => (
          <Chip
            key={label}
            label={label.name}
            icon={<Emoji emoji={label.emoji} size={24} />}
            sx={{
              mr: 1,
              pl: 2,
              height: "auto",
              fontSize: 15,
              py: 1,
              borderRadius: 99,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />
        ))}

        <Typography variant="h5" fontWeight={900} sx={{ mb: 1, mt: 5 }}>
          Description
        </Typography>
        <Markdown remarkPlugins={[remarkGfm]}>
          {template.description || "No description provided"}
        </Markdown>
        <Typography variant="h5" fontWeight={900} sx={{ mb: 1, mt: 5 }}>
          Preview
        </Typography>
        <Preview
          showToolbar
          large
          view={template.defaultView}
          labels={template.labels}
        />
      </Box>
    </Container>
  );
}

const getTemplate = async (id: string) => {
  const filter = new Filter();
  const data = await fetch(
    "https://api.dysperse.com/dysverse?id=" + encodeURIComponent(id)
  ).then((res) => res.json());

  if (!data?.[0]) return null;
  //   no drugs allowed
  filter.addWords("drugs", "cocaine", "meth", "weed", "heroin", "crack", "lsd");

  // check if the data contains bad words
  if (JSON.stringify(data) !== filter.clean(JSON.stringify(data))) {
    return { offensive: true };
  }

  return data?.[0];
};
