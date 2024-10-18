import styled from 'styled-components';


export const Container = styled.div`
    
`


export const Wrapper = styled.div`
  position: relative;
`;

export const ColorPreview = styled.div<{ color: string }>`
  cursor: pointer;
  background-color: ${(props) => props.color};
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const PickerWrapper = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 10px;
`;

export const OpacityWrapper = styled.div`
  margin-top: 10px;
  
  label {
    margin-right: 10px;
  }
  
  input {
    width: 100%;
  }
`;

export const SavedColorsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const SavedColor = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 0 5px;
  cursor: pointer;
`;

export const AddColorButton = styled.button`
  margin-left: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px;
`;
