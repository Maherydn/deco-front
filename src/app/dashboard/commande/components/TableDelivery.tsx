import React from "react";
import TD from "./TD";

interface TableDeliveryProps {
  delivery: string;
}

const TableDelivery: React.FC<TableDeliveryProps> = ({ delivery }) => {
  return <TD child={<p className="text-gray-600">{delivery}</p>} />;
};

export default TableDelivery;
