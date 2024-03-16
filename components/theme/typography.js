import { Roboto } from "next/font/google";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const typography = {
  fontFamily: roboto.style.fontFamily,

  h1: {
    fontSize: "3rem",
    fontWeight: "700",
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: "700",
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: "700",
  },
};
