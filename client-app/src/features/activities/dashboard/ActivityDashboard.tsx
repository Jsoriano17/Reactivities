import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import styled from 'styled-components'
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';

const ActivityDashboard: React.FC = () => {
    const activityStore = useContext(ActivityStore)
    const {editMode, activity} = activityStore
    return (
        <Component>
            <Row>
                <Col span={16}>
                    <ActivityList />
                </Col>
                <Col span={8}>
                    <h2>Activity filter</h2>
                </Col>
            </Row>
        </Component>
    )
}

export default observer(ActivityDashboard);

const Component = styled.div`
margin: 20px 4%;
`