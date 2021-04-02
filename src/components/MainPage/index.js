import React, { useEffect } from "react";
import { Navbar, Button, Row } from "react-bootstrap";
import "./index.css"
import { connect } from "react-redux";
import {
  getActiveList as getActiveListAction,
  getPassedList as getPassedListAction,
  addInPassed as addInPassedAction,
} from "../../redux/modules/cars"
import Nav from "react-bootstrap/Nav";
import List from "../Card";
import AddCar from "../Modal";

const MainPage = ({ cars, getActiveList, getPassedList, addInPassed }) => {

    const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
      getActiveList();
  }, []);

  function handleSelect(e) {
    if (e === "#active_list") {
        getActiveList();
    } else if (e === "#passed_list") {
        getPassedList();
    }
  }

  return (
    <div>
        <Row>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#active_list">Service</Navbar.Brand>
        <Nav className="mr-auto" defaultActiveKey="#active_list">
          <Nav.Link href="#active_list" onSelect={handleSelect}>
            Active List
          </Nav.Link>
          <Nav.Link eventKey="#passed_list" onSelect={handleSelect}>
            Passed List
          </Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={() => setModalShow(true)}>Add application</Button>
      </Navbar>
      <AddCar
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Row>
        <Row className="list">
        <h1>List:</h1>
        {cars.length && cars.map((item) => (
            <List key={item.id} id={item.id} model={item.model} number={item.number} wasServiced={item.wasServiced} addInPassed={addInPassed} />
        ))}
        </Row>
    </div>
  );
};

export default connect(({ cars }) => ({ cars: cars.cars }), {
  getActiveList: getActiveListAction,
  getPassedList: getPassedListAction,
  addInPassed: addInPassedAction,
})(MainPage);
