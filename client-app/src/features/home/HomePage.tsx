import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { RootStoreContext } from '../../app/stores/rootStore';

const HomePage = () => {
    const rootStore = useContext(RootStoreContext);
    const { isLoggedIn, user } = rootStore.userStore;

    return (
        <Container>
            <StyledDiv>
                <StyledDiv2>
                    <img src="/assets/logo-black.png" alt="logo" width="60px" height="60px" />
                    <h1 style={{ fontSize: 60 }}>Reactivities</h1>
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
                                <Link to='/login'>
                                    <Button>Login</Button>
                                </Link>
                                <Link to='/register'>
                                    <Button>Sign Up</Button>
                                </Link>
                            </StyledDiv2>
                        </>
                    )}

            </StyledDiv>
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -160px;
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
    align-items: baseline;
`