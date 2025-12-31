import axios from "axios";

// Backend base URL
const API_URL = "http://localhost:3000";

// Add Job API
export const addJob = async (jobData) => {
  try {
    const response = await axios.post(
      `${API_URL}/jobs`,
      jobData,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error adding job:", error);
    return null;
  }
};
