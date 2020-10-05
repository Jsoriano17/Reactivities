import React from 'react';
import { List, Button, Col, Row, Divider } from 'antd';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { IActivity } from '../../../app/models/activity';
import { ClockCircleFilled, EnvironmentFilled} from '@ant-design/icons';
import styled from 'styled-components';
import {format} from 'date-fns';
import { ActivityListItemAttendees } from './ActivityListItemAttendees';

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
    return (
        <List.Item>
            <List.Item.Meta
                avatar={<img src='/assets/user.png' width="80px" height="80px" style={{ borderRadius: '50%' }} alt='user'/>}
                title={<h2>{activity.title}</h2>}
                description="Hosted by Bob"
            />

            <Divider />

            <Row>
                <Col span={8}>
                    <Container>
                        <ClockCircleFilled style={{ marginRight: "10px", fontSize: 20 }} />
                        <h4 style={{margin: 0}}>{format(activity.date, 'h:mm a')}</h4>
                    </Container>
                </Col>
                <Col span={16}>
                    <Container>
                        <EnvironmentFilled style={{ marginRight: "10px", fontSize: 20 }} />
                        <h4 style={{margin: 0}}>{activity.venue}, {activity.city}</h4>
                    </Container>
                </Col>
            </Row>

            <Divider />

            <ActivityListItemAttendees attendees={activity.attendees}/>

            <Row style={{ marginTop: '30px' }}>
                <Col span={22}>
                    <h4> {activity.description}</h4>
                </Col>
                <Col span={2}>
                    <Link to={`/activities/${activity.id}`}>
                        <Button type="primary">View</Button>
                    </Link>
                </Col>
            </Row>
        </List.Item >
    )
}

export default observer(ActivityListItem);

const StyledH4 = styled.h4`
    background: #f0f0f0;
    padding: 15px;
    border: 1px solid #d1d1d1;
`
const Container = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center;
`