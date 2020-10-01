import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'antd';
import ActivityList from './ActivityList';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { RootStoreContext } from '../../../app/stores/rootStore';

const ActivityDashboard: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {loadActivities, loadingInitial} = rootStore.activityStore;

    useEffect(() => {
      loadActivities();
    }, [loadActivities])
  
    if (loadingInitial) return <LoadingComponent content='loading content...' />
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