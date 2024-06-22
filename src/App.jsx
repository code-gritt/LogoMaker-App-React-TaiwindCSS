import BackgroundController from "./components/BackgroundController";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IconController from "./components/IconController";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="w-64 border-r fixed">
          <Sidenav selectedIndex={(value) => console.log(value)} />
        </div>

        <div className="ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center  border-2 border-gray-300 rounded-xl   bg-gray-100">
            <IconController />
            <BackgroundController />
          </div>
          <div className="flex justify-center  border-2 border-gray-300 rounded-xl  bg-gray-100">
            2
          </div>
          <div className="flex justify-center  border-2 border-gray-300 rounded-xl   bg-gray-100">
            3
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
