import React from 'react';
import { Row, Col, List } from 'antd';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';

interface IProps {
    activities: IActivity[]
}

const ActivityDashboard: React.FC<IProps> = ({ activities }) => {
    return (
        <Row>
            <Col span={16}>
                <ActivityList activities={activities} />
            </Col>
            <Col span={8}>
                <ActivityDetails />
            </Col>
        </Row>
    )
}

export default ActivityDashboard;