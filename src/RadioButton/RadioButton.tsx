import React from "react";
import { Container, Label, Input } from "./style";

interface RadioButtonProps {
    checked: boolean;
    onClick: () => void;
    label: string;
    colorChecked?: string;  
    name: string;
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
    return (
        <Container>
            <Label htmlFor={props.name}>
                <Input
                    type="radio"
                    id={props.name}
                    name={props.name}
                    value={props.name}
                    checked={props.checked}
                    onClick={props.onClick}
                    checkedColor={props.colorChecked}
                />
                <span />
                {props.label} 
            </Label>
        </Container>
    );
};

export default RadioButton;
