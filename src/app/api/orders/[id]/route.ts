import { NextResponse } from "next/server";
import api from "../../api";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const response = await api.get(`/api/orders/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des données" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const response = await api.patch(`/api/orders/update/${params.id}`, body, {
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    console.error("Erreur lors du traitement de la requête :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
