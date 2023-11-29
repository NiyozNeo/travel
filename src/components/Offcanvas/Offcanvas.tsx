import React, { useEffect, useRef, useState } from "react";
// import { GrClose } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import "./offcanvas.css";

interface ModalProps {
  children: any;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Offcanvas: React.FC<ModalProps> = ({
  children,
  modal,
  setModal,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const handleOverlay = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === overlayRef?.current) {
      setModal(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape" && modal) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [modal]);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      className={`overlay bg-black bg-opacity-40 ${modal ? "open" : ""}`}
    >
      <div
        className={`absolute w-1/2 xl:w-[31%]  right-0  modal_wrapperCanvas bg-white p-5  z-[9999]`}
      >
        <div></div>
        <div className={`flex items-center justify-between mb-[20px]`}>
          <h1 className="font-bold text-[25px]">Logo</h1>
          <button onClick={() => setModal(false)}>
            <MdClose size={24} color={"#000"} />
          </button>
        </div>
        <div className={`modal-content`}>{children}</div>
      </div>
    </div>
  );
};
