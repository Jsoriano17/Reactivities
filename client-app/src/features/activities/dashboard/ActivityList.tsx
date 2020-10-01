import React, { Fragment, useContext } from 'react';
import { Button, List } from 'antd';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';
import ActivityListItem from './ActivityListItem';
import styled from 'styled-components';
import { RootStoreContext } from '../../../app/stores/rootStore';

const ActivityList: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const { activitiesByDate } = rootStore.activityStore;
    return (
        <>
            {activitiesByDate.map(([group, activities]) => (
                <Fragment key={group}>
                    <Button type="primary">
                        {group}
                    </Button>
                    <Component>
                        <List
                            bordered
                            itemLayout="vertical"
                            size="default"
                        >
                            {activities.map(activity => (
                                <ActivityListItem key={activity.id} activity={activity} />
                            ))
                            }
                        </List >
                    </Component>
                </Fragment>
            ))}
        </>
    )
}

export default observer(ActivityList);

const Component = styled.div`
    margin: 3% 0; 
`