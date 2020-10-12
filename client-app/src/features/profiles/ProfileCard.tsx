import { Card } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { IProfile } from '../../app/models/profile';
const { Meta } = Card;

interface IProps {
    profile: IProfile
}

const ProfileCard: React.FC<IProps> = ({ profile }) => {
    return (
        <Link to={`/profile/${profile.username}`}>
            <Card
                hoverable
                style={{ width: 240, margin: '0 10px 20px 10px' }}
                cover={<img alt="example" src={profile.image || `/assets/user.png`} />}
            >
                <Meta
                    title={profile.displayName}
                    description={<span><UserOutlined /> {profile.followersCount} Followers</span>} />
            </Card>
        </Link>
    )
}

export default ProfileCard
