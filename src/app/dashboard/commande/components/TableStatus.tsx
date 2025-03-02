import React from "react";
import TD from "./TD";

interface TableStatusProps {
  status: string;
}

const TableStatus: React.FC<TableStatusProps> = ({ status }) => {
  return (
    <TD
      child={
        <p className="px-2 border rounded-2xl w-fit text-sm  text-green-400 bg-green-100/50">
          {status}
        </p>
      }
    />
  );
};

export default TableStatus;
