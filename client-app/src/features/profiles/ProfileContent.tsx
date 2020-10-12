import { PageHeader, Tabs } from 'antd';
import React, { useContext } from 'react';
import ProfilePhotos from './ProfilePhotos';
import { RootStoreContext } from '../../app/stores/rootStore';
import { CameraOutlined, InfoOutlined, HomeOutlined, UsergroupAddOutlined, TeamOutlined } from '@ant-design/icons';
import ProfileFollowings from './ProfileFollowings';


const ProfileContent = () => {
    const { TabPane } = Tabs;
    const rootStore = useContext(RootStoreContext);
    const { profile, setActiveTab } = rootStore.profileStore;

    return (
        <div>
            <Tabs tabPosition='right' onChange={(e) => setActiveTab(e)}>
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
                        title={`People following ${profile!.displayName}`}
                    />
                    <ProfileFollowings />
                </TabPane>
                <TabPane tab="Following" key="5" style={{ padding: '0 30px 30px 30px' }}>
                    <PageHeader
                        avatar={{ icon: <UsergroupAddOutlined />, size: 40 }}
                        title={`People ${profile!.displayName} is following`}
                    />
                    <ProfileFollowings />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default ProfileContent
