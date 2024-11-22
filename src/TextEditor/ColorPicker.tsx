import React from "react";
import { ColorButton } from "./style";

export interface ColorPickerProps{
    colors: string[],
    onSelectColor: (color: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, onSelectColor }) => (
    <div style={{gap: '5px'}}>
        {colors.map((color) => (
            <ColorButton
                key={color}
                color={color}
                onClick={() => onSelectColor(color)}
            />
        ))}
    </div>
);

export default ColorPicker;