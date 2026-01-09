'use client';
import { useCallback, useState } from 'react';

import { ActionAndModal, ModalStateAndActions, UseModalActions } from './types';

/**
 * Hook that returns modal open state and action
 * @returns {ModalStateAndActions} modal state and actions
 */
export const useModalState = (): ModalStateAndActions => {
  const [isOpened, toggleOpen] = useState<boolean>(false);
  const open = useCallback(() => toggleOpen(true), [toggleOpen]);
  const close = useCallback(() => toggleOpen(false), [toggleOpen]);

  return { isOpened, open, close };
};

/**
 * Hook that creates connection between modal and action
 * @param {UseModalActions['action']} action - action component that needs to have open method of use modal hook.
 * @param {UseModalActions['modal']} modal - modal component that needs to have close method and isOpened of use modal hook.
 * @returns {ActionAndModal} array of new components, where first component is action and other one is modal.
 */
export const useCreateOfActionWithModal = ({
  action,
  modal,
  visible = true,
}: UseModalActions): ActionAndModal => {
  const { isOpened, open, close } = useModalState();

  // TODO: figure ot another way of dealing with lots of modals for folders
  // isOpened here breaks the closing animation
  return visible
    ? [action({ open }), isOpened ? modal({ close, isOpened }) : null]
    : [null, null];
};
