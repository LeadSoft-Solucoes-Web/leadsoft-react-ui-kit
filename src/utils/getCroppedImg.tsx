import { Crop } from "react-image-crop";

const getCroppedImg = (image: HTMLImageElement, crop: Crop): Promise<string> => {
    return new Promise(function (resolve: any, reject: any) {
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

        // Tente toBlob primeiro
        canvas.toBlob((blob) => {
            if (blob) {
                const croppedImageUrl = URL.createObjectURL(blob);
                resolve(croppedImageUrl);
            } else {
                const dataUrl = canvas.toDataURL('image/jpeg');
                resolve(dataUrl);
            }
        }, 'image/jpeg');
    });
};

export default getCroppedImg;
