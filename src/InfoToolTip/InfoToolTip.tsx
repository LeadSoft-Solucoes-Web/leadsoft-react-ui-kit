import React from "react";
import { Container } from "./style";

interface InfoToolTipProps{
    text: string;
    icon?: React.ReactElement;
    borderColor?: string;
}

const InfoToolTip: React.FC<InfoToolTipProps> = (props) => {
    return(
        <Container borderColor={props.borderColor} data-tooltip={props.text}>
            {props.icon ? props.icon : '?'}
        </Container>
    )
}

export default InfoToolTip;