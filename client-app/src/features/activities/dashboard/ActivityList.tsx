import React, { SyntheticEvent, useContext } from 'react';
import { IActivity } from '../../../app/models/activity';
import { List, Button, Col, Row } from 'antd';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';

interface IProps {
    deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: boolean;
    target: string;
}

const ActivityList: React.FC<IProps> = ({ deleteActivity, submitting, target}) => {
    const activityStore = useContext(ActivityStore)
    const {activitiesByDate, selectActivity} = activityStore;
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}>

            {activitiesByDate.map(activity => (
                <>
                    <List.Item key={activity.id} extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />} >
                        <h2>{activity.title}</h2>
                        <h4>{activity.date}</h4>
                        <div> {activity.description}</div>
                        <div> {activity.city}, {activity.venue}</div>
                        <Row style={{ marginTop: '70px' }}>
                            <Col span={8}>
                                <Button > {activity.category}</Button>
                            </Col>
                            <Col span={8}>
                                <Button 
                                name={activity.id} 
                                loading={target === activity.id && submitting} 
                                onClick={(e: any) => {deleteActivity(e, activity.id)}}
                                type="primary" danger>Delete</Button>
                            </Col>
                            <Col span={8}>
                                <Button onClick={() => selectActivity(activity.id)} type="primary">View</Button>
                            </Col>
                        </Row>
                    </List.Item>
                </>
            ))
            }
        </List >
    )
}

export default observer(ActivityList);