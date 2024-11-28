import styled from "styled-components";
import { ColorsType } from "./types";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    position: relative; 
    font-size: 16px;
    color: #333;
`;

export const Input = styled.input<ColorsType>`
    position: absolute;
    opacity: 0;
    cursor: pointer;

    & + span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border: 2px solid #999;
        border-radius: 50%;
        margin-right: 8px;
        transition: all 0.3s ease;
        position: relative;
    }

    &:checked + span {
        border-color: ${(props) => (props.checkedColor ? props.checkedColor : '#4caf50')} ;
        background-color:  ${(props) => (props.checkedColor ? props.checkedColor : '#4caf50')};
    }

    &:checked + span::after {
        content: "✔"; 
        position: absolute;
        font-size: 12px;
        color: white;
        transform: scale(1);
        opacity: 1;
        transition: all 0.3s ease;
    }

    & + span::after {
        content: "";
        transform: scale(0);
        opacity: 0;
    }
`;
