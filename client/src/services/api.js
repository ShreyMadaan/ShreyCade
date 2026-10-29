const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export const getHealthStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/api/health`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
};