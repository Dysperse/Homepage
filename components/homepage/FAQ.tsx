import { Box, Collapse, Grid, Icon, Typography } from "@mui/material";
import { useState } from "react";

export function FAQ(): JSX.Element {
  const questions = [
    {
      question: "What is Carbon?",
      answer:
        "Carbon is a personal productivity platform that helps you organize your life and get things done.",
    },
    {
      question: "Is Carbon free?",
      answer: "Yes, Carbon is free to use.",
    },
    {
      question: "Can I use Carbon for my dorm or apartment?",
      answer:
        "Yes, Carbon is perfect for dorms and apartments. Carbon has specific features for dorms and apartments.",
    },
    {
      question: "Can I use Carbon for just myself, without a group?",
      answer:
        "Yes, Carbon lets you customize your experience to fit your needs.",
    },
    {
      question: "Does Cabon take my credit card information?",
      answer:
        "No, Carbon does not take your credit card information. Carbon is free to use.",
    },
  ];

  const section = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        <button onClick={() => setOpen(!open)} className="question-button">
          <span className="question">{question}</span>
          <Icon className="ml-auto">
            {open ? "expand_less" : "expand_more"}
          </Icon>
        </button>
        <Collapse in={open}>
          <h4 className="p-2 bg-gray-100 my-2 rounded-xl px-3">{answer}</h4>
        </Collapse>
      </Box>
    );
  };
  return (
    <Box className="my-18 relative text-gray-900" sx={{ p: 10 }}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" className="font-[700]">
            Frequently asked questions
          </Typography>
          <Typography className="text-gray-500 mt-2 mb-5 underline">
            Visit our support center &rarr;
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {questions.map((e) => section(e))}
        </Grid>
      </Grid>
    </Box>
  );
}
