import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';


const NotFound = () => {
    return (
        <Container>
            <SearchOutlined style={{fontSize: 100}} />
            <h1>Oops - we've looked everywhere but couldn't find this.</h1>
            <Link to='/activities'>
                <Button type="primary">
                    Return To Activities Page
                </Button>
            </Link>
        </Container>
    )
}

export default NotFound;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -300px;
`