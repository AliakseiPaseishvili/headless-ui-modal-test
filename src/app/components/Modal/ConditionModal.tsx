'use client';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { Button } from '../Button';
import { Modal } from './Modal';

type ConditionModalProps = {
  onClose: () => void;
  show: boolean;
  onCondition: () => void;
  title: string;
  isDisabled?: boolean;
  contentClassName?: string;
};

export const ConditionModal: FC<ConditionModalProps> = ({
  onClose,
  show,
  onCondition,
  title,
  isDisabled = false,
  contentClassName,
}) => {
  const { t } = useTranslation('common');
  return (
    <Modal
      onClose={onClose}
      show={show}
      showClose={false}
      isFullScreen={false}
      title={title}
    >
      <div
        className={twMerge(
          'flex flex-row items-center justify-center gap-4 my-4',
          contentClassName,
        )}
      >
        <Button onClick={onCondition} disabled={isDisabled}>
          {t('common:yes')}
        </Button>
        <Button onClick={onClose} disabled={isDisabled}>
          {t('common:no')}
        </Button>
      </div>
    </Modal>
  );
};
