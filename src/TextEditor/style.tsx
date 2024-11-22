import styled from "styled-components";
import { TextEditorTypes } from "./types";

// Styled Components
export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  width: 500px;
`;

export const Toolbar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Button = styled.button<TextEditorTypes>`
    width: 30px;
    height: 100%;
    background-color: ${({ active }) => (active ? "#ddd" : "#fff")};
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
`;

export const ColorButton = styled(Button)`
    background-color: ${({ color }) => color};
    border: none;
    margin-inline: 3px;
    &:hover {
        background-color: ${({ color }) => color};
        opacity: 0.8;
    }
`;

export const TextArea = styled.textarea<TextEditorTypes>`
  width: 100%;
  height: 100px;
  border: none;
  outline: none;
  font-family: ${({ font }) => font || "Inter"}, sans-serif;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#000"};
  resize: none;
`;
