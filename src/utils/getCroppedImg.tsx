import { Crop } from "react-image-crop";

interface ReturnObject { 
    file: File,
    url: string,
}

const getCroppedImg = (imageSrc: string, crop: Crop): Promise<ReturnObject> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.crossOrigin = "anonymous"; // Definindo o atributo crossOrigin

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;

            canvas.width = crop.width;
            canvas.height = crop.height;

            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Failed to get canvas context'));
                return;
            }

            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height
            );

            // Usar toBlob para gerar o File
            canvas.toBlob((blob) => {
                if (blob) {
                    const file = new File([blob], "cropped-image.jpg", { type: "image/jpeg" });
                    const croppedImageUrl = URL.createObjectURL(blob);
                    resolve({
                        file: file,
                        url: croppedImageUrl
                    });
                } else {
                    reject(new Error("Failed to create blob from canvas"));
                }
            }, 'image/jpeg');
        };

        image.onerror = () => reject(new Error("Failed to load image"));
    });
};

export default getCroppedImg;
