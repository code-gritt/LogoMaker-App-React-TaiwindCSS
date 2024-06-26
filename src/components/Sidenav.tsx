import { Image, PencilRuler, Shield } from "lucide-react";

const Sidenav = ({ selectedIndex }: { selectedIndex: any }) => {
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
          {names.map((name, index: any) => (
            <li
              onClick={() => {
                selectedIndex(index);
              }}
              className={`transition duration-300 ease-out text-lg p-5 px-10 hover:text-white cursor-pointer hover:bg-gray-900 bg-primary text-gray-500`}
              key={index}
            >
              <div className="flex justify-start hover:scale-105 transition duration-300 ease-out space-around">
                <name.icon />
                <p className="ml-5">{name.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidenav;
