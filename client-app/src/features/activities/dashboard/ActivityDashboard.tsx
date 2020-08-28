import React from 'react';
import { Row, Col, List } from 'antd';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import styled from 'styled-components'

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
}

const ActivityDashboard: React.FC<IProps> = ({ activities, selectActivity, selectedActivity}) => {
    return (
        <Component>
            <Row>
                <Col span={16}>
                    <ActivityList activities={activities} selectActivity={selectActivity}/>
                </Col>
                <Col span={8}>
                    {selectedActivity && <ActivityDetails activity={selectedActivity} /> }
                    <ActivityForm />
                </Col>
            </Row>
        </Component>
    )
}

export default ActivityDashboard;

const Component = styled.div`
margin: 20px 4%;
`