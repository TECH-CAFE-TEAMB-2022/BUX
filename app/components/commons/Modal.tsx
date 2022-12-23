import { Button, Modal as NextModal, Text } from "@nextui-org/react";
import React, { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  title: string;
  content?: ReactNode;
  buttons?: ReactNode;
  width?: string;
  onClose: () => void;
  preventClose?: boolean;
  headerFontSize?: string | number;
};

export const Modal = ({
  isOpen,
  title,
  content,
  buttons,
  width = "560px",
  onClose,
  preventClose,
  headerFontSize = 18,
}: Props): JSX.Element => {
  return (
    <NextModal
      preventClose={preventClose}
      scroll
      width={width}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={isOpen}
      onClose={onClose}
    >
      <NextModal.Header>
        <Text id="modal-title" size={headerFontSize} css={{ fontWeight: "bold" }}>
          {title}
        </Text>
      </NextModal.Header>
      <NextModal.Body>{content}</NextModal.Body>
      <NextModal.Footer>{buttons}</NextModal.Footer>
    </NextModal>
  );
};
