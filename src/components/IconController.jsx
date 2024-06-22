import { Smile } from "lucide-react";
import React from "react";

const IconController = () => {
  return (
    <>
      <div>
        <div>
          <label>Icon</label>
          <div
            className="p-3 hover:scale-105 cursor-pointer bg-gray-200 rounded-md
          w-[50px] h-[50px] my-2 flex items-center justify-center"
          >
            <Smile />
          </div>
        </div>
      </div>
    </>
  );
};

export default IconController;
