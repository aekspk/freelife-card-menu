import WheelComponent from "./Wheel";
import { recommendMenuItems } from "../config";
import { useState } from "react";
import WinnerMenuModal from "./WinnerMenuMordal";
interface PromotionModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function WheelModal({ isOpen, setIsOpen }: PromotionModalProps) {
  // const segments = [
  //   ...recommendMenuItems.map((item) =>
  //     lang === "TH" ? `${item.text.TH}` : `${item.text.EN}`
  //   ),
  // ];

  const segments = [...recommendMenuItems.map((item) => item.segment)];
  const [isOpenWinnerMenuModal, setIsOpenWinnerMenuModal] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [opacity, setOpacity] = useState("90");

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // const segColors = [hexToRgba("#6B7280", 0.2), hexToRgba("000000", 0.4)];
  const segColors = [
    hexToRgba("#f14666", 1),
    hexToRgba("#ee8980", 1),
    hexToRgba("#ffcdaa", 1),
    hexToRgba("#9cb898", 1),
    hexToRgba("#f7dc68", 1),
  ];

  const onFinished = (winner: string) => {
    const winnerMenu = recommendMenuItems.find(
      (item) => item.segment === winner
    );
    const winnerMenuImage = winnerMenu?.imgSrc;
    setImgSrc(winnerMenuImage);
    setIsOpenWinnerMenuModal(true);

    console.log(winnerMenuImage);
  };

  const upDuration = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  const downDuration = Math.floor(Math.random() * (1000 - 300 + 1)) + 300;

  return (
    <>
      <dialog
        id="my_modal_3"
        className={`modal ${isOpen ? "modal-open" : "modal-close"}`}
      >
        <div className="relative w-full flex justify-center ">
          <div className={`opacity-${opacity}`}>
            <WheelComponent
              segments={segments}
              segColors={segColors}
              winningSegment=""
              onFinished={(winner) => onFinished(winner)}
              primaryColor=""
              contrastColor="white"
              buttonText="กินไรดี?"
              isOnlyOnce={false}
              size={170}
              upDuration={upDuration}
              downDuration={downDuration}
              fontFamily="Arial"
            />
          </div>
          <form method="dialog">
            <button
              className="btn btn-xs btn-circle btn-ghost absolute text-white bg-rose-600 absolute top-0 right-8"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
      {isOpenWinnerMenuModal && (
        <WinnerMenuModal
          imgSrc={imgSrc}
          isOpen={isOpenWinnerMenuModal}
          setIsOpen={setIsOpenWinnerMenuModal}
          setIsOpenWheelModal={setIsOpen}
          setWheelOpacity={setOpacity}
        />
      )}
    </>
  );
}

export default WheelModal;
