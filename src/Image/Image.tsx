import React, { useEffect, useState } from 'react';
import { StyledImage, UploadButton, UploadContainer } from './style';

interface ImageUploaderProps {
  onFileSelect: (file: File) => void;
  label?: string;
  initImage?: File | string; // Propriedade para receber uma imagem inicial, seja File ou string (URL)
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileSelect, label, initImage }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  
  useEffect(() => {
    if (initImage instanceof File) {
      setImageSrc(URL.createObjectURL(initImage));
    } else if (typeof initImage === 'string') {
      setImageSrc(initImage);
    }
  }, [initImage]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file)); 
      onFileSelect(file);
    }
  };

  return (
    <UploadContainer onClick={() => document.getElementById('imageInput')?.click()}>
      {imageSrc ? (
        <StyledImage src={imageSrc} alt="Uploaded" />
      ) : (
        <p>{label ? label : 'Escolha uma imagem para fazer upload'}</p>
      )}
      <UploadButton type="file" id="imageInput" accept="image/*" onChange={handleImageChange} />
    </UploadContainer>
  );
};

export default ImageUploader;
