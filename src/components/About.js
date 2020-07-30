import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import AboutCard from './AboutCard'
import { gitHubUsers } from '../constants/index'


function About() {
    const [userData, setUserData] = useState([])
    const [toggle, setToggle] = useState(false)
    

    useEffect(() => {
        getAllData()
            .then ( response => {
                setUserData(response)
            })
            .catch(err => {
                console.log(`Something went wrong. The error was ${err}`)
            })
    }, [])

    function getAllData() {
        return Promise.all(gitHubUsers.map( item => getUserData(item)))
    }

    function getUserData(user) {
         return axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                  return response.data
            })
            
            .catch(err => {
                console.log(`Something went wrong. The error was ${err}`)
            })
        }
    
    
   
    return (
        <Container>
            <AboutCard data={userData} />
        </Container>
    )
}

export default About

