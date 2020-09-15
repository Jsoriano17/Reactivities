import React from 'react';
import { List, Button, Col, Row, Divider } from 'antd';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { IActivity } from '../../../app/models/activity';
import { ClockCircleFilled, EnvironmentFilled} from '@ant-design/icons';
import styled from 'styled-components';
import {format} from 'date-fns';

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
                    <Row align='middle'>
                        <ClockCircleFilled style={{ marginRight: "10px", fontSize: 20 }} />
                        <h4>{format(activity.date, 'h:mm a')}</h4>
                    </Row>
                </Col>
                <Col span={16}>
                    <Row align='middle'>
                        <EnvironmentFilled style={{ marginRight: "10px", fontSize: 20 }} />
                        <h4>{activity.venue}, {activity.city}</h4>
                    </Row>
                </Col>
            </Row>

            <Divider />

            <StyledH4>Attendees will go here</StyledH4>

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