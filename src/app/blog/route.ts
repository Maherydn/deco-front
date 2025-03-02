import { NextResponse } from "next/server";
import api from "../api/api";

export async function GET() {
  try {
    const response = await api.get(`/api/orders`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes:", error);
    return NextResponse.json({ error: "Erreur lors de la récupération des commandes" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await api.post(`/api/new`, body, {
      headers: { "Content-Type": "application/json" },
    });
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    console.error("Erreur lors de l'envoi des données:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi des données" }, { status: 500 });
  }
}
