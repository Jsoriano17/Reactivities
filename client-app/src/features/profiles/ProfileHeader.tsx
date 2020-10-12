import React, { useState } from 'react';
import { Avatar, Button, Col, Divider, List, Row, Statistic } from 'antd';
import { UsergroupAddOutlined, TeamOutlined } from '@ant-design/icons';
import { IProfile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';

interface IProps {
    profile: IProfile,
    isCurrentUser: boolean,
    loading: boolean,
    follow: (username: string) => void;
    unfollow: (username: string) => void;
}

const ProfileHeader: React.FC<IProps> = ({ profile, follow, unfollow, isCurrentUser, loading }) => {

    const [buttonInfo, setButtonInfo] = useState({text: profile.following ? 'Following' : 'Not following', color: false })

    const changeButton = () => {
        if (profile.following) {
            setButtonInfo({text: 'Unfollow', color: true })
        } else {
            setButtonInfo({text: 'Follow', color: true })
        }
        
    }
    const changeButtonBack = () => {
        if (profile.following) {
            setButtonInfo({text: 'Following', color: false })
        } else {
            setButtonInfo({text: 'Not following', color: false })
        }
    }

    return (
        <List.Item >
            <Row align='middle'>
                <Col span={14}>
                    <Avatar size={150} src={profile.image || '/assets/user.png'} style={{ marginRight: '80px' }} />
                </Col>
                <Col span={10}>
                    <h1>{profile.displayName}</h1>
                </Col>
            </Row>
            <Row gutter={16} justify='center' style={{maxWidth: '220px'}}>
                <Col span={12}>
                    <Statistic valueStyle={{ fontSize: '40px' }} title="Followers" value={profile.followersCount} prefix={<TeamOutlined />} />
                </Col>
                <Col span={12}>
                    <Statistic valueStyle={{ fontSize: '40px' }} title="Following" value={profile.followingCount} prefix={<UsergroupAddOutlined />} />
                </Col>
                <Divider style={{ margin: '0px 0' }} />
                {!isCurrentUser &&
                    <Button
                        loading={loading}
                        onMouseOver={changeButton}
                        onMouseOut={changeButtonBack}
                        danger={buttonInfo.color}
                        style={{ marginTop: 16, width: '100%'}}
                        type='primary'
                        onClick={ profile.following ?
                            () => unfollow(profile.username) : 
                            () => follow(profile.username)}>
                        {buttonInfo.text}
                    </Button>
                }
            </Row>
        </List.Item>
    )
}

export default observer(ProfileHeader);
