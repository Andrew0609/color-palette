import { createStitches } from "@stitches/react";

export const { styled, theme, globalCss, css } = createStitches({
  media: {
    "not-mobile": "not (max-width: 743px)",
    mobile: "(max-width: 743px)",
    tablet: "(min-width: 744px)",
    phablet: "(max-width: 1279px)",
    labtop: "(min-width: 1280px)",
    desktop: "(min-width: 1440px)",
  },
});
