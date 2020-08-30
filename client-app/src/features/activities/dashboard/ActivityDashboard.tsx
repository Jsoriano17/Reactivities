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
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
}

const ActivityDashboard: React.FC<IProps> = ({ activities, selectActivity, selectedActivity, editMode, setEditMode, setSelectedActivity, createActivity, editActivity }) => {
    return (
        <Component>
            <Row>
                <Col span={16}>
                    <ActivityList activities={activities} selectActivity={selectActivity} />
                </Col>
                <Col span={8}>
                    {selectedActivity && !editMode &&
                        <ActivityDetails activity={selectedActivity} setEditMode={setEditMode} setSelectedActivity={setSelectedActivity} />}
                    {editMode && <ActivityForm
                        setEditMode={setEditMode}
                        activity={selectedActivity!}
                        createActivity={createActivity}
                        editActivity={editActivity} />}
                </Col>
            </Row>
        </Component>
    )
}

export default ActivityDashboard;

const Component = styled.div`
margin: 20px 4%;
`