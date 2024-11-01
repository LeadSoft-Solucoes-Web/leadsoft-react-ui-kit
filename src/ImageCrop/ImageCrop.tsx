import React, { useEffect, useState } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Container, PreviewImg, CropWrapper, DropArea, ErrorMessage, ButtonConfirm, ContainerButtonConfirm } from './style';
import getCroppedImg from '../utils/getCroppedImg';
import { FaScissors } from "react-icons/fa6";

interface ImageCropProps {
  startImage?: string | null;
  onChangeCrop?: (imagePreview: File) => void;
  insertImageDescription?: string;
}

const ImageCrop: React.FC<ImageCropProps> = (props) => {
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    x: 0,
    y: 0,
    width: 100,
    height: 100
  });
  const [completeCrop, setCompleteCrop] = useState<Crop>()
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState<string>("Arraste e solte uma imagem ou clique para selecionar");

  const MAX_WIDTH = 1200;
  const MAX_HEIGHT = 600;

  const handleImageChange = (file: File | string) => {
    if (typeof file === 'string') {
      setImagePreview(file);
    } else {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget as HTMLImageElement;
    setImageRef(img);

    if (img.naturalWidth > MAX_WIDTH || img.naturalHeight > MAX_HEIGHT) {
      setError(`A imagem deve ter no mínimo ${MAX_WIDTH}x${MAX_HEIGHT} pixels. Sua imagem tem ${img.naturalWidth}x${img.naturalHeight} pixels.`);
      setTimeout(() => {
        setError(null);
      }, 6000);
      setImagePreview(null);
    } else {
      setError(null);
    }
  };

  const onCompleteCrop = async (crop: Crop) => {
    if (imagePreview) {
        const imageCroped = await getCroppedImg(imagePreview, crop);

        if (props.onChangeCrop) {
            props.onChangeCrop(imageCroped.file);
        }
    }
}

  useEffect(() => {
    if (props.startImage) {
      setImagePreview(props.startImage)
    }

    if (props.insertImageDescription) {
      setImageDescription(props.insertImageDescription)
    }
  }, [])

  return (
    <Container>
      <DropArea
        onClick={() => document.getElementById('fileInput')?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        id='drop-area'
      >
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          style={{ display: 'none' }}
        />
        {imagePreview ? (
          <CropWrapper onClick={(e) => e.stopPropagation()}>
            <ReactCrop
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={(crop) => {
                setCompleteCrop(crop);
                onCompleteCrop(crop);
              }}
              style={{ maxWidth: '100%', zIndex: 2 }}
            >
              <PreviewImg
                src={imagePreview}
                alt="Preview"
                id='preview-image'
                onLoad={onImageLoad}
              />
            </ReactCrop>
          </CropWrapper>
        ) : (
          <p>{imageDescription}</p>
        )}

      </DropArea>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ImageCrop;
