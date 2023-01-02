import { Box, Grid, Icon, IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function ArticleCard({ slug, article, description }) {
  return (
    <Grid item xs={12} md={6}>
      <Link href={`/articles/${slug}`}>
        <div className="shadow-lg rounded-2xl p-4 flex flex-col gap-2 w-full border hover:bg-gray-100 active:bg-gray-200 hover:border-gray-300 active:border-gray-400 cursor-pointer">
          <h1 className="text-xl font-[700]">{article}</h1>
          <h1 className="text-md font-[400] opacity-80">{description}</h1>
        </div>
      </Link>
    </Grid>
  );
}

export default function Support() {
  const articles = [
    {
      article: "Creating an item",
      description: "Learn how to create or scan an item to your inventory",
      slug: "creating-an-item",
    },
    {
      article: "All about boards",
      description: "Learn what kanban boards are and how to use them",
      slug: "all-about-boards",
    },
    {
      article: "Goals",
      description: "Learn how to set and achieve your goals using Carbon",
      slug: "goals",
    },
    {
      article: "Spaces",
      description: "Learn what spaces are and how to use them",
      slug: "spaces",
    },
    {
      article: "Storage limits",
      description: "Read more about the storage limits of your account",
      slug: "storage-limits",
    },
    {
      article: "Encryption",
      description: "Learn what encryption is and how we encrypt your data",
      slug: "encryption",
    },
    {
      article: "Multi-factor authentication",
      description:
        "Learn how to enable multi-factor authentication for your account",
      slug: "multi-factor-authentication",
    },
    {
      article: "Invite-only access",
      description: "Learn what invite-only access is",
      slug: "invite-only-access",
    },
    {
      article: "Privacy policy",
      description:
        "Read our privacy policy to learn more about how we handle your data",
      slug: "privacy-policy",
    },
    {
      article: "Terms of service",
      description: "Read our terms of service",
      slug: "terms-of-service",
    },
  ];
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [search, setSearch] = useState("");

  return (
    <>
      <div
        className="relative flex items-center pt-[60px] h-[85vh] text-white justify-center flex-col"
        style={{ background: "#5D4444" }}
      >
        <h1 className="text-4xl font-[700]">Support</h1>
        <h1 className="text-xl mt-2 opacity-80 font-[400]">
          What can we help you with today?
        </h1>
        <div className="flex items-center gap-3">
          <input
            autoFocus
            className="mt-4 px-4 py-2 rounded-lg w-[400px] bg-[rgba(255,255,255,0.1)] focus:ring-2 ring-white ring-inset text-white placeholder-[rgba(255,255,255,.7)] focus:placeholder-[rgba(255,255,255,.4)]"
            placeholder="Search for help articles, videos, or contact us"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setFilteredArticles(
                articles.filter((article) =>
                  article.article.toLowerCase().includes(e.target.value)
                )
              );
            }}
          />
          {search && (
            <IconButton
              color="inherit"
              size="small"
              sx={{ mt: 2 }}
              onClick={() => {
                setSearch("");
                setFilteredArticles(articles);
              }}
            >
              <Icon>close</Icon>
            </IconButton>
          )}
        </div>
      </div>
      <div className="container mx-auto my-10 px-5">
        <Grid container spacing={2}>
          {filteredArticles.map((article) => (
            <ArticleCard {...article} />
          ))}
        </Grid>

        <div className="flex justify-center mt-16 text-gray-700">
          More articles coming soon!
        </div>
      </div>
    </>
  );
}
