'use client';
import React, { useState } from 'react';
import { ModalV1 } from "../components/ModalV1";
import { TestContent } from "../components/TestContent";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

export const Test = () => {
  const [isOpenV1, setIsOpenV1] = useState(false);
  const [isOpenV2, setIsOpenV2] = useState(false);

  return (
    <div className='fixed' style={{ overflow: 'hidden', }}>
      <Button onClick={() => setIsOpenV1((v) => !v)}>ToggleModal1</Button>
      <Button onClick={() => setIsOpenV2((v) => !v)}>ToggleModal2</Button>
      <ModalV1 isOpened={isOpenV1} onClose={() => setIsOpenV1(false)}>
        <TestContent onClose={() => setIsOpenV1(false)} />
      </ModalV1>
      <Modal show={isOpenV2} onClose={() => setIsOpenV2(false)}>
        <TestContent onClose={() => setIsOpenV2(false)} />
      </Modal>
    </div>
  );
}
