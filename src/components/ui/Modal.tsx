/**
 * Modal component
 * @param isOpen - If the modal is open or not
 * @param close - Function to close the modal
 * @param title - The title of the modal
 * @param children - The content of the modal
 * @returns {JSX.Element} The modal component
 */

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  close: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, close, title, children }: IProps) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      {/* Backdrop */}
      <div className="fixed inset-0">
        {/* Blur layer */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          aria-hidden="true"
        />
      </div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-prodModalBg shadow-xl p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            {title && (
              <DialogTitle
                as="h3"
                className="text-base/7 font-bold text-titleColor"
              >
                {title}
              </DialogTitle>
            )}

            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
