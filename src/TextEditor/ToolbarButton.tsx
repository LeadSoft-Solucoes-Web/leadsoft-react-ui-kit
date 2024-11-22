import React from "react";
import { Button } from "./style";

export interface ToolbarButtonProps{
    label: string,
    onClick: () => void;
    active: boolean;
    style: object;
}   

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ label, onClick, active, style }) => (
    <Button onClick={onClick} active={active} style={style}>
        {label}
    </Button>
);

export default ToolbarButton;
