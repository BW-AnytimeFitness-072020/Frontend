import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

function Home(props) {

    return (
            <Row>
            <Col>
        <Carousel controls={false} indicators={false} wrap={true}>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
                    alt='Women exercising'
                    width='100%'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1562771379-44b243dedac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Man doing pushups with kettlebells'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Woman pushing weights'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1585681614545-cd8c7b9d92b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Man with barbell'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1588482524100-2b3c0d36e348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Woman stretching'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Runner stretching'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Woman stretching on balanceball'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1588783256125-254ebad5ecbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'}
                        alt='Woman holding yoga pose'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1585834830884-392089dfd9f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Woman with kettle bells'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Woman coaching man doing pushups'
                        width='100%'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                        className='d-block w-100'
                        src={'https://images.unsplash.com/photo-1572341396754-c8b300b56292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        alt='Woman on yoga mat'
                        width='100%'
                    />
            </Carousel.Item>
        </Carousel>
        </Col>
        </Row>
    )
}

export default Home