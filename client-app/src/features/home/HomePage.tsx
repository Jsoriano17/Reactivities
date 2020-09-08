import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container as={Link} to='/activities'>
            <h1>HomePage</h1>
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    margin: 30px
`