import React, { SyntheticEvent } from 'react';
import { IActivity } from '../../../app/models/activity';
import { List, Button, Col, Row } from 'antd';


interface IProps {
    activities: IActivity[]
    selectActivity: (id: string) => void;
    deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: boolean;
    target: string;
}

const ActivityList: React.FC<IProps> = ({ activities, selectActivity, deleteActivity, submitting, target}) => {
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

            {activities.map(activity => (
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

export default ActivityList;