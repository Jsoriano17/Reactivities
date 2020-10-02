import { List } from 'antd';
import React from 'react';
import { IActivity } from '../../../app/models/activity';
import { CalendarFilled, EnvironmentFilled, InfoCircleFilled } from '@ant-design/icons';
import { format } from 'date-fns';
import styled from 'styled-components';

const ActivityDetailInfo: React.FC<{ activity: IActivity }> = ({ activity }) => {
    return (
        <>
            <List
                size="large"
                bordered
                style={{ width: 750, margin: '30px 0' }}
            >
                <List.Item>
                    <Container>
                        <InfoCircleFilled style={{ fontSize: 30, marginRight: 15, marginTop: 0 }} /> {activity.description}
                    </Container>
                </List.Item>
                <List.Item>
                    <Container>
                        <CalendarFilled style={{ fontSize: 30, marginRight: 15, marginTop: 0 }} /> {format(activity.date, 'eee do MMMM')} at {format(activity.date, 'h:mm a')}
                    </Container>
                </List.Item>
                <List.Item>
                    <Container>
                        <EnvironmentFilled style={{ fontSize: 30, marginRight: 15, marginTop: 0 }} /> {activity.venue}, {activity.city}
                    </Container>
                </List.Item>
            </List>
        </>
    )
}

export default ActivityDetailInfo;

const Container = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center;
`