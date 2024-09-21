import { recommendMenuItems } from "../config";
import WinnerMenuModal from "./WinnerMenuMordal";
import { useState } from "react";

function RecommendedMenu() {
  const [isOpenWinnerMenuModal, setIsOpenWinnerMenuModal] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const handleOnClick = (imgSrc: string) => {
    setImgSrc(imgSrc);
    setIsOpenWinnerMenuModal(true);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center h-fit">
        <div className="text-black text-xl font-semibold">เมนูแนะนำ</div>

        <div className="w-full h-fit carousel carousel-center bg-transparent p-4 gap-4 flex  ">
          {recommendMenuItems.map((item, index) => (
            <div
              key={index}
              className="carousel-item w-[240px] flex flex-col items-center gap-4"
              onClick={() => handleOnClick(item.imgSrc)}
            >
              <img src={item.imgSrc} className=" w-full object-fit " />
              <p className="text-black text-base font-normal">{item.text.TH}</p>
            </div>
          ))}
        </div>
      </div>
      <WinnerMenuModal
        imgSrc={imgSrc}
        isOpen={isOpenWinnerMenuModal}
        setIsOpen={setIsOpenWinnerMenuModal}
        setIsOpenWheelModal={() => {}}
        setWheelOpacity={() => {}}
      />
    </>
  );
}

export default RecommendedMenu;

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/Carousel";

// function RecommendedMenu() {
//   return (
//     <>
//       <Carousel className="w-screen flex justify-center ">
//         <CarouselContent>
//           {recommendMenuItems.map((item, index) => (
//             <CarouselItem
//               key={index}
//               className="carousel-item w-auto flex flex-col items-center gap-4 basis-2/4 p-4"
//             >
//               <img src={item.imgSrc} className=" w-full object-fit " />
//               <p className="text-black text-base font-normal">{item.text.TH}</p>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </>
//   );
// }

// export default RecommendedMenu;
