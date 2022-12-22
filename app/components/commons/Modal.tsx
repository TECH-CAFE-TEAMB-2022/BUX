import { Button, Modal as NextModal, Text } from "@nextui-org/react";
import React, { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  title: string;
  content?: ReactNode;
  buttons?: ReactNode;
  width?: string;
};

export const Modal = ({ isOpen, title, content, buttons, width = "560px" }: Props): JSX.Element => {
  return (
    <NextModal
      scroll
      width={width}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={isOpen}
    >
      <NextModal.Header>
        <Text id="modal-title" size={18} css={{ fontWeight: "bold" }}>
          {title}
        </Text>
      </NextModal.Header>
      <NextModal.Body>{content}</NextModal.Body>
      <NextModal.Footer>{buttons}</NextModal.Footer>
    </NextModal>
  );
};
