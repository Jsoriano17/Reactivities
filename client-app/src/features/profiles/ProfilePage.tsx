import { List } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import LoadingComponent from '../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../app/stores/rootStore'
import ProfileContent from './ProfileContent'
import ProfileHeader from './ProfileHeader'

interface RouteParams {
    username: string
}

interface IProps extends RouteComponentProps<RouteParams> { }

const ProfilePage: React.FC<IProps> = ({ match }) => {
    const rootStore = useContext(RootStoreContext);
    const { loadingProfile, profile, loadProfile, follow, unfollow, isCurrentUser, loading } = rootStore.profileStore;

    useEffect(() => {
        loadProfile(match.params.username)
    }, [loadProfile, match])

    if (loadingProfile) return <LoadingComponent content='Loading profile...' />
    return (
        <>
            <List bordered={true}>
                <ProfileHeader
                    profile={profile!}
                    isCurrentUser={isCurrentUser}
                    loading={loading}
                    follow={follow}
                    unfollow={unfollow}
                />
            </List>
            <br />
            <List bordered={true}>
                <ProfileContent />
            </List>
        </>
    )
}

export default observer(ProfilePage);
