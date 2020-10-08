import { Tabs } from 'antd';
import React from 'react';

const ProfileContent = () => {
    const { TabPane } = Tabs;
    return (
        <div>
            <Tabs tabPosition='right'>
                <TabPane tab="About" key="1" style={{padding: '30px'}}>
                    About Content 
                </TabPane>
                <TabPane tab="Photos" key="2" style={{padding: '30px'}}>
                    Photos Content
                </TabPane>
                <TabPane tab="Activities" key="3" style={{padding: '30px'}}>
                    Activities Content
                </TabPane>
                <TabPane tab="Followers" key="4" style={{padding: '30px'}}>
                    Followers Content
                </TabPane>
                <TabPane tab="Following" key="5" style={{padding: '30px'}}>
                    Following Content
                </TabPane>
            </Tabs>
        </div>
    )
}

export default ProfileContent
