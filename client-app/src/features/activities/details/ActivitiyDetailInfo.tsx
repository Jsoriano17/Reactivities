import { Button, List } from 'antd';
import React from 'react';
import { IActivity } from '../../../app/models/activity';
import { CalendarFilled, EnvironmentFilled, InfoCircleFilled  } from '@ant-design/icons';

const ActivityDetailInfo: React.FC<{ activity: IActivity }> = ({ activity }) => {
    return (
        <>
            <List
                size="large"
                bordered
                style={{ width: 750, margin: '30px 0' }}
            >
                <List.Item>
                    <InfoCircleFilled  style={{fontSize: 30, marginRight: 15}}/> {activity.description}
                </List.Item>
                <List.Item>
                    <CalendarFilled style={{fontSize: 30, marginRight: 15}}/> {activity.date}
                </List.Item>
                <List.Item>
                    <EnvironmentFilled style={{fontSize: 30, marginRight: 15}}/> {activity.venue}, {activity.city}
                </List.Item>
            </List>
        </>
    )
}

export default ActivityDetailInfo; 