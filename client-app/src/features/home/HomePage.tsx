import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container as={Link} to='/activities'>
            <h1>HomePage</h1>
            <h3>go to <Link to='/activities'>activities</Link></h3>
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    margin: 30px
`