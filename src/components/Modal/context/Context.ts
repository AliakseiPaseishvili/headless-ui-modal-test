'use client';
import { createContext, useContext } from 'react';

import { ModalStateAndActions } from '../types';

export const ModalContext = createContext<ModalStateAndActions>({
  open: () => {},
  close: () => {},
  isOpened: false,
});

export const useModalContext = () => useContext(ModalContext);
