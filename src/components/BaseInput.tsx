import { InputHTMLAttributes } from "react";

import { CSS, VariantProps } from "@stitches/react";

import { styled } from "../styles";

const BaseSimpleInput = styled("input", {
  background: "none",
  width: "100%",
  height: 40,
  borderRadius: 8,
  padding: "8px 10px",
  boxSizing: "border-box",
  border: "1px solid #E5E5E5",
  color: "#000",
  outline: "none",
  disabled: {
    true: {
      color: "#000",
    },
  },
});

export type InputProps = { css?: CSS } & {
  width?: string;
  height?: string;
} & VariantProps<typeof BaseInput> &
  InputHTMLAttributes<HTMLInputElement>;

function BaseInput({ css, width, height, ...props }: InputProps) {
  return (
    <BaseSimpleInput
      css={{
        width,
        height,
        ...css,
      }}
      {...props}
    />
  );
}
export default BaseInput;
