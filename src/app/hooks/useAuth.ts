import { useEffect } from "react";
import axios from "axios";
import { decode } from "jsonwebtoken"; // Correct import
import { useAuth } from "../contexts/AuthContext";

// Définir l'interface pour le token décodé
interface DecodedToken {
  exp: number; // Timestamp d'expiration du token
  [key: string]: unknown; // Remplacer `any` par `unknown` pour éviter `any`
}

export function useAuthCheck() {
  const { logout } = useAuth();

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken || !refreshToken) return logout();

      try {
        const decoded = decode(accessToken) as DecodedToken; // Utilisation du type DecodedToken
        const now = Date.now() / 1000;

        if (decoded.exp < now) {
          const { data } = await axios.post("/api/auth/refresh", { refreshToken });
          localStorage.setItem("accessToken", data.token);
        }
      } catch (error) {
        console.log(error);
        logout();
      }
    };

    checkToken();
  }, [logout]);
}
