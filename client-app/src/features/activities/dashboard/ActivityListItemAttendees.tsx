import { Popover } from 'antd'
import React from 'react'
import { Image, List } from 'semantic-ui-react'
import { IAttendee } from '../../../app/models/activity'

interface IProps {
    attendees: IAttendee[]
}

export const ActivityListItemAttendees: React.FC<IProps> = ({ attendees }) => {
    return (
        <List horizontal>
            {attendees.map((attendee) => (
                <List.Item key={attendee.username}>
                    <Popover content={attendee.displayName}>
                        <Image size='mini' circular src={attendee.image || '/assets/user.png'} />
                    </Popover>
                </List.Item>
            ))}
        </List>
    )
}
