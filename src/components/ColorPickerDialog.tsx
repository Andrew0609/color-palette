import { useState } from "react";
import { SketchPicker } from "react-color";
import { styled } from "../styles";
import BaseButton from "./BaseButton";

const BaseDialog = styled("div", {
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(217, 217, 217, 0.6);",
  zIndex: 1,
  variants: {
    open: {
      false: {
        display: "none",
      },
    },
  },
});

const DialogWindow = styled("div", {
  position: "absolute",
  display: "inline-block",
  flexDirection: "column",
  background: "#ffffff",
  borderRadius: "10px",
  top: "50%",
  left: "50%",
  fontSize: "13px",
  whiteSpace: "pre-wrap",
  transform: "translate(-50%,-50%)",
});

function ColorPickerDialog({ open, onColorSelect }: any) {
  const [color, setColor] = useState("#ffffff");

  const onChangeComplete = (color: any) => {
    setColor(color.hex);
  };

  const handleFocusOut = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onColorSelectComplete = () => {
    handleFocusOut();
    onColorSelect(color);
  };

  return (
    <BaseDialog open={open}>
      <DialogWindow>
        <SketchPicker color={color} onChangeComplete={onChangeComplete} />
        <BaseButton
          width={100}
          height={44}
          onClick={onColorSelectComplete}
          css={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            background: "#7F56D9",
            color: "#FFF",
          }}
        >
          Select
        </BaseButton>
      </DialogWindow>
    </BaseDialog>
  );
}

export default ColorPickerDialog;
