import React, { useContext } from 'react';
import { Modal as ModalView } from 'react-bootstrap';
import { ModalState } from '../context';

const Header = ({ title }) => (
  <ModalView.Header closeButton>
    <ModalView.Title id="contained-modal-title-vcenter">{title}</ModalView.Title>
  </ModalView.Header>
);

export const Modal = () => {
  const { ModalContext } = ModalState;
  const { setModal, ...rest } = useContext(ModalContext);
  const { title, body: Body, show } = rest;
  return (
    <ModalView
      onHide={() => setModal({ show: false })}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      {title && <Header title={title} />}

      <ModalView.Body>
        <Body />
      </ModalView.Body>
    </ModalView>
  );
};
