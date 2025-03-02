"use client";
import React, { useEffect, useState } from "react";
import ChartComponent from "./componets/ChartComponent";
import api from "@/app/api/api";

type OrderStats = number[];

export default function Dashboard() {
  const [orderStatsCake, setOrderStatsCake] = useState<OrderStats>([]);
  const [orderStatsChocolate, setOrderStatsChocolate] = useState<OrderStats>(
    []
  );

  const fetchData = async (
    product: string,
    setter: React.Dispatch<React.SetStateAction<OrderStats>>
  ) => {
    try {
      const res = await api.get<OrderStats>(`/api/orders-statistics/${product}`);
      setter(res.data);
    } catch (err) {
      console.error("Erreur de chargement :", err);
    }
  };

  useEffect(() => {
    fetchData("cake", setOrderStatsCake);
    fetchData("chocolate", setOrderStatsChocolate);
  }, []);

  return (
    <div className="mb-6">
      <div className="m-6">
        <h2 className="text-xl font-bold text-blue-800 mb-6 underline">Cake</h2>
        <div className="bg-white shadow-lg rounded-lg lg:w-4/5 mx-auto">
          <ChartComponent data={orderStatsCake} />
        </div>
      </div>

      <div className="m-6">
        <h2 className="text-xl font-bold text-blue-800 mb-6 underline">
          Chocolate
        </h2>
        <div className="bg-white shadow-lg rounded-lg lg:w-4/5 mx-auto">
          <ChartComponent data={orderStatsChocolate} />
        </div>
      </div>
    </div>
  );
}
