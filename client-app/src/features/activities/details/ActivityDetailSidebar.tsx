import React from 'react';
import { List, Badge } from 'antd';
import { IAttendee } from '../../../app/models/activity';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

interface IProps {
    attendees: IAttendee[]
}

const ActivityDetailSidebar: React.FC<IProps> = ({ attendees }) => {

    return (
        <List bordered header={`${attendees.length} ${attendees.length === 1 ? 'Person' : 'People'} going`}>
            {attendees.map(attendee => {
                if (attendee.isHost) {
                    return <Badge.Ribbon text='Host' color="orange">
                        <List.Item key={attendee.username}>
                            <List.Item.Meta
                                avatar={<img src={attendee.image || `/assets/user.png`} width="60px" height="60px" alt='user' />}
                                title={
                                    <Link to={`/profile/${attendee.username}`}>
                                        <h2>{attendee.displayName}</h2>
                                    </Link>
                                }
                                description={attendee.following && "Following"}
                            />
                        </List.Item >
                    </Badge.Ribbon>
                } else {
                    return <List.Item key={attendee.username}>
                        <List.Item.Meta
                            avatar={<img src={attendee.image || `/assets/user.png`} width="60px" height="60px" alt='user' />}
                            title={
                                <Link to={`/profile/${attendee.username}`}>
                                    <h2>{attendee.displayName}</h2>
                                </Link>
                            }
                            
                            description={attendee.following && "Following"}
                            
                        />
                    </List.Item >
                }
            })}
        </List >
    )
}

export default observer(ActivityDetailSidebar); 