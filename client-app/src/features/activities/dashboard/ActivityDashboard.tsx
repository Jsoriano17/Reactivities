import React, { SyntheticEvent, useContext } from 'react';
import { Row, Col } from 'antd';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import styled from 'styled-components'
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: boolean;
    target: string;
}

const ActivityDashboard: React.FC<IProps> = ({
    setEditMode,
    setSelectedActivity,
    editActivity,
    deleteActivity,
    submitting,
    target
}) => {

    const activityStore = useContext(ActivityStore)
    const {editMode, selectedActivity} = activityStore
    return (
        <Component>
            <Row>
                <Col span={16}>
                    <ActivityList
                        deleteActivity={deleteActivity}
                        submitting={submitting}
                        target={target}
                    />
                </Col>
                <Col span={8}>
                    {selectedActivity && !editMode &&
                        <ActivityDetails setEditMode={setEditMode} setSelectedActivity={setSelectedActivity} />}
                    {editMode && <ActivityForm
                        key={selectedActivity && selectedActivity.id || 0}
                        setEditMode={setEditMode}
                        activity={selectedActivity!}
                        editActivity={editActivity}
                        submitting={submitting}
                    />}

                </Col>
            </Row>
        </Component>
    )
}

export default observer(ActivityDashboard);

const Component = styled.div`
margin: 20px 4%;
`