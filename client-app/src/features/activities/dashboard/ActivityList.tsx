import React, { useContext } from 'react';
import { List, Button, Col, Row } from 'antd';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';
import { Link } from 'react-router-dom';

const ActivityList: React.FC = () => {
    const activityStore = useContext(ActivityStore)
    const { activitiesByDate, deleteActivity, submitting, target } = activityStore;
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
                                <Button> {activity.category}</Button>
                            </Col>
                            <Col span={8}>
                                <Button
                                    name={activity.id}
                                    loading={target === activity.id && submitting}
                                    onClick={(e: any) => { deleteActivity(e, activity.id) }}
                                    type="primary" danger>Delete</Button>
                            </Col>
                            <Col span={8}>
                                <Link to={`/activities/${activity.id}`}>
                                    <Button type="primary">View</Button>
                                </Link>
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