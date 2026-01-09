import React, { FC, PropsWithChildren } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
} from "@headlessui/react";

type ModalProps = {
  onClose: () => void;
  isOpened: boolean;
};

export const ModalV1: FC<PropsWithChildren<ModalProps>> = ({
  onClose,
  isOpened,
  children,
}) => (
  <Transition show={isOpened}>
    <Dialog onClose={onClose}>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          <DialogPanel className=" inline-block transform overflow-hidden rounded-lg text-left align-bottom shadow-xl transition-all sm:my-8 w-1/2 sm:align-middle">
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </Transition>
);
