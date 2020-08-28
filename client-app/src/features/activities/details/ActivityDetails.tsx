import React from 'react';
import { Card } from 'antd';
import { Button, Radio } from 'antd';

const { Meta } = Card;

const ActivityDetails = () => {
    
    return (
        <Card
            style={{ margin: '0 30px', width: '90%' }}
            cover={<img alt="placeholder" src="/assets/placeholder.png" />}
        >
            <Meta title="Title" description="Date" />
            <p>Description</p>
            <Radio.Group style={{ display: 'flex', justifyContent: 'center'}}>
                <Radio.Button style={{width:'100%', textAlign: 'center'}} >Edit</Radio.Button>
                <Radio.Button style={{width:'100%', textAlign: 'center'}} >Cancel</Radio.Button>
            </Radio.Group>
        </Card>
    )
}

export default ActivityDetails;