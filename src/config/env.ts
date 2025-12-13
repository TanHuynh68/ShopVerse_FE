const ENV = {
  BASE_URL: import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL_LOCAL,
  VITE_VNP_RETURN_URL: import.meta.env.VITE_VNP_RETURN_URL,
  VITE_GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID
};

export default ENV;