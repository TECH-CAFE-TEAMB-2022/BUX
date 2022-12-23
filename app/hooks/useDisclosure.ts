import { useCallback, useState } from "react";

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  return { isOpen, open, close } as const;
};
