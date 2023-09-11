import { useEffect, useState } from "react";

import IconButton from "../components/IconButton";
import { styled } from "../styles";
import { Container, Content, Header } from "../styles/container";
import ArrowLeftIcon from "../assets/arrow-left.svg";
import {
  FavoriteColorCount,
  getLocalStorageItem,
} from "../storage/localStorage";

const ColumnHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
});

const Title = styled("div", {
  height: "44px",
  fontSize: "14px",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  color: "#6941C6",
});

const ColorCircle = styled("div", {
  width: "44px",
  height: "44px",
  borderRadius: "22px",
  background: "grey",
});

const ColorTitle = styled("span", {
  fontSize: "20px",
  fontWeight: "600",
  color: "#000",
});

const ColorCombniationItem = styled("div", {
  width: "100%",
  height: "66px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

function FavoritesPage() {
  const [items, setItems] = useState<FavoriteColorCount[]>([]);

  useEffect(() => {
    const favoritesColors = (() => {
      const color = getLocalStorageItem("favorites");
      return typeof color === "string" ? JSON.parse(color) : {};
    })();
    const colorList: FavoriteColorCount[] = Object.values(favoritesColors);
    colorList.sort(
      (a: FavoriteColorCount, b: FavoriteColorCount) => b.count - a.count,
    );
    setItems(colorList);
  }, []);

  const handleBackClick = () => {
    window.location.href = "/main";
  };

  return (
    <Container
      css={{
        justifyContent: "inherit",
      }}
    >
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
        Favorite Colors
      </Header>
      <Content>
        <ColumnHeader>
          <Title css={{ flex: 1 }}>Color</Title>
          <Title css={{ flex: 2 }}>Detail</Title>
          <Title css={{ flex: 1 }}>Count</Title>
        </ColumnHeader>
        {items.map((item, index) => (
          <ColorCombniationItem key={index}>
            <ColorCircle css={{ background: `${item.mixedColor}` }} />
            <ColorTitle css={{ flex: 2 }}>
              {item.firstColorName} + {item.secondColorName}
            </ColorTitle>
            <ColorTitle css={{ flex: 1 }}>{item.count}</ColorTitle>
          </ColorCombniationItem>
        ))}
      </Content>
    </Container>
  );
}

export default FavoritesPage;
