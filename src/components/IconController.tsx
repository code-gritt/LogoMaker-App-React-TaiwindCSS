import { Smile } from "lucide-react";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "../context/UpdateStorageContext";

const IconController = () => {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#fff");
  const [updateStorage, setUpdateStorage] = useContext(UpdateStorageContext);

  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: "Smile",
    };

    setUpdateStorage(updatedValue);

    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color]);
  return (
    <>
      <div>
        <div className="py-2">
          <label className="font-semibold">Icon</label>
          <div
            className="p-3 hover:scale-105 cursor-pointer bg-gray-200 rounded-md
          w-[50px] h-[50px] my-2 flex items-center justify-center"
          >
            <Smile />
          </div>
        </div>
        <div className="py-2">
          <label className="p-2 font-semibold flex justify-between items-center">
            Size <span>{size}px</span>
          </label>
          <Slider
            defaultValue={[280]}
            max={512}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>

        <div className="py-2">
          <label className="p-2 font-semibold flex justify-between items-center">
            Rotate <span>{rotate}°</span>
          </label>
          <Slider
            defaultValue={[0]}
            max={360}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
          />
        </div>

        <div className="py-2">
          <label className="p-2 font-semibold flex justify-between items-center">
            Icon Colour
          </label>
          <ColorPickerController
            hideController={true}
            selectedColor={(color: SetStateAction<string>) => setColor(color)}
          />
        </div>
      </div>
    </>
  );
};

export default IconController;
