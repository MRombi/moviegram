import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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
