import { SetStateAction, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";

function App() {
  const [selectedIndex, setSelectedIndex] = useState("");
  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="w-64 border-r absolute">
          <Sidenav
            selectedIndex={(value: SetStateAction<string>) =>
              setSelectedIndex(value)
            }
          />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex p-5 h-auto shadow-sm  border border-gray-300 bg-gray-100">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="flex p-5 h-auto shadow-sm  border border-gray-300 bg-gray-100">
            2
          </div>
          <div className="flex p-5 h-auto shadow-sm  border border-gray-300 bg-gray-100">
            3
          </div>
        </div>
      </div>
      <div className="relative top-60">
      <Footer />
      </div>
 
    </>
  );
}

export default App;
