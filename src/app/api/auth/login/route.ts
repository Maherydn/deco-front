import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const response = await axios.post(`http://localhost:8000/api/login_check`, {
      username,
      password,
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
  
    return NextResponse.json(
      { error: errorMessage }, // Envoi du message d'erreur
      { status: 401 } // Code d'état HTTP
    );
  }
}