'use client';

import { useRouter } from 'next/navigation';

const ModalBackDrop = () => {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back}></div>;
};

export default ModalBackDrop;
