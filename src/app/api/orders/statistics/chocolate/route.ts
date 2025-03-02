import api from '@/app/api/api';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await api.get(`/api/orders-statistics/chocolate`);
    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
  }
}
