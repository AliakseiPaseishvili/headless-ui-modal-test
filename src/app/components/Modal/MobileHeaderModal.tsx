import React, { FC, JSX, ReactNode } from 'react';
import { DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { BUTTON_COLOR } from '@/components/Button';
import { IconButton } from '@/components/IconButton';

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
          <IconButton
            icon={ChevronLeftIcon}
            onClick={onBackClick}
            color={BUTTON_COLOR.TRANSPARENT}
            iconClassName="size-5 text-gray-500 stroke-2 fill-none"
            className="size-10"
          />
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
          <IconButton
            icon={XMarkIcon}
            onClick={close}
            color={BUTTON_COLOR.TRANSPARENT}
            iconClassName="size-5 text-gray-500 stroke-2"
            className="size-10"
          />
        )}
      </div>
    </div>
  );
};
