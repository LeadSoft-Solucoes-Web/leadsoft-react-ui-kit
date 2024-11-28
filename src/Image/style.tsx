import styled from 'styled-components';
import { PropertiesStyle } from './types';

export const UploadContainer = styled.div<PropertiesStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  width: 100%;
  height: ${(props)=>(props.height || 'auto')};
`;

export const StyledImage = styled.img`
  width: 177px;
  height: 53px;
  object-fit: cover; 
  border: 1px solid #ddd;
  border-radius: 5px;
  color: gray;
`;

export const UploadButton = styled.input`
  display: none;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
