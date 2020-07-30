import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Route } from 'react-router-dom'

function AboutCard(props) {
  const [data, setData] = useState(props.data)
    // const { data } = props
    console.log(props)
  

    return (
        <Container>
        {
                
                data.map(user => 
                      
                <Card style={{width: '18rem'}}>
                <h3>test</h3>
                <h3>{user.avatar_url}</h3>
                <Card.Img 
                variant='top' 
                 src={user.avatar_url}    
                    />
                  </Card>  
                 )
                 }
        </Container>
    )
}

export default AboutCard



// {/* <Route path='/about/:login'> */}
// <Card style={{width: '18rem'}}>
// <Card.Img 
//   variant='top' 
//   src={'https://avatars0.githubusercontent.com/u/55265165?v=4'}    
//   />
// <Card.Body>
//   <Card.Title>Jeremiah Trnka</Card.Title>
//   <Card.Text>React 1 Developer</Card.Text>
//   <Button 
//   variant='secondary' 
//   size='sm'
//   // disabled={isLoading}
//   // onClick={!isLoading ? handleClick : null}
//   >Click for More Info
//   {/* {isLoading ? 'Loading...' : 'Click for More Info'} */}
//   </Button>
// </Card.Body>   
// </Card>  
// {/* </Route> */}