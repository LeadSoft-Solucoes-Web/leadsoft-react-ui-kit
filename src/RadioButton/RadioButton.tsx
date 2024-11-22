import React from "react";
import { Container, Label, Input } from "./style";

interface RadioButtonProps {
    checked: boolean;
    onClick: () => void;
    label: string;
    colorChecked?: string;  
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
    return (
        <Container>
            <Label htmlFor="option">
                <Input
                    type="radio"
                    id="option"
                    name="option"
                    value="option"
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
