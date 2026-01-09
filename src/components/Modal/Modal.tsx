import React, { FC, Fragment, JSX, PropsWithChildren, ReactNode } from 'react';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { Button } from '../Button';
import { MobileHeaderModal } from './MobileHeaderModal';
import { twMerge } from 'tailwind-merge';

export enum MODAL_TYPE {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

interface ModalProps extends PropsWithChildren {
  show: boolean;
  onClose: () => void;
  title?: string | JSX.Element;
  type?: MODAL_TYPE;
  showClose?: boolean;
  actionNode?: ReactNode;
  isFullScreen?: boolean;
  backdropClassName?: string;
  withHeaderDivider?: boolean;
  // we need to have includeContentTransition because of next issue:
  // https://github.com/bvaughn/react-virtualized-auto-sizer/issues/99
  includeContentTransition?: boolean;
  headerClassName?: string;
  isMobileMenu?: boolean;
  onBackClick?: () => void;
  isBackButton?: boolean;
  isLogo?: boolean;
  logo?: ReactNode;
}

const MODAL_SIZE = {
  [MODAL_TYPE.SMALL]: 'md:max-w-md',
  [MODAL_TYPE.MEDIUM]: 'md:max-w-(--breakpoint-md)',
  [MODAL_TYPE.BIG]: 'md:max-w-(--breakpoint-lg)',
};

export const Modal: FC<ModalProps> = ({
  show,
  children,
  onClose,
  title,
  showClose = true,
  type = MODAL_TYPE.SMALL,
  isFullScreen = true,
  backdropClassName = '',
  withHeaderDivider = true,
  includeContentTransition = true,
  actionNode,
  headerClassName = '',
  isMobileMenu = false,
  isBackButton = false,
  onBackClick,
  isLogo,
  logo,
}) => {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10000" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={twMerge(
              'fixed inset-0 bg-neutral-50/80',
              backdropClassName,
            )}
          />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center">
            <TransitionChild
              as={Fragment}
              transition={includeContentTransition}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={twMerge(
                  'md:min-h-1/2 transform overflow-visible rounded-md bg-white text-left align-middle shadow-sb transition-all border border-gray-200',
                  MODAL_SIZE[type],
                  isFullScreen ? 'w-full min-h-screen' : 'h-auto',
                  !isMobileMenu && 'py-6',
                )}
              >
                {isMobileMenu ? (
                  <MobileHeaderModal
                    close={onClose}
                    title={title}
                    isBackButton={isBackButton}
                    onBackClick={onBackClick}
                    isLogo={isLogo}
                    logo={logo}
                  />
                ) : (
                  <div
                    className={twMerge(
                      'flex flex-row items-center',
                      showClose ? 'justify-between' : 'justify-center',
                      (title || showClose) && 'px-4 pb-6 md:pb-4',
                      (title || showClose) &&
                        withHeaderDivider &&
                        'md:border-b md:border-gray-200',
                      headerClassName,
                    )}
                  >
                    <DialogTitle
                      as="h3"
                      className="text-base font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </DialogTitle>
                    {(showClose || actionNode) && (
                      <div className="flex flex-row gap-4">
                        {actionNode}
                        {showClose && (
                          <Button
                            onClick={onClose}
                          >
                            <XMarkIcon className="w-6 h-6" />
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
