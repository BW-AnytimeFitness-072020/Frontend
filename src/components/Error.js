import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Error(props) {
    const { error } = props

    return (
        <div>
            <h3>Woops! Something went wrong.</h3>
            <p>Please try again.</p>
        </div>
    )
}

export default Error