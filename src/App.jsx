import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <>
      <Header />
      <div className="w-64 h-screen border-r">
        <Sidenav />
      </div>
      <div className="ml-64">
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
