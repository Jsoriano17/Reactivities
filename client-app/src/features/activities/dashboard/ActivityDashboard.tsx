import React from 'react';
import { Row, Col, List } from 'antd';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';

interface IProps {
    activities: IActivity[]
}

const ActivityDashboard: React.FC<IProps> = ({activities}) => {
    return (
        <Row>
            <Col span={15}>
                <ActivityList activities={activities} />
            </Col>
            <Col span={9}>
            <List
                    header={<div>name</div>}
                    bordered
                >
                    {activities.map((activity) => (
                        <List.Item key={activity.id}>{activity.title}</List.Item>
                    ))}
                </List>
            </Col>

        </Row>
    )
}

export default ActivityDashboard;