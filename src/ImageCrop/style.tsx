import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CropWrapper = styled.div`
  padding: 0px !important;
  margin: 0px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const PreviewImg = styled.img`
  max-width: 100%;
  height: auto;
  z-index: 0;
`;

export const DropArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  border: 2px dashed #aaa;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
  z-index: 0;
  padding: 2px;
  position: relative;
  flex-direction: column;

  &:hover {
    background-color: #f1f1f1;
  }

  p {
    color: #555;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const ButtonConfirm = styled.button`
  position: absolute;
  top: -5px;
  right: -10px;
  width: 40px;
  height: 40px;
  z-index: 999;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const ContainerButtonConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  padding: 2px;
`;