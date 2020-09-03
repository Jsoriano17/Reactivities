import React, { SyntheticEvent } from 'react';
import { Row, Col } from 'antd';
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
    deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: boolean;
    target: string;
}

const ActivityDashboard: React.FC<IProps> = ({ 
    activities, 
    selectActivity, 
    selectedActivity, 
    editMode, 
    setEditMode, 
    setSelectedActivity, 
    createActivity, 
    editActivity,
    deleteActivity,
    submitting,
    target
 }) => {
    return (
        <Component>
            <Row>
                <Col span={16}>
                    <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                    deleteActivity={deleteActivity} 
                    submitting={submitting}
                    target={target}
                    />
                </Col>
                <Col span={8}>
                    {selectedActivity && !editMode &&
                        <ActivityDetails activity={selectedActivity} setEditMode={setEditMode} setSelectedActivity={setSelectedActivity} />}
                    {editMode && <ActivityForm
                        key={selectedActivity && selectedActivity.id || 0}
                        setEditMode={setEditMode}
                        activity={selectedActivity!}
                        createActivity={createActivity}
                        editActivity={editActivity} 
                        submitting={submitting}
                        />}
                        
                </Col>
            </Row>
        </Component>
    )
}

export default ActivityDashboard;

const Component = styled.div`
margin: 20px 4%;
`