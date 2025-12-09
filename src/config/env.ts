const ENV = {
  BASE_URL: import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL_LOCAL,
  VITE_VNP_RETURN_URL:import.meta.env.VITE_VNP_RETURN_URL,
   CLOUDINARY_UPLOAD_PRESET: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_NAME: import.meta.env.VITE_CLOUDINARY_NAME,
};  

export default ENV;