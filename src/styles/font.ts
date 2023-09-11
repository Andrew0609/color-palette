import InterLight from "../assets/fonts/Inter-Light.woff2";
import InterRegular from "../assets/fonts/Inter-Regular.woff2";
import InterMedium from "../assets/fonts/Inter-Medium.woff2";
import InterSemiBold from "../assets/fonts/Inter-SemiBold.woff2";

import { globalCss } from ".";

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Inter",
      fontWeight: 300,
      src: `url(${InterLight})`,
    },
    {
      fontFamily: "Inter",
      fontWeight: 400,
      src: `url(${InterRegular})`,
    },
    {
      fontFamily: "Inter",
      fontWeight: 500,
      src: `url(${InterMedium})`,
    },
    {
      fontFamily: "Inter",
      fontWeight: 600,
      src: `url(${InterSemiBold})`,
    },
  ],
  "*": {
    fontFamily: "Inter",
    fontWeight: 300,
  },
});
