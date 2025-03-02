import React, { ReactNode } from "react";

interface TDProps {
  child: ReactNode;
}

const TD: React.FC<TDProps> = ({ child }) => {
  return <td className="py-4 px-6 border-b border-slate-200 min-w-20 max-w-44 ">{child}</td>;
};

export default TD;
