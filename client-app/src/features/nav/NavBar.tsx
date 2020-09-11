import React, { useState, useContext } from 'react';
import { Menu, PageHeader, Button } from 'antd';
import { ContactsOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    const [current, setCurrent] = useState(['activity']);

    const handleClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Container>
            <Link to='/' style={{ margin: '0px 2%' }}>
                <StyledImg src="/assets/logo-black.png" alt="logo" />
            </Link>
            <PageHeader
                className="site-page-header"
                title="Reactivities"
                style={{ marginRight: "5%" }}
            />

            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{ width: "100%" }}>
                <Menu.Item key="activity" icon={<ContactsOutlined />}>
                    <Link to='/activities'>Activities</Link>
                </Menu.Item>
            </Menu>
            <Link to='/createActivity' style={{ margin: "0px 5%" }}>
                <Button icon={<PlusOutlined />} type="primary">Create Activity</Button>
            </Link>
        </Container >
    )
}

export default observer(NavBar);

const Container = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    position:fixed;
    width:100%;
    left:0;
    top:0;
    right: 0;
    z-index: 1000;
    background: white;
`
const StyledImg = styled.img`
    fontSize: 50px;
    color: #08c;
    margin: 0px 2%;
    width: 105px;
    height: 100px;
`
