import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Admin.scss"

const AdminModal = (props) => {
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide}
      >
        <Modal.Header closeButton onClick={props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.mtitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.title}</h4>
          <Form>
            <Row className="mb-3">
              <Form.Label column sm="3">
                8:00 - 8:30 AM
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm="3">
                11:00 - 11:30 AM
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm="3">
                2:00 - 2:30 PM
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm="3">
                4:00 - 4:30 PM
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm="3">
                8:00 - 8:30 PM
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button onClick={props.onHide}>Set Diet</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminModal;