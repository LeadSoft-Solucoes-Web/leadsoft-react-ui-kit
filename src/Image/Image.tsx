import React, { useEffect, useState } from 'react';
import { StyledImage, UploadButton, UploadContainer, ErrorMessage } from './style';

interface ImageUploaderProps {
  onFileSelect: (file: File) => void;
  label?: string;
  initImage?: File | string;
  children?: JSX.Element;
  height?: string;
  limitMp?: string;
  noLimit?: boolean;
  messageLimitError?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileSelect, label, initImage, children, height, noLimit, messageLimitError }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const MAX_WIDTH = 450;
  const MAX_HEIGHT = 225;

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
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);
      if (!noLimit) {
        img.onload = () => {
          const width = img.width;
          const height = img.width;

          if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            setError(messageLimitError ? messageLimitError : `Não é possivel carregar uma image maior que ${MAX_WIDTH} pixels de largura e ${MAX_HEIGHT} pixels de altura `);
            setTimeout(() => {
              setError(null);
            }, 6000);
            return;
          }
        }
      }

      setImageSrc(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  return (
    <UploadContainer height={height} onClick={() => document.getElementById('imageInput')?.click()}>
      {imageSrc ? (
        <StyledImage src={imageSrc} alt="Uploaded" />
      ) : (
        children ? (
          children
        ) : (
          <p>{label ? label : 'Escolha uma imagem para fazer upload'}</p>
        )
      )}
      <UploadButton type="file" id="imageInput" accept="image/*" onChange={handleImageChange} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </UploadContainer>
  );
};

export default ImageUploader;
