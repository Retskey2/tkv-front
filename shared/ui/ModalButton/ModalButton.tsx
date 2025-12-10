'use client';
import BasicModal from '@/shared/lib/smoothui/basic-modal';

import { Button } from '../Button/Button';
import { useState } from 'react';

export const ModalButton = ({ content, label }: { content: React.ReactNode; label: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} className="w-full cursor-pointer" variant="secondary">
        {label ?? 'Open Modal'}
      </Button>
      <BasicModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md" title={label}>
        <div className="space-y-4">
          <p className="text-foreground/75">{content}</p>
          <div className="flex justify-end space-x-2">
            <Button onClick={() => setIsOpen(false)} variant="primary">
              Okay
            </Button>
          </div>
        </div>
      </BasicModal>
    </div>
  );
};
