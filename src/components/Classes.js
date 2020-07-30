import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddClass from './AddClass'

function Classes() {

    return (
        <Row>
        <Col>
        <h1>Classes</h1>
            <AddClass />
            </Col>
        </Row>
    )
}


export default Classes