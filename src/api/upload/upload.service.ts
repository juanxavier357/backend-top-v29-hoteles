import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dyvir87cf',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const maxSize = 1024 * 1024 * 2;

export function uploadImage(image: string) {
  return cloudinary.uploader.upload(image, {
    folder: 'upload-images',
    use_filename: true,
    unique_filename: false,
  });
}
