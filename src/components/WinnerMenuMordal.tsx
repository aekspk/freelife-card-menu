import { useEffect } from "react";

interface WinnerMenuModalProps {
  imgSrc: string | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenWheelModal: React.Dispatch<React.SetStateAction<boolean>>;
  setWheelOpacity: React.Dispatch<React.SetStateAction<string>>;
}

function WinnerMenuModal({
  imgSrc,
  isOpen,
  setIsOpen,
  setIsOpenWheelModal,
  setWheelOpacity,
}: WinnerMenuModalProps) {
  // const [isOpenWheelModal, setIsOpenWheelModal] = useState(false);

  useEffect(() => {
    setWheelOpacity("0");
  }, [isOpen, setWheelOpacity]);

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsOpenWheelModal(false);
  };
  return (
    <>
      <dialog
        id="my_modal_3"
        className={`modal ${isOpen ? "modal-open" : "modal-close"}`}
      >
        <div className="flex flex-col items-center p-4 relative">
          <img src={imgSrc} alt="winner-menu" className="md:h-[700px]" />
          <button
            className="btn btn-xs btn-circle btn-ghost absolute text-white bg-rose-600 absolute top-10 right-10"
            onClick={() => handleCloseModal()}
          >
            ✕
          </button>
        </div>
      </dialog>
    </>
  );
}

export default WinnerMenuModal;
