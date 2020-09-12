import React, { useContext, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps, Link } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityDetailHeader from './ActivitiyDetailHeader';
import ActivityDetailInfo from './ActivitiyDetailInfo';
import ActivityDetailChat from './ActivityDetailChat';
import ActivityDetailSidebar from './ActivityDetailSidebar';
import styled from 'styled-components';

const { Meta } = Card;

interface DetailParams {
    id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
    const activityStore = useContext(ActivityStore);
    const { activity, loadActivity, loadingInitial } = activityStore;

    useEffect(() => {
        loadActivity(match.params.id)
    }, [loadActivity, match.params.id]);

    if (loadingInitial || !activity) return <LoadingComponent content='loading activity...' />

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

