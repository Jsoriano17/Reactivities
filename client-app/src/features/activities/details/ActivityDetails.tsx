import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'antd';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityDetailHeader from './ActivitiyDetailHeader';
import ActivityDetailInfo from './ActivitiyDetailInfo';
import ActivityDetailChat from './ActivityDetailChat';
import ActivityDetailSidebar from './ActivityDetailSidebar';
import styled from 'styled-components';
import { RootStoreContext } from '../../../app/stores/rootStore';

interface DetailParams {
    id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({ match, history }) => {
    const rootStore = useContext(RootStoreContext);
    const { activity, loadActivity, loadingInitial } = rootStore.activityStore;

    useEffect(() => {
        loadActivity(match.params.id);
    }, [loadActivity, match.params.id, history]);

    if (loadingInitial || !activity)
        return <LoadingComponent content='loading activity...' />

    if (!activity)
        return <h2>Activity no found</h2>

    return (
        <Component>
            <Row>
                <Col span={17}>
                    <ActivityDetailHeader activity={activity} />
                    <ActivityDetailInfo activity={activity} />
                    <ActivityDetailChat />
                </Col>
                <Col span={7}>
                    <ActivityDetailSidebar />
                </Col>
            </Row>
        </Component>
    )
}

export default observer(ActivityDetails);

const Component = styled.div`
margin: 20px 4%;
`

