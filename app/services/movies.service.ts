import axios from "axios";

const API_KEY = "aa695292ffb3a2ef0f2934def61c176c";
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Not Found!");
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};
