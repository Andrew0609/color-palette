import React, { useEffect, useState } from "react";

import { styled, keyframes } from "@stitches/react";

const ColorAnimation = styled("div", {
  width: "260px",
  height: "260px",
  borderRadius: "130px",
  transition: "background-color 0.5s ease-in-out",
});

const colorChangeAnimations = [
  keyframes({
    "0%": { backgroundColor: "red" },
    "100%": { backgroundColor: "blue" },
  }),
  keyframes({
    "0%": { backgroundColor: "orange" },
    "100%": { backgroundColor: "purple" },
  }),
  keyframes({
    "0%": { backgroundColor: "green" },
    "100%": { backgroundColor: "yellow" },
  }),
  keyframes({
    "0%": { backgroundColor: "pink" },
    "100%": { backgroundColor: "teal" },
  }),
  keyframes({
    "0%": { backgroundColor: "lightblue" },
    "100%": { backgroundColor: "violet" },
  }),
  keyframes({
    "0%": { backgroundColor: "gold" },
    "100%": { backgroundColor: "indigo" },
  }),
  keyframes({
    "0%": { backgroundColor: "lime" },
    "100%": { backgroundColor: "cyan" },
  }),
  keyframes({
    "0%": { backgroundColor: "salmon" },
    "100%": { backgroundColor: "magenta" },
  }),
  keyframes({
    "0%": { backgroundColor: "darkorange" },
    "100%": { backgroundColor: "lightgreen" },
  }),
  keyframes({
    "0%": { backgroundColor: "deepskyblue" },
    "100%": { backgroundColor: "tomato" },
  }),
];

const getRandomAnimation = () =>
  colorChangeAnimations[
    Math.floor(Math.random()) % colorChangeAnimations.length
  ];

function ColorAnimationCircle() {
  const [animation, setAnimation] = useState(getRandomAnimation());

  useEffect(() => {
    const handleAnimationEnd = () => {
      const newAnimation = getRandomAnimation();
      console.log(newAnimation);
      setAnimation(newAnimation);
    };

    setInterval(handleAnimationEnd, 1000);
  });

  return <ColorAnimation css={{ animation: `${animation} 3s infinite` }} />;
}

export default ColorAnimationCircle;
