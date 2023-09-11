import { useLocation } from "react-router";
import tinycolor from "tinycolor2";

import IconButton from "../components/IconButton";
import { Container, Content, Header } from "../styles/container";
import ArrowLeftIcon from "../assets/arrow-left.svg";
import { styled } from "../styles";
import BaseInput from "../components/BaseInput";

const ColorPreview = styled("div", {
  width: "320px",
  height: "240px",
});

const Title = styled("div", {
  height: "44px",
  fontSize: "14px",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  color: "#6941C6",
});

function ColorInfoPage() {
  const location = useLocation();
  const backgroundColor = location.search.split("=")[1];
  const color = tinycolor(backgroundColor);

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
        Color Info
      </Header>
      <Content>
        <ColorPreview
          css={{ background: backgroundColor, marginTop: "32px" }}
        />
        <Title>Hex</Title>
        <BaseInput
          width="320px"
          height="44px"
          disabled={true}
          value={color.toHexString()}
        />
        <Title>RGB</Title>
        <BaseInput
          width="320px"
          height="44px"
          disabled={true}
          value={color.toRgb().r}
        />
        <BaseInput
          width="320px"
          height="44px"
          disabled={true}
          css={{ marginTop: "8px" }}
          value={color.toRgb().g}
        />
        <BaseInput
          width="320px"
          height="44px"
          disabled={true}
          css={{ marginTop: "8px" }}
          value={color.toRgb().b}
        />
        <Title>HSL</Title>
        <BaseInput
          width="320px"
          height="44px"
          disabled={true}
          value={color.toHslString()}
        />
      </Content>
    </Container>
  );
}

export default ColorInfoPage;
