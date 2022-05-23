import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { loadFundraisings } from "../../redux/features/fundraising";
import { useDispatch, useSelector } from "react-redux";

const ShelterFaceCardModal = ({ smShow, setSmShow }) => {
  const fundraising = useSelector((state) => state.pets.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFundraisings());
  }, [dispatch]);

//   const donatFiltered = fundraising.slice(0, 1)

  return (
    <Modal
      size="lm"
      show={smShow}
      onHide={() => setSmShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Реквезиты приюта для доната
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* //!! РЕКВЕЗИТЫ ДЛЯ СБОРА
        {fundraising.map((item) => {
          return ( */}
            <>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicCardNumber">
                  <Form.Label>Карта банка</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="0000-0000-0000-0000"
                    disabled
                  />

                  <Form.Text className="text-muted">Реквезиты приюта</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <Form.Label>Номер</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="8929-000-00-00"
                    disabled
                  />
                  <Form.Text className="text-muted">Телефон номер</Form.Text>
                </Form.Group>
              </Form>
            </>
          {/* );
        })} */}
      </Modal.Body>
    </Modal>
  );
};

export default ShelterFaceCardModal;
