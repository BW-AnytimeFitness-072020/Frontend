import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AboutCard from './AboutCard'
import { gitHubUsers } from '../constants/index'
import Error from './Error'


function About() {
    const [userData, setUserData] = useState([])
    const [error, setError] = useState('')
    
    {/* calls getAllData on the first render and sets the response into state via setUserData */}
    useEffect(() => {
        getAllData()
            .then ( response => {
                setUserData(response)
            })
            .catch(err => {
                console.log(`Something went wrong. The error was ${err}`)
            })
    }, [])

    {/* getAllData calls getUserData and passes in the array (gitHubUsers) to iterate over -- Promise.all() gathers the responses from each axios call and returns one big object after all axios calls have completed */}
    function getAllData() {
        return Promise.all(gitHubUsers.map( item => getUserData(item)))
    }

    {/* getUserData retrieves individual user profile data from GitHub and returns the entire object */}
    function getUserData(user) {
         return axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                  return response.data
            })
            
            .catch(err => {
                console.log(`Something went wrong. The error was ${err}`)
                setError(err)
            })
        }
    
    
   
    return (
        <Row>
        <Col>
            {
                !error ? <AboutCard data={userData} /> : <Error error={error} />
            }
            </Col>
        </Row>
    )
}

export default About

