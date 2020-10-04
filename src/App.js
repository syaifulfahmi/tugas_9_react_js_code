import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import { Row, Col, Container} from 'react-bootstrap';
import PageNavbar from './component/PageNavbar';
import PageBreadcrumb from './component/PageBreadcrumb';
import PageSpinner from './component/PageSpinner';
import PageTable from './component/PageTable';
import PagePop from './component/PagePop';
import PageOverlays from './component/PageOverlays';

function App() {
  return (
    <>
      <PageNavbar />
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={{ span: 4, offset: 4 }}><PageBreadcrumb/> </Col>
        </Row>
        <br />
        <Row>
          <Col md={12}>
            <PageSpinner />
          </Col>
        </Row>
        <PageTable />
        <Row>
          <Col md={1}><PageOverlays /></Col>
          <Col md={2}><PagePop /></Col>
        </Row>
      </Container>     
    </>
  );
}

export default App;
