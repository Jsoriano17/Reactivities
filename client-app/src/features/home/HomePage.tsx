import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';
import backgroundImg from '../../app/assets/background.jpg'

const HomePage = () => {
    const rootStore = useContext(RootStoreContext);
    const { isLoggedIn, user } = rootStore.userStore;
    const { openModal } = rootStore.modalStore

    return (
        <BackgroundDiv>
            <Container>
                <StyledDiv>
                    <StyledDiv2>
                        <img src="/assets/logo-black.png" alt="logo" width="60px" height="60px" />
                        <h1 style={{ fontSize: 60, margin: 0 }}>Reactivities</h1>
                    </StyledDiv2>

                    {isLoggedIn && user ? (
                        <>
                            <h3 style={{ fontSize: 20, margin: '0 0 25px 0'  }}>Welcome back {user.displayName}</h3>
                            <Link to='/activities'>
                                <Button ghost>Go To Activities</Button>
                            </Link>
                        </>
                    ) : (
                            <>
                                <h3 style={{ fontSize: 20, margin: '0 0 25px 0' }}>Welcome To Reactivities</h3>
                                <StyledDiv2>
                                    <Button style={{ marginRight: '10px' }} onClick={() => openModal(<LoginForm />)} ghost>Login</Button>
                                    <Button style={{ marginLeft: '10px' }} onClick={() => openModal(<RegisterForm />)} ghost>Sign Up</Button>
                                </StyledDiv2>
                            </>
                        )}

                </StyledDiv>
            </Container>
        </BackgroundDiv>
    )
}

export default HomePage;
const BackgroundDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundImg});
    background-position: 0 -155px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`

const Container = styled.div`
    height: 30%; 
    width: 45%; 
    margin: auto; 
    position: absolute; 
    top: 0; left: 0; bottom: 0; right: 0;
    overflow: hidden; 
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