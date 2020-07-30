import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import AboutCard from './AboutCard'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { gitHubUsers } from '../constants/index'


function About() {
    const [userData, setUserData] = useState([])
    const [toggle, setToggle] = useState(false)
    

    // setUserData([...userData, 'test'])
    // console.log(userData)
    
    function getUserData() {
        let data = []
        
        gitHubUsers.map( (user) => {
         axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                 data.push(response.data)
                // debugger
                // console.log(userData)
                // console.log(response)
            })
            
            .catch(err => {
                console.log(`Something went wrong. The error was ${err}`)
            })
        })
        setUserData(data)
        return data
    }
    useMemo(() => {
        getUserData()
        setToggle(!toggle)
    }, [])
    
   
    return (
        <Container>
            <AboutCard data={userData} />
        </Container>
    )
}

export default About

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