import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutCard(props) {
    const { data } = props
  

    return (
        <Row className='justify-content-center'>

        {
                
                data.map(user => 
                <Col sm={5}>      
                <Card style={{width: '15rem'}}>
                <Card.Img 
                variant='top' 
                 src={user.avatar_url}    
                    />
                    <Card.Title>
                    {user.name}
                    </Card.Title>
                    <Card.Subtitle>
                      GitHub: <a href={user.html_url}>{user.login}</a>
                    </Card.Subtitle>
                    <Card.Body>
                      <Card.Text>
                        {user.bio}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>  
                 )
                 }
          </Row>
    )
}

export default AboutCard

