import React from "react";

interface THProps {
  name: string;
}

const TH: React.FC<THProps> = ({ name }) => {
  return (
    <th className="p-4 border-b border-slate-200 font-semibold text-slate-800">
      {name}
    </th>
  );
};

export default TH;
