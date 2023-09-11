import { useState } from "react";

import BaseButton from "../components/BaseButton";
import BaseChip from "../components/BaseChip";
import IconButton from "../components/IconButton";
import { styled } from "../styles";
import { BottomSheet, Container, Content, Header } from "../styles/container";
import StarIcon from "../assets/star.svg";

type ColorViewMode = "color" | "name";

const ColorBlock = styled("div", {
  width: "100%",
  height: "40px",
  margin: "16px 0",
});

const BaseNamedColorBlock = styled("div", {
  width: "100%",
  height: "40px",
  margin: "16px 0",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const ColorName = styled("div", {
  fontSize: "14px",
  fontWeight: "600",
});

const GradientColorBlock = styled("div", {
  width: "270px",
  height: "100%",
});

const NamedColorBlock = ({ colorName }: any) => {
  return (
    <BaseNamedColorBlock>
      <ColorName
        css={{ color: colorName }}
      >{`${colorName[0].toUpperCase()}${colorName.slice(1)}`}</ColorName>
      <GradientColorBlock
        css={{
          background: `linear-gradient(270deg, ${colorName} 0%, rgba(255, 255, 255, 0.00) 100%)`,
        }}
      />
    </BaseNamedColorBlock>
  );
};

const ColorViewTypeSelect = styled("div", {
  width: "100%",
  height: "90px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const ColorBlocks = styled("div", {
  paddingBottom: "80px",
});

const basicColors = [
  "red",
  "blue",
  "black",
  "yellow",
  "cyan",
  "pink",
  "gray",
  "silver",
  "navy",
  "maroon",
  "olive",
  "teal",
  "lime",
  "fuchsia",
  "purple",
  "aqua",
  "orange",
];

function ColorMainPage() {
  const [colorMode, setColorMode] = useState<ColorViewMode>("color");

  const handleMixMyColorClick = () => {
    window.location.href = "/main/mix";
  };

  const handleColorModeChange = (colorMode: ColorViewMode) => {
    setColorMode(colorMode);
  };

  const handleColorBlockClick = (color: any) => {
    window.location.href = `/main/color?color=${color}`;
  };

  const handleFavoriteClick = () => {
    window.location.href = `/main/favorite`;
  };

  return (
    <Container
      css={{
        justifyContent: "inherit",
      }}
    >
      <Header>
        Color Pallete
        <IconButton
          css={{ background: "none", position: "absolute", right: 0 }}
          icon={StarIcon}
          iconHeight="18px"
          onClick={handleFavoriteClick}
        />
      </Header>
      <Content>
        <ColorViewTypeSelect>
          <BaseChip
            height={24}
            onClick={() => handleColorModeChange("color")}
            css={{ background: "#F9F5FF", color: "#6941C6" }}
          >
            Color
          </BaseChip>
          <BaseChip
            height={24}
            onClick={() => handleColorModeChange("name")}
            css={{ background: "#F9F5FF", color: "#6941C6" }}
          >
            Name
          </BaseChip>
        </ColorViewTypeSelect>
        <ColorBlocks>
          {colorMode === "color"
            ? basicColors.map((value, index) => {
                return (
                  <ColorBlock
                    key={value}
                    onClick={() => handleColorBlockClick(value)}
                    css={{ background: `${value}` }}
                  />
                );
              })
            : basicColors.map((value, index) => {
                return (
                  <NamedColorBlock
                    key={value}
                    onClick={() => handleColorBlockClick(value)}
                    colorName={value}
                  />
                );
              })}
        </ColorBlocks>
        <BottomSheet>
          <BaseButton
            css={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              background: "#7F56D9",
              color: "#FFF",
            }}
            width={100}
            height={44}
            onClick={handleMixMyColorClick}
          >
            Mix My Color
          </BaseButton>
        </BottomSheet>
      </Content>
    </Container>
  );
}

export default ColorMainPage;
