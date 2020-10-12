import React, { useContext, useEffect } from 'react'
import { RootStoreContext } from '../../app/stores/rootStore'
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import { observer } from 'mobx-react-lite';
import LoadFollowing from './LoadFollowing';

const ProfileFollowings = () => {
    const rootStore = useContext(RootStoreContext);
    const {
        profile,
        followings,
        loading,
        activeTab
    } = rootStore.profileStore;

    if(loading) return <LoadFollowing content={ activeTab == 4 ? "Loading Followers" : "Loading Following"}/>

    return (
        <Container>
            {followings.map(profile => (
                <ProfileCard profile={profile}/>
            ))}
        </Container>
    )
}

export default observer(ProfileFollowings);

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

