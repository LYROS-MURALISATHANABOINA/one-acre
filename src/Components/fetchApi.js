import axios from "axios";

const BASE_URL = "https://prod-be.1acre.in/lands/?division=24&page_size=10&page=";

export const fetchLandData = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}${page}&ordering=-updated_at`);
    return response.data.results; 
  } catch (error) {
    console.error("Error fetching land data:", error);
    return [];
  }
};
