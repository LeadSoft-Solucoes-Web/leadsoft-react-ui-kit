import styled from 'styled-components';
import { ColorType } from './types';
import { fadeIn } from '../Animations/animations';
import { ChromePicker } from 'react-color';

export const ContainerColorPicker = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    border: 2px solid rgb(180,180,180);
    border-radius: 8px;
    width: 100%;
    height: auto;
    position: relative; 
    padding: 5px;
    max-width: 300px;
`;

export const ContainerWrapper = styled.div`
    flex: 1;
`

export const ContainerTextPreview = styled.div`
    display: flex;
    flex: 4;
    align-items: center;
    justify-content: flex-start;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ColorPreview = styled.div<ColorType>`
    background-color: ${(props) => props.color};
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 20px;
`;

export const PickerWrapper = styled.div<ColorType>`
    position: absolute;
    z-index: 1050; 
    width: 100%;
    height: auto;
    top: 97%; 
    left: 0%; 
    animation: ${fadeIn} 0.3s ease-in-out;
    display: ${(props) => props.display ? props.display : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => props.backgroundPickerWrapper ? props.backgroundPickerWrapper : 'white'};
    border-radius: 15px;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 4px 8px;
    pointer-events: all !important;
    overflow: visible;
`;

export const SavedColorsWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const SavedColor = styled.div<ColorType>`
    background-color: ${(props) => props.color ? props.color : 'white'};
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 0 5px;
`;

export const SpanColor = styled.span<ColorType>`
    color: ${(props) => props.colorText ? props.colorText : 'rgb(140,140,140)'};
    font-size: 17px;
    font-weight: bold;
`;

export const ContainerArrow = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ChronomePickerStyled = styled(ChromePicker)`
    background-color: transparent !important;
    box-shadow: none !important;
    width: 100% !important;
    z-index: 1001 !important; 
    pointer-events: all !important;
`;

export const ContainerSaveCancelButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: row; 
    gap: 5px;
    width: 100%;
`

export const SaveButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: white;
    background-color: #4F46E5;
    font-weight: bold;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    z-index: 1001;
    pointer-events: all !important;
    flex: 1;

    :hover{
        background-color: white;
    }
`;

export const CancelButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: white;
    background-color: #E18E39;
    font-weight: bold;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    z-index: 1001;
    pointer-events: all !important;
    flex: 1;

    :hover{
        background-color: white;
    }
`;