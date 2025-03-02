"use client";

import React, { useEffect, useState } from "react";
import TH from "./components/TH";
import TableName from "./components/TableName";
import TableStatus from "./components/TableStatus";
import TablePrice from "./components/TablePrice";
import TableDelivery from "./components/TableDelivery";
import TableActions from "./components/TableActions";
import { formaDate } from "./services/dateService";
import OrderModal from "../components/modals/OrderModal";
import api from "@/app/api/api";
import { useRefresh } from "./hooks/RefreshContext";
import TD from "./components/TD";
import { truncateText } from "./services/truncateTextService";

// Définition des types pour les données
interface Status {
  name: string;
}

interface Product {
  name: string;
  id?: number;
}

export interface OrderPost {
  price: number;
  deliveryAt: string;
  product: Product;
  description: string;
  customer: string;
  id: number;
}

export interface OrderGet extends OrderPost {
  statu: Status;
}

export default function Page() {
  const thNames: string[] = ["Types", "Client", "Prix",  "Status", "Livraison", ""];
  const [data, setData] = useState<OrderGet[]>([]);
  const { refresh } = useRefresh(); 

  useEffect(() => {
    api
      .get<OrderGet[]>("/api/orders")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, [refresh]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="px-5 overflow-y-scroll h-screen">
      <h2 className="text-xl font-bold text-blue-800 my-4">Commande</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left table-auto min-w-lg bg-white rounded-2xl overflow-hidden">
          <thead>
            <tr>
              {thNames.map((name, index) => (
                <TH key={index} name={name} />
              ))}
            </tr>
          </thead>
          <tbody >
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <TableName name={item.product?.name || "N/A"} />
                  <TD child={<p className="text-gray-600">{truncateText(item.description, 26) }</p>} />
                  <TablePrice price={item.price} />
                  <TableStatus status={item.statu?.name || "N/A"} />
                  <TableDelivery delivery={formaDate(item.deliveryAt)} />
                  <TableActions id={item?.id} />
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  Aucune commande disponible
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="lg:h-28 h-14"></div>

      <div>
        <button onClick={() => setIsModalOpen(true)} className="btn">
          Créer une commande
        </button>
        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={{
            id: 0,
            price: 0,
            deliveryAt: "",
            product: {
              name: "",
            },
            customer: "",
            description: "",
          }}
        />
      </div>
    </div>
  );
}
