import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutCard(props) {
  // const [data, setData] = useState(props.data)
    const { data } = props
    // console.log(props)
  

    return (
        <Container>
        <Row className='justify-content-center'>

        {
                
                data.map(user => 
                <Col key={user.login} sm={5}>      
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
        </Container>
    )
}

export default AboutCard

// const data = 
//   {
//     "login": "kc0buk",
//     "id": 55265165,
//     "node_id": "MDQ6VXNlcjU1MjY1MTY1",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/55265165?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/kc0buk",
//     "html_url": "https://github.com/kc0buk",
//     "followers_url": "https://api.github.com/users/kc0buk/followers",
//     "following_url": "https://api.github.com/users/kc0buk/following{/other_user}",
//     "gists_url": "https://api.github.com/users/kc0buk/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/kc0buk/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/kc0buk/subscriptions",
//     "organizations_url": "https://api.github.com/users/kc0buk/orgs",
//     "repos_url": "https://api.github.com/users/kc0buk/repos",
//     "events_url": "https://api.github.com/users/kc0buk/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/kc0buk/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Jeremiah Trnka",
//     "company": null,
//     "blog": "",
//     "location": "Sacramento",
//     "email": null,
//     "hireable": null,
//     "bio": "Current Full Stack Web Development student at Lambda School",
//     "twitter_username": null,
//     "public_repos": 26,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 0,
//     "created_at": "2019-09-13T01:43:22Z",
//     "updated_at": "2020-07-07T21:24:16Z"
//   }