import { DialogTitle } from "@headlessui/react";
import React, { FC } from "react";

type TestContentProps = { onClose: () => void };

export const TestContent: FC<TestContentProps> = ({ onClose }) => {
  return (
    <>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            {/* Heroicon name: exclamation */}
            <svg
              className="h-6 w-6 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <DialogTitle
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Deactivate account
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "1000px" }}
        className="flex bg-gray-50 px-4 py-3 sm:flex-row-reverse sm:gap-2"
      >
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
};
