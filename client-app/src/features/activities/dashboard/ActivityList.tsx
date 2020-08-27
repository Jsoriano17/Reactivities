import React from 'react';
import { IActivity } from '../../../app/models/activity';
import { List, Button, Col, Row } from 'antd';


interface IProps {
    activities: IActivity[]
}

const ActivityList: React.FC<IProps> = ({ activities }) => {
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
                        <Row style={{marginTop: '70px'}}>
                            <Col span={12}>
                                <Button > {activity.category}</Button>
                            </Col>
                            <Col span={12}>
                                <Button type="primary">View</Button>
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