import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        if (typeof window === "undefined")
          throw new Error("localStorage indisponible");

        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("Aucun refreshToken trouvé");

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/token/refresh`,
          { refresh_token: refreshToken }
        );

        localStorage.setItem("accessToken", data.token);

        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return api(originalRequest);
      } catch (err) {
        console.error("Échec du rafraîchissement du token", err);
        //         // localStorage.removeItem("accessToken");
        //         // localStorage.removeItem("refreshToken");
        //         // window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
