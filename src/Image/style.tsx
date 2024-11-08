import styled from 'styled-components';

export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
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
