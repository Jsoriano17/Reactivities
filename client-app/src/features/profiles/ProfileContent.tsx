import { PageHeader, Tabs } from 'antd';
import React from 'react';
import ProfilePhotos from './ProfilePhotos';
import { CameraOutlined, InfoOutlined, HomeOutlined, UsergroupAddOutlined, TeamOutlined } from '@ant-design/icons';


const ProfileContent = () => {
    const { TabPane } = Tabs;
    return (
        <div>
            <Tabs tabPosition='right'>
                <TabPane tab="About" key="1" style={{ padding: '0 30px 30px 30px' }}>
                    <PageHeader
                        avatar={{ icon: <InfoOutlined />, size: 40 }}
                        title="About"
                    />
                </TabPane>
                <TabPane tab="Photos" key="2" style={{ padding: '0 30px 30px 30px', position: 'relative' }}>
                    <PageHeader
                        avatar={{ icon: <CameraOutlined />, size: 40 }}
                        title="Photos"
                    />
                    <ProfilePhotos />
                </TabPane>
                <TabPane tab="Activities" key="3" style={{ padding: '0 30px 30px 30px' }}>
                    <PageHeader
                        avatar={{ icon: <HomeOutlined />, size: 40 }}
                        title="Activities"
                    />
                </TabPane>
                <TabPane tab="Followers" key="4" style={{ padding: '0 30px 30px 30px' }}>
                    <PageHeader
                        avatar={{ icon: <TeamOutlined />, size: 40 }}
                        title="Followers"
                    />
                </TabPane>
                <TabPane tab="Following" key="5" style={{ padding: '0 30px 30px 30px' }}>
                    <PageHeader
                        avatar={{ icon: <UsergroupAddOutlined />, size: 40 }}
                        title="Following"
                    />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default ProfileContent
