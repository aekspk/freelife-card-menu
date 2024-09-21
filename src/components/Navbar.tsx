import { useState } from "react";
import WheelModal from "./WheelModal";
import wheel from "../assets/wheel.png";
import { logo } from "../config.ts";

function Navbar() {
  const [isOpenWheelModal, setIsOpenWheelModal] = useState(false);

  return (
    <>
      <nav className="w-full h-fit flex justify-center items-center relative pt-8">
        <img src={`${logo}`} alt={"logo"} className="h-[80px]"></img>
        <div className="fixed top-8 right-4 flex flex-col gap-2">
          {/* <button
            className="rounded-full bg-primary w-[28px] h-[28px] flex justify-center items-center"
            onClick={() => setIsOpenPromotionModal(true)}
          >
            <img
              className="h-[14px] "
              src={"/src/assets/megaphone.svg"}
              alt={"megaphone icon"}
            ></img>
          </button> */}
          <img
            className="w-[30px]"
            src={wheel}
            onClick={() => setIsOpenWheelModal(true)}
          ></img>
        </div>
      </nav>
      {/* <PromotionModal
        isOpen={isOpenPromotionModal}
        setIsOpen={setIsOpenPromotionModal}
      /> */}
      {isOpenWheelModal && (
        <WheelModal isOpen={isOpenWheelModal} setIsOpen={setIsOpenWheelModal} />
      )}
    </>
  );
}

export default Navbar;
