import React, { useState } from "react";

type Props = {
  texto?: string;
  icons?: React.ElementType;
  clases: string;
  title: string;
  modal?: React.ReactElement<{ onClose?: () => void }>;
};

function OpenModal({ texto, clases, title, icons: Icon, modal }: Props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  // Clonamos el modal para pasarle el onClose si el modal lo soporta
  const modalWithProps = modal
    ? React.cloneElement(modal, { onClose: handleClose })
    : null;

  return (
    <>
      <button className={clases} title={title} onClick={() => setOpen(true)}>
        {texto || (Icon && <Icon />)}
      </button>
      {open && modalWithProps}
    </>
  );
}

export default OpenModal;
