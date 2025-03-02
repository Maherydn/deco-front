import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { refreshToken } = await req.json();

    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/token/refresh`, {
      refresh_token: refreshToken,
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    // Vérifie si l'erreur est une instance d'Error pour accéder à son message
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
  
    // Retourne une réponse JSON avec un message d'erreur et un code 401
    return NextResponse.json(
      { error: errorMessage }, // Envoi du message d'erreur
      { status: 401 } // Code d'état HTTP
    );
  }
}
