import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


export default function Content({children}) {
  return (
    <div>
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
