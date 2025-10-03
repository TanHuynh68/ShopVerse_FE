const ENV = {
  BASE_URL: import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL_LOCAL,
  VNP_RETURN_DOMAIN:import.meta.env.VNP_RETURN_DOMAIN
};  

export default ENV;