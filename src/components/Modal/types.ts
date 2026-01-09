import { ReactNode } from 'react';

export type ActionAndModal = [action: ReactNode, modal: ReactNode];

export type ActionProps = { open: () => void };
export type ModalProps = { close: () => void; isOpened: boolean };

export type UseModalActions = {
  action: (props: ActionProps) => ReactNode;
  modal: (props: ModalProps) => ReactNode;
  visible?: boolean;
};

export type ModalStateAndActions = {
  open: () => void;
  close: () => void;
  isOpened: boolean;
};
