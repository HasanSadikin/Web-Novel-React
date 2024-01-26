import React, { ElementRef, useRef } from "react";

interface Props extends React.ButtonHTMLAttributes<ElementRef<"button">> {
  children: React.ReactNode;
  buttonText: string;
  disabled: boolean;
  className: string;
}

const ButtonModal = ({ children, buttonText, disabled, className }: Props) => {
  const dialogueRef = useRef<ElementRef<"dialog">>(null);
  function handleOpenModal() {
    dialogueRef.current?.showModal();
  }
  return (
    <>
      <button
        className={`btn btn-primary btn-outline ${
          disabled && "btn-disabled"
        } ${className}`}
        onClick={handleOpenModal}
      >
        {buttonText}
      </button>
      <dialog id="my_modal_1" className="modal" ref={dialogueRef}>
        <div className="modal-box">{children}</div>
      </dialog>
    </>
  );
};

export default ButtonModal;
