import { Navbar } from "../components/navbar";
import "../styles/globals.scss";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material";

export default function App({ Component, PageProps }) {
  const userTheme = createTheme({
    components: {
      MuiPaper: {
        defaultProps: { elevation: 0 },
      },
      MuiIcon: {
        defaultProps: {
          // Replace the `material-icons` default value.
          baseClassName: "material-symbols-rounded",
        },
        variants: [
          {
            props: {
              className: "outlined",
            },
            style: {
              fontVariationSettings:
                '"FILL" 0, "wght" 350, "GRAD" 0, "opsz" 40!important',
            },
          },
        ],
      },
    },
  });
  return (
    <ThemeProvider theme={userTheme}>
      <Head>
        <title>Dysperse</title>
      </Head>
      <Navbar />
      <Component {...PageProps} />
    </ThemeProvider>
  );
}
