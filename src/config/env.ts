const ENV = {
  BASE_URL: import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL_LOCAL,
  VITE_VNP_RETURN_URL:import.meta.env.VITE_VNP_RETURN_URL
};  

export default ENV;