import React, { FC, JSX, ReactNode } from "react";
import { DialogTitle } from "@headlessui/react";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button";

type MobileHeaderModalProps = {
  close: () => void;
  title?: string | JSX.Element;
  onBackClick?: () => void;
  isBackButton?: boolean;
  isLogo?: boolean;
  logo?: ReactNode;
};

export const MobileHeaderModal: FC<MobileHeaderModalProps> = ({
  close,
  title,
  onBackClick,
  isBackButton = false,
  isLogo = false,
  logo,
}) => {
  return (
    <div className="grid grid-cols-3 items-center bg-gray-50 p-4 border-b border-gray-200">
      <div className="justify-self-start">
        {isBackButton && (
          <Button onClick={onBackClick}>
            <ChevronLeftIcon className="size-5 text-gray-500 stroke-2 fill-none" />
          </Button>
        )}
      </div>
      <DialogTitle
        as="h3"
        className="justify-self-center text-center text-base font-semibold text-gray-900 px-2"
      >
        {title}
      </DialogTitle>
      <div className="justify-self-end">
        {isLogo ? (
          <div className="size-10 flex items-center justify-center bg-white rounded-lg shadow">
            {logo}
          </div>
        ) : (
          <Button onClick={close}>
            <XMarkIcon className="size-5 text-gray-500 stroke-2" />
          </Button>
        )}
      </div>
    </div>
  );
};
