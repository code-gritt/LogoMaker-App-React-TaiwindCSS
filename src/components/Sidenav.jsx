import React from "react";
import { Image, PencilRuler, Shield } from "lucide-react";

const Sidenav = () => {
  const names = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  return (
    <>
      <div>
        <ul>
          {names.map((name, index) => (
            <li
              className="transition duration-300 ease-out text-lg p-3 px-10 hover:text-white cursor-pointer hover:bg-gray-900 bg-primary text-gray-500"
              key={index}
            >
              {name.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidenav;
