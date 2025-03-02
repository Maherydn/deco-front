import { NextResponse } from "next/server";
import api from "@/app/api/api";

export async function PATCH(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await api.patch(`/api/orders-status/ready/${params.id}`);

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour de l'état de la commande :",
      error
    );
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour de l'état" },
      { status: 500 }
    );
  }
}
