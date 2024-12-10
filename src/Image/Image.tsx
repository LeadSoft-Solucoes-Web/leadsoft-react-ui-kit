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

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onFileSelect,
  label,
  initImage,
  children,
  height,
  noLimit,
  messageLimitError,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null | undefined>(
    initImage instanceof File ? URL.createObjectURL(initImage) : initImage
  );
  const [error, setError] = useState<string | null>(null);

  const MAX_WIDTH = 177;
  const MAX_HEIGHT = 53;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      const width = img.width;
      const height = img.height;

      if (!noLimit && (width > MAX_WIDTH || height > MAX_HEIGHT)) {
        setError(
          messageLimitError
            ? messageLimitError
            : `Não é possível carregar uma imagem maior que ${MAX_WIDTH} x ${MAX_HEIGHT}.`
        );
        setTimeout(() => setError(null), 6000);
        URL.revokeObjectURL(objectUrl);
        return;
      }

      setImageSrc(objectUrl);
      onFileSelect(file);
      setError(null);
    };

    img.onerror = () => {
      setError('Erro ao carregar a imagem. Verifique o arquivo e tente novamente.');
      setTimeout(() => setError(null), 6000);
      URL.revokeObjectURL(objectUrl);
    };
    
    img.src = objectUrl;
  };

  return (
    <UploadContainer height={height} onClick={() => document.getElementById('imageInput')?.click()}>
      {imageSrc ? (
        <StyledImage src={imageSrc} alt="Uploaded" />
      ) : children ? (
        children
      ) : (
        <p>{label ? label : 'Escolha uma imagem para fazer upload'}</p>
      )}
      <UploadButton type="file" id="imageInput" accept="image/*" onChange={handleImageChange} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </UploadContainer>
  );
};

export default ImageUploader;
