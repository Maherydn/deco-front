"use client";

import React, { useState, useRef, useEffect } from "react";
import TD from "./TD";
import { TDIcon } from "./icon";
import { OrderGet } from "../page";
import OrderModal from "../../components/modals/OrderModal";
import api from "@/app/api/api";

interface TableActionsProps {
  id: number;
}

const TableActions: React.FC<TableActionsProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectedOrder, setSelectedOrder] = useState<OrderGet | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  
useEffect(() => {
  if (id) {
    api.get(`/api/orders/${id}`)
      .then((response) => {
        setSelectedOrder(response.data);
      })
      .catch((err) => {
        console.error("Erreur de chargement :", err);
      });
  }
}, [id]);

  return (
    <TD
      child={
        <div className="relative flex justify-center items-center" ref={menuRef}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <TDIcon />
          </button>

          <div
            className={`absolute -top-20 -right-10 w-32 bg-white border border-gray-200 shadow-lg rounded-lg ${
              !isOpen && "hidden"
            }`}
          >
            <ul className="text-gray-700">
              <li>
                <a href="#" className="block p-2 hover:bg-gray-100">
                  Facture
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block p-2 hover:bg-gray-100 w-full text-left"
                >
                  Modifier
                </button>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-red-100 text-red-500">
                  Supprimer
                </a>
              </li>
            </ul>
            {selectedOrder && (
              <OrderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={selectedOrder}
              />
            )}
          </div>
        </div>
      }
    />
  );
};

export default TableActions;
