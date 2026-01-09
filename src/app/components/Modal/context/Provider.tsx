'use client';
import React, { FC, PropsWithChildren } from 'react';

import { useModalState } from '../hooks';
import { ModalContext } from './Context';

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const { open, isOpened, close } = useModalState();

  return (
    <ModalContext value={{ open, isOpened, close }}>{children}</ModalContext>
  );
};
