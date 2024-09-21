import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import RecommendedMenu from "./components/RecommendMenu";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import BodyBG from "./assets/BodyBG.png";
import order from "./assets/order.svg";

function App() {
  return (
    <>
      <div className="flex flex-col relative">
        <div
          style={{ backgroundImage: `url(${BodyBG})` }}
          className={` bg-cover flex flex-col gap-8 bg-top bg-no-repeat`}
        >
          <Navbar />
          <RecommendedMenu />
        </div>
        <Menu />
        <a
          href="https://line.me/ti/p/JdHPoEJKGs"
          className="bg-rose-600 flex justify-center items-center  gap-2 w-[131px] h-[32px] rounded-full fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <img src={`${order}`}></img>
          <p className="font-semibold text-base text-white">สั่งอาหารที่นี่</p>
        </a>
        <Footer />
      </div>
    </>
  );
}

export default App;
