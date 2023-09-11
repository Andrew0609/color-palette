import { useMemo, useState } from "react";

import tinycolor, { mix } from "tinycolor2";

import BaseButton from "../components/BaseButton";
import IconButton from "../components/IconButton";
import { BottomSheet, Container, Content, Header } from "../styles/container";
import ArrowLeftIcon from "../assets/arrow-left.svg";
import { styled } from "../styles";
import ColorPickerDialog from "../components/ColorPickerDialog";
import {
  getLocalStorageItem,
  preDefinedColors,
  setLocalStorageItem,
} from "../storage/localStorage";

const ColorMixWrap = styled("div", {
  width: "90%",
  height: "88px",
  display: "flex",
  alignItems: "center",
  color: "#000",
  justifyContent: "space-around",
});

const ColorCircle = styled("div", {
  width: "44px",
  height: "44px",
  borderRadius: "22px",
  background: "grey",
});

function mixColors(color1: any, color2: any): string {
  const c1 = tinycolor(color1) as any;
  const c2 = tinycolor(color2) as any;

  const r = Math.floor((c1._r + c2._r) / 2);
  const g = Math.floor((c1._g + c2._g) / 2);
  const b = Math.floor((c1._b + c2._b) / 2);

  return tinycolor({ r, g, b }).toHexString();
}

function ColorMixPage() {
  const [selectedColror1, setColor1] = useState<null | string>(null);
  const [selectedColror2, setColor2] = useState<null | string>(null);
  const mixedColor = useMemo(() => {
    if (selectedColror1 && selectedColror2) {
      return mixColors(selectedColror1, selectedColror2);
    }
  }, [selectedColror1, selectedColror2]);
  const [colorPickerPopUp1, setPopup1] = useState(false);
  const [colorPickerPopUp2, setPopup2] = useState(false);

  const handleCircleClick = (num: number) => {
    if (num === 1) {
      setPopup1(true);
    } else if (num === 2) {
      setPopup2(true);
    }
  };

  const handleColorSelected = (num: number, color: string) => {
    if (num === 1) {
      setColor1(color);
      setPopup1(false);
    } else if (num === 2) {
      setColor2(color);
      setPopup2(false);
    }
  };

  const handleSaveColor = () => {
    const favoritesColors = (() => {
      const color = getLocalStorageItem("favorites");
      return typeof color === "string" ? JSON.parse(color) : {};
    })();
    if (!mixedColor) return;

    if (favoritesColors[mixedColor]) {
      favoritesColors[mixedColor].count += 1;
      setLocalStorageItem("favorites", JSON.stringify(favoritesColors));
    } else {
      const updatedColorMap = {
        ...favoritesColors,
        [mixedColor]: {
          firstColor: selectedColror1,
          firstColorName:
            preDefinedColors[selectedColror1?.toUpperCase() as string] ??
            selectedColror1,
          secondColor: selectedColror2,
          secondColorName:
            preDefinedColors[selectedColror2?.toUpperCase() as string] ??
            selectedColror2,
          mixedColor,
          count: 1,
        },
      };
      setLocalStorageItem("favorites", JSON.stringify(updatedColorMap));
    }
    window.location.href = "/main";
  };

  const handleBackClick = () => {
    window.location.href = "/main";
  };

  return (
    <Container
      css={{
        justifyContent: "inherit",
      }}
    >
      <ColorPickerDialog
        open={colorPickerPopUp1}
        onColorSelect={(color: any) => handleColorSelected(1, color)}
      />
      <ColorPickerDialog
        open={colorPickerPopUp2}
        onColorSelect={(color: any) => handleColorSelected(2, color)}
      />
      <Header>
        <IconButton
          icon={ArrowLeftIcon}
          css={{
            width: "44px",
            height: "44px",
            background: "none",
            justifyContent: "start",
          }}
          iconWidth="32px"
          iconHeight="32px"
          onClick={handleBackClick}
        />{" "}
        Color Mix
      </Header>
      <Content
        css={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ColorMixWrap>
          <ColorCircle
            onClick={() => handleCircleClick(1)}
            css={{
              background: `${selectedColror1 ? selectedColror1 : "grey"}`,
            }}
          />
          {"+"}
          <ColorCircle
            onClick={() => handleCircleClick(2)}
            css={{
              background: `${selectedColror2 ? selectedColror2 : "grey"}`,
            }}
          />
          {"="}
          <ColorCircle
            css={{
              background: `${mixedColor ? mixedColor : "grey"}`,
            }}
          />
        </ColorMixWrap>
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
            disabled={selectedColror1 === null || selectedColror2 === null}
            onClick={handleSaveColor}
          >
            Save My Color
          </BaseButton>
        </BottomSheet>
      </Content>
    </Container>
  );
}

export default ColorMixPage;
