import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ErrorModal = forwardRef(({ errors, closeFn }, ref) => {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={modal} onClose={closeFn}>
      <p>{errors}</p>
      <form method="dialog">
        <button onClick={closeFn}>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ErrorModal;
