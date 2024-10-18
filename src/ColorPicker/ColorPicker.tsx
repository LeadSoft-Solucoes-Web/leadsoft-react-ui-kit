import React, { useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import { AddColorButton, ColorPreview, OpacityWrapper, PickerWrapper, SavedColor, SavedColorsWrapper, Wrapper } from './style';

interface ColorPickerProps {
  savedColors?: string[];
  onChange?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ savedColors = [], onChange }) => {
  const [color, setColor] = useState<string>('#4F46E5'); 
  const [opacity, setOpacity] = useState<number>(100); 
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const handleColorChange = (colorResult: ColorResult) => {
    const rgbaColor = `rgba(${colorResult.rgb.r}, ${colorResult.rgb.g}, ${colorResult.rgb.b}, ${opacity / 100})`;
    setColor(colorResult.hex);
    if (onChange) onChange(rgbaColor);
  };

  const handleOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpacity(parseInt(e.target.value, 10));
  };

  return (
    <Wrapper>
      
      <ColorPreview
        onClick={() => setShowPicker(!showPicker)}
        color={color}
      />

      {showPicker && (
        <PickerWrapper>
          <ChromePicker color={color} onChange={handleColorChange} />

          <OpacityWrapper>
            <label htmlFor="opacity-range">Opacidade: {opacity}%</label>
            <input
              type="range"
              id="opacity-range"
              min="0"
              max="100"
              value={opacity}
              onChange={handleOpacityChange}
            />
          </OpacityWrapper>

          <SavedColorsWrapper>
            {savedColors.map((savedColor, index) => (
              <SavedColor
                key={index}
                color={savedColor}
                onClick={() => setColor(savedColor)}
              />
            ))}
            <AddColorButton>+ Add</AddColorButton>
          </SavedColorsWrapper>
        </PickerWrapper>
      )}
    </Wrapper>
  );
};

export default ColorPicker;