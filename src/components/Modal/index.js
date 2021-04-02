import React from "react";
import { Formik } from 'formik';
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addApplication as addApplicationAction } from "../../redux/modules/cars";

const AddCar = (props) => {

    const onSubmit = (values) => {
        console.log(values)
        props.addApplication(values)
        props.onHide()
    };

  return (
    <div>
      <Modal
        show = {props.show}
        onHide = {props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Add application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Car information:</h4>
            <Formik 
            onSubmit={onSubmit}
             initialValues={{
                model: '',
                number: '',
            }}>
          {({
              handleSubmit,
              values,
              handleChange,
          }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Model of car</Form.Label>
              <Form.Control type="text" name="model" value={values.model} onChange={handleChange} placeholder="Enter model of car" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Number of car</Form.Label>
              <Form.Control type="text" name="number" value={values.number} onChange={handleChange} placeholder="Enter number of car" required />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
          )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default connect(null, {
  addApplication: addApplicationAction,
})(AddCar);
