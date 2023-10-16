'use client';
import React from 'react';
import cn from 'classnames';

type Props = {
  children: React.ReactNode;
  open: boolean;
};

const ModalShare = ({ children, open }: Props) => {
  const modalClass = cn({
    'modal modal-middle': true,
    'modal-open': open,
  });

  return (
    <div className={modalClass}>
      <div className="modal-box bg-mainBlack ">{children}</div>
    </div>
  );
};

export default ModalShare;
