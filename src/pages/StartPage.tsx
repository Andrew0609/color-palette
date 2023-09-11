import BaseButton from "../components/BaseButton";
import { styled } from "../styles";
import { Container } from "../styles/container";
import ColorAnimationCircle from "../components/ColorAnimationCircle";

const Center = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "center",
});

function StartPage() {
  const handleStartClick = () => {
    window.location.href = "/main";
  };

  return (
    <Container>
      <Center>
        <ColorAnimationCircle />
        <BaseButton
          width={261}
          height={44}
          css={{
            background: "#7F56D9",
            color: "#fff",
            justifyContent: "center",
            margin: "100px 0",
          }}
          onClick={handleStartClick}
        >
          Select Your Color
        </BaseButton>
      </Center>
    </Container>
  );
}

export default StartPage;
