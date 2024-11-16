/**
 * DeleteModal Component
 *
 * This component is a modal that will be used to confirm
 * if the user really wants to delete a product
 *
 * @param {boolean} isOpenDeleteConfirmModal - If the modal is open or not
 * @param {() => void} closeDeleteConfirmModal - Function to close the modal
 * @param {string} title - The title of the modal
 * @param {ReactNode} children - The content of the modal
 * @returns {JSX.Element} The modal component
 */
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";

interface IProps {
  isOpenDeleteConfirmModal: boolean;
  closeDeleteConfirmModal: () => void;
  title?: string;
  children: ReactNode;
}

const DeleteModal = ({
  isOpenDeleteConfirmModal,
  closeDeleteConfirmModal,
  title,
  children,
}: IProps) => {
  return (
    <Dialog
      open={isOpenDeleteConfirmModal}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeDeleteConfirmModal}
      __demoMode
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
            {
              title && (
                <DialogTitle as="h3" className="text-base/7 font-bold text-secondaryButton text-[22px] mb-3">
                  {title}
                </DialogTitle>
              )
            }
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteModal;

