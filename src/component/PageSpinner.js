import React from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

function PageSpinner(){
	return(
		<>
      <Container fluid="md">
        <Row>
          <Col sm={8}>
            <h5 align="left">Rumor Transfer Pemain</h5>
          </Col>
          <Col sm={4} align="right">
            <Spinner animation="border" variant="success" />
            <Spinner animation="grow" variant="success" />
          </Col>
        </Row>
      </Container>
		</>
	)
}
export default PageSpinner;