import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = () => {
  const [color, setColor] = useState("rgba(255,255,255,1)");
  return (
    <div>
      <ColorPicker value={color} onChange={setColor} />
    </div>
  );
};

export default ColorPickerController;
