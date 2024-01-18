const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
};

export default class AuthService {
  async login() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        options,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService();
