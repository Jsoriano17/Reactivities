import { Button, Card, Col, Divider, Row } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { IActivity } from '../../../app/models/activity';

const ActivityDetailHeader: React.FC<{ activity: IActivity }> = ({ activity }) => {
    return (
        <Card
            style={{ width: 750 }}
            cover={
                <StyledDiv>
                    <img
                        alt="example"
                        src={`/assets/categoryImages/${activity.category}.jpg`}
                        width="100%"
                        style={{ filter: 'brightness(30%)' }}
                    />
                    <StyledDiv2>
                        <h1 style={{ color: 'white' }}>{activity.title}</h1>
                        <h3 style={{ color: 'white' }}>{activity.date}</h3>
                        <h4 style={{ color: 'white' }}>hosted by bob</h4>
                    </StyledDiv2>

                </StyledDiv>
            }
        >
            <Row>
                <Col span={5}>
                    <Button type="primary" size='middle'>Join Activity</Button>
                </Col>
                <Col span={15}>
                    <Button type="primary" danger size='middle'>Cancel Attendance</Button>
                </Col>
                <Col span={4}>
                    <Button size='middle'>Manage Event</Button>
                </Col>
            </Row>
        </Card>
    )
}

export default observer(ActivityDetailHeader);

const StyledDiv = styled.div`
    position: relative;
`

const StyledDiv2 = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 30px;
    margin-left: 40px;
`