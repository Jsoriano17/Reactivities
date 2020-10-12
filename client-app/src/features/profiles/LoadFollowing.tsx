import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

interface IProps {
    content: string;
}

const LoadFollowing: React.FC<IProps> = ({ content }) => {
    return (
        <Component>
            <Spin size="large" />
            <br />
            <p>{content}</p>
        </Component>
    )
}

export default LoadFollowing
const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
