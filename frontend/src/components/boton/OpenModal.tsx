// import React from 'react'

type Props = {
  texto?: string;
  icons?: React.ElementType;
  clases: string;
  title: string;
};

function OpenModal({ texto, clases, title, icons: Icon }: Props) {
  return (
    <button className={clases} title={title}>
      {texto || (Icon && <Icon />)}
    </button>
  );
}

export default OpenModal;
