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
    text-align: center;
    height: 50%; 
    width: 50%; 
    overflow: auto; 
    margin: auto; 
    position: absolute; 
    top: 0; left: 0; bottom: 0; right: 0;
`