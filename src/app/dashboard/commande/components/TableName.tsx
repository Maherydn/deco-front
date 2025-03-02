import React from "react";
import TD from "./TD";

interface TableNameProps {
  name: string;
}

const TableName: React.FC<TableNameProps> = ({ name }) => {
  return (
    <TD
      child={
        <div>
          <div>{/* <img src="" alt="" /> */}</div>
          <h3 className="text-gray-600">{name}</h3>
        </div>
      }
    />
  );
};

export default TableName;
