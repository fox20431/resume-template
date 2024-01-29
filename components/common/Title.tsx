import React from "react";

export const Title: React.FC<{title: string}> = ({title}) => {
  return (
    <div className="flex flex-row mt-4">
      <h2 className=" font-SourceHanSansHWSC text-2xl font-bold">{title}</h2>
      <div className="flex-1 flex items-end">
        <div className="w-full border border-solid border-black mb-1"></div>
      </div>
    </div>
  );
}

