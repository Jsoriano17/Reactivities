import React, { useContext, useState } from 'react';
import { Menu, PageHeader } from 'antd';
import { ContactsOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import { Dropdown, Image, Menu as SemanticMenu } from 'semantic-ui-react';

const NavBar: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const { user, logout } = rootStore.userStore;
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
                title={ <Link to='/' style={{color: 'black'}}>
                            Reactivities
                        </Link>}
                style={{ marginRight: "5%" }}
            />

            < Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{ width: "100%" }}>
                <Menu.Item key="activity" icon={<ContactsOutlined />}>
                    <Link to='/activities'>Activities</Link>
                </Menu.Item>
                <Menu.Item key="create" icon={<PlusOutlined />}>
                    <Link to='/createActivity'>Create Activity</Link>
                </Menu.Item>

                {
                    user &&
                    <Menu.Item key='account'>
                        <SemanticMenu.Item position='right'>
                            <Image avatar spaced='right' src={user.image || '/assets/user.png'} />
                            <Dropdown pointing='top left' text={user.displayName}>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to={`/profile/${user.username}`} text='My profile' icon='user' />
                                    <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </SemanticMenu.Item>
                    </Menu.Item>
                }
            </Menu >
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
