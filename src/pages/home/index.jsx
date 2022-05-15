import React from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';
import ListData from './components/listData';


function Home() {
    return (
        <Container>
            <Row>
                <div className="title">
                    <h1>List Hospital</h1>
                </div>
                <ListData />

            </Row>
        </Container>
    )
}

export default Home;