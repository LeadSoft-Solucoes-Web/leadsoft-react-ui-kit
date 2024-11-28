import styled from "styled-components";
import { ColorsType } from "./types";

export const Container = styled.div<ColorsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid ${(props) => (props.borderColor ? props.borderColor : 'blue')};
    color: ${(props) => (props.borderColor ? props.borderColor : 'blue')};
    border-radius: 40px;
    position: relative; 

    &::after {
        content: attr(data-tooltip); 
        position: absolute;
        bottom: -40px; 
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s, bottom 0.3s;
        z-index: 1010;
    }

    &:hover::after {
        opacity: 1;
    }

    @media (max-height: 60px) {
        &::after {
            bottom: auto;
            top: -40px; 
        }
    }
`;