import { List } from 'antd'
import { truncate } from 'fs'
import React from 'react'
import ProfileContent from './ProfileContent'
import ProfileHeader from './ProfileHeader'

export const ProfilePage = () => {
    return (
        <>
            <List bordered={true}>
                <ProfileHeader />
            </List>
            <br/>
            <List bordered={true}>
                <ProfileContent />
            </List>
        </>
    )
}
