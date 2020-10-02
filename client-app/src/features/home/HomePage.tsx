import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';

const HomePage = () => {
    const rootStore = useContext(RootStoreContext);
    const { isLoggedIn, user } = rootStore.userStore;
    const { openModal } = rootStore.modalStore

    return (
        <Container>
            <StyledDiv>
                <StyledDiv2>
                    <img src="/assets/logo-black.png" alt="logo" width="60px" height="60px" />
                    <h1 style={{ fontSize: 60,  margin: 0 }}>Reactivities</h1>
                </StyledDiv2>

                {isLoggedIn && user ? (
                    <>
                        <h3 style={{ fontSize: 20 }}>Welcome back {user.displayName}</h3>
                        <Link to='/activities'>
                            <Button>Go To Activities</Button>
                        </Link>
                    </>
                ) : (
                        <>
                            <h3 style={{ fontSize: 20 }}>Welcome To Reactivities</h3>
                            <StyledDiv2>
                                <Button style={{ marginRight: '10px' }} onClick={() => openModal(<LoginForm />)}>Login</Button>
                                <Button style={{ marginLeft: '10px' }} onClick={() => openModal(<RegisterForm />)}>Sign Up</Button>
                            </StyledDiv2>
                        </>
                    )}

            </StyledDiv>
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    height: 50%; 
    width: 50%; 
    overflow: auto; 
    margin: auto; 
    position: absolute; 
    top: 0; left: 0; bottom: 0; right: 0;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`
const StyledDiv2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`