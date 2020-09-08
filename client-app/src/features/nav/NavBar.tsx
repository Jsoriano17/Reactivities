import React, { useState, useContext } from 'react';
import { Menu, PageHeader, Button } from 'antd';
import { ContactsOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import ActivityStore from '../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

const NavBar = () => {
    const [current, setCurrent] = useState(['activity']);
    const activityStore = useContext(ActivityStore);

    const handleClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Container>
            <StyledImg src="/assets/logo-black.png" alt="logo" />
            <PageHeader
                className="site-page-header"
                title="Reactivities"
                style={{ marginRight: "5%" }}
            />
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{ width: "100%" }}>
                <Menu.Item key="activity" icon={<ContactsOutlined />}>Activities</Menu.Item>
            </Menu>
            <Button icon={<PlusOutlined />} style={{ margin: "0px 5%" }} type="primary" onClick={activityStore.openCreateForm}>Create Activity</Button>
        </Container>
    )
}

export default observer(NavBar);

const Container = styled.div`
    display: flex; 
    flex-direction: row;
    margin: 20px;
    align-items: center;
`
const StyledImg = styled.img`
    fontSize: 50px;
    color: #08c;
    margin: 0px 2%;
    width: 105px;
    height: 100px;
`