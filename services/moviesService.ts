const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
};

export default class MoviesService {
  async getMovies(EP = "now_playing", page = 1) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${EP}?language=en-US&page=${page}&region=en-US`,
        options,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const moviesService = new MoviesService();
