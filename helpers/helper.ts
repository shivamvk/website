import { CLOUDINARY_BASE_URL } from "./constants";

export const getCloudinaryUrl = (id: string): string => `${CLOUDINARY_BASE_URL}/${id}`; 