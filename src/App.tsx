import { SetStateAction, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [updateStorage, setUpdateStorage] = useState({});
  return (
    <>
      <Header />
      {/* <UpdateStorageContext.Provider
        value={{ updateStorage, setUpdateStorage }}
      > */}
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
              {selectedIndex == 0 ? (
                <IconController />
              ) : (
                <div className="h-auto">
                  <BackgroundController />{" "}
                </div>
              )}
            </div>
            <div className="flex p-5 h-auto shadow-sm  border border-gray-300 bg-gray-100">
              <LogoPreview />
            </div>
            <div className="flex p-5 h-auto shadow-sm  border border-gray-300 bg-gray-100">
              3
            </div>
          </div>
        </div>
      {/* </UpdateStorageContext.Provider> */}
      <div className="relative top-40">
        <Footer />
      </div>
    </>
  );
}

export default App;
