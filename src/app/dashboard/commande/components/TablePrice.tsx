import React from "react";
import TD from "./TD";

interface TablePriceProps {
  price: number;
}

const TablePrice: React.FC<TablePriceProps> = ({ price }) => {
  return <TD child={<p className="text-gray-600">{price} ar</p>} />;
};

export default TablePrice;
