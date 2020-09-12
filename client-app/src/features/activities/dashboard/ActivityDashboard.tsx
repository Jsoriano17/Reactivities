import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'antd';
import ActivityList from './ActivityList';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const ActivityDashboard: React.FC = () => {
    const activityStore = useContext(ActivityStore)

    useEffect(() => {
      activityStore.loadActivities();
    }, [activityStore])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='loading content...' />
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