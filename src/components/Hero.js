import React from 'react'
import {Col, Container, Jumbotron, Row} from 'react-bootstrap'

export default function Hero({title, subtitle, text}) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {title && <h1 className="display-1 font-weight-bolder">{title}</h1>}
            {subtitle && <h3 className="display-4 font-weight-light">{subtitle}</h3>}
            {text && <h3 className="lead font-weight-light">{text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
