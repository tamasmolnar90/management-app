import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.jsx";

export default function Modal({ children, buttonCaption, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialog}
    >
      {children}
      <form className="text-right" method="dialog">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
