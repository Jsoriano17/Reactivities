import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingComponent = () => {

    return(
        <Component>
             <Spin  size="large"/>
             <br/>
             <p>loading content...</p>
        </Component>
    )
}

export default LoadingComponent;

const Component = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
min-height: 100vh;
`
