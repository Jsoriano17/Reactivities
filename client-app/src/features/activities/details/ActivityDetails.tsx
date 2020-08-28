import React from 'react';
import { Card } from 'antd';
import { Button, Radio } from 'antd';
import { IActivity } from '../../../app/models/activity';
import { IpcNetConnectOpts } from 'net';


const { Meta } = Card;

interface IProps {
    activity: IActivity;
}

const ActivityDetails: React.FC<IProps> = ({activity}) => {

    return (
            <Card style={{margin: ' 15px 30px', width: '90%'}} 
            cover={<img alt="placeholder" src={`/assets/categoryImages/${activity.category}.jpg`} />}
            >
                <Meta title={activity.title} description={activity.date} />
                <p>{activity.description}</p>
                <Radio.Group style={{ display: 'flex', justifyContent: 'center' }}>
                    <Radio.Button style={{ width: '100%', textAlign: 'center' }} >Edit</Radio.Button>
                    <Radio.Button style={{ width: '100%', textAlign: 'center' }} >Cancel</Radio.Button>
                </Radio.Group>
            </Card>
        
    )
}

export default ActivityDetails;

