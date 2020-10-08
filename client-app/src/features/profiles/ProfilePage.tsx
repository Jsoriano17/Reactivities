import { List } from 'antd'
import { truncate } from 'fs'
import React from 'react'
import ProfileHeader from './ProfileHeader'

export const ProfilePage = () => {
    return (
        <>
            <List bordered={true}>
                <ProfileHeader/>
            </List>
        </>
    )
}
