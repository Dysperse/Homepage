import { Emoji } from "@/app/Emoji";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import { mintDark } from "@radix-ui/colors";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { collectionCategories } from "../categories";
import { Preview } from "../Preview";
import { ProfilePicture } from "../ProfilePicture";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

const Filter = require("bad-words");

export const dynamicParams = true; // or false, to 404 on unknown paths
export const revalidate = 60; // 1 hour

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const template = await getTemplate(id);

  if (template)
    return {
      title: `${template.name} • Dysperse templates`,
      description:
        template.description ||
        "Browse templates curated by the community to inspire your next big idea.",
      authors: {
        name: template.createdBy.profile?.name,
      },
      keywords: [
        "Dysperse",
        "Dysverse",
        "templates",
        ...template.labels.map((label: any) => label.name),
      ],
      category: template.category,
      publisher: "#dysverse • by Dysperse",
      openGraph: {
        images: [`https://og.dysperse.com/${id}`],
        title: `${template.name} • Dysperse templates`,
        description:
          template.description ||
          "Browse templates curated by the community to inspire your next big idea.",
      },
    };
  else {
    return {};
  }
}

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
              pr: 1.7,
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
            href={`https://app.dysperse.com/template/${id}`}
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
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            marginBottom: 20,
          }}
        >
          {template.labels.map((label: any) => (
            <Chip
              key={label}
              label={label.name}
              icon={<Emoji emoji={label.emoji} size={24} />}
              sx={{
                pl: 2,
                height: "auto",
                fontSize: 15,
                py: 1,
                borderRadius: 99,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            />
          ))}
        </Box>

        <Typography variant="h5" fontWeight={900} sx={{ mb: 1, mt: 5 }}>
          Description
        </Typography>
        <Markdown remarkPlugins={[remarkGfm]}>
          {template.description || "No description provided"}
        </Markdown>
        <Typography variant="h5" fontWeight={900} sx={{ mb: 1, mt: 5 }}>
          Preview
        </Typography>
        <Box
          sx={{
            background: "hsl(0, 0%, 17%)",
            borderRadius: 5,
            aspectRatio: "1200/630",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 0.7,
              p: 2,
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
          <Image
            alt={`Preview of ${template.name}`}
            src={`https://og.dysperse.com/${id}`}
            width={1200}
            height={630}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
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
