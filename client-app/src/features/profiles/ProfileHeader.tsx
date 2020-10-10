import React, { useState } from 'react';
import { Avatar, Button, Col, Divider, List, Row, Statistic } from 'antd';
import { UsergroupAddOutlined, TeamOutlined } from '@ant-design/icons';
import { IProfile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';

interface IProps {
    profile: IProfile
}

const ProfileHeader: React.FC<IProps> = ({ profile }) => {

    const [buttonInfo, setButtonInfo] = useState({ text: 'Following', color: false })

    const changeButton = () => {
        setButtonInfo({ text: 'Unfollow', color: true })
    }
    const changeButtonBack = () => {
        setButtonInfo({ text: 'Following', color: false })
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
            <Row gutter={16} justify='center'>
                <Col span={12}>
                    <Statistic valueStyle={{ fontSize: '40px' }} title="Followers" value={5} prefix={<TeamOutlined />} />
                </Col>
                <Col span={12}>
                    <Statistic valueStyle={{ fontSize: '40px' }} title="Following" value={42} prefix={<UsergroupAddOutlined />} />
                </Col>
                <Divider style={{ margin: '0px 0' }} />
                <Button
                    onMouseOver={changeButton}
                    onMouseOut={changeButtonBack}
                    danger={buttonInfo.color}
                    style={{ marginTop: 16, width: '100%' }}
                    type='primary'>
                    {buttonInfo.text}
                </Button>
            </Row>
        </List.Item>
    )
}

export default observer(ProfileHeader);
