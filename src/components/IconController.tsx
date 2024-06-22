import { Smile } from "lucide-react";
import { useState } from "react";
import { Slider } from "./ui/slider";

const IconController = () => {
  const [currentValue, setCurrentValue] = useState(0);
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
        <div>
          <label>Size</label>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </div>
    </>
  );
};

export default IconController;
