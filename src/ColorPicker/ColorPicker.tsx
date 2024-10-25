import React, { useState, useRef, useEffect } from 'react';
import { ColorResult } from 'react-color';
import {
  ChronomePickerStyled,
  SaveButton,
  ColorPreview,
  ContainerArrow,
  ContainerColorPicker,
  ContainerTextPreview,
  ContainerWrapper,
  PickerWrapper,
  SavedColor,
  SavedColorsWrapper,
  SpanColor,
  Wrapper,
  CancelButton,
  ContainerSaveCancelButtons
} from './style';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface ColorPickerProps {
  onChange?: (color: string) => void;
  savedColors?: string[];
  textSave?: string;
  textCancel?: string;
  initColor?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ savedColors = [], onChange, textSave, textCancel, initColor }) => {
  const [color, setColor] = useState<string>(initColor ? initColor : '#4F46E5');
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const cancelColor = initColor ? initColor : '#4F46E5';
  const pickerRef = useRef<HTMLDivElement | null>(null);

  const handleColorChange = (colorResult: ColorResult) => {
    let returncolor: string;
    if (colorResult.rgb.a && colorResult.rgb.a < 1) {
      returncolor = `rgba(${colorResult.rgb.r}, ${colorResult.rgb.g}, ${colorResult.rgb.b}, ${colorResult.rgb.a})`;
    } else {
      returncolor = colorResult.hex;
    }
    setColor(returncolor);
    if (onChange) onChange(returncolor);
  };

  const onCancelClicked = () => {
    setColor(cancelColor);
    setShowPicker(false);
  };

  useEffect(() => {
    if (showPicker && pickerRef.current) {
      const picker = pickerRef.current.getBoundingClientRect();
      if (picker.bottom > window.innerHeight) {
        pickerRef.current.style.top = `-${picker.height}px`; 
      }
    }
  }, [showPicker]);

  return (
    <ContainerColorPicker id='button-color-picker' onClick={() => { setShowPicker(true) }}>
      <ContainerWrapper>
        <Wrapper>
          <ColorPreview color={color} />
          <PickerWrapper ref={pickerRef} display={showPicker ? 'flex' : 'none'}>
            <ChronomePickerStyled disableAlpha={false} color={color} onChange={handleColorChange} />

            <SavedColorsWrapper>
              {savedColors.map((savedColor, index) => (
                <SavedColor key={index} color={savedColor} onClick={() => setColor(savedColor)} />
              ))}
            </SavedColorsWrapper>
            <ContainerSaveCancelButtons>
              <CancelButton
                type={'button'}
                id='button-cancel'
                onClick={(e) => {
                  e.stopPropagation();
                  onCancelClicked();
                }}
              >
                {textCancel ? textCancel : 'Cancelar'}
              </CancelButton>
              <SaveButton
                type={'button'}
                id='button-save'
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPicker(false);
                }}
              >
                {textSave ? textSave : 'Salvar'}
              </SaveButton>
            </ContainerSaveCancelButtons>
          </PickerWrapper>
        </Wrapper>
      </ContainerWrapper>
      <ContainerTextPreview>
        <SpanColor>{color}</SpanColor>
      </ContainerTextPreview>
      <ContainerArrow>
        {showPicker ? (
          <IoIosArrowDown color='rgb(180, 180, 180)' size={25} />
        ) : (
          <IoIosArrowForward color='rgb(180, 180, 180)' size={25} />
        )}
      </ContainerArrow>
    </ContainerColorPicker>
  );
};

export default ColorPicker;
