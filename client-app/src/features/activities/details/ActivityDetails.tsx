import React, { useContext, useEffect } from 'react';
import { Card } from 'antd';
import { Radio } from 'antd';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const { Meta } = Card;

interface DetailParams{
    id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
    const activityStore = useContext(ActivityStore);
    const {activity, openEditForm, cancelSelectedActivity,loadActivity, loadingInitial } = activityStore;

    useEffect(() => {
        loadActivity(match.params.id)
    }, [loadActivity])

    if (loadingInitial || !activity) return <LoadingComponent content='loading activity...' />

    return (
            <Card style={{margin: ' 15px 30px', width: '90%'}} 
            cover={<img alt="placeholder" src={`/assets/categoryImages/${activity!.category}.jpg`} />}
            >
                <Meta title={activity!.title} description={activity!.date} />
                <p>{activity!.description}</p>
                <Radio.Group style={{ display: 'flex', justifyContent: 'center' }}>
                    <Radio.Button onClick={() => openEditForm(activity!.id)} style={{ width: '100%', textAlign: 'center' }} >Edit</Radio.Button>
                    <Radio.Button onClick={() => history.push('/activities')} style={{ width: '100%', textAlign: 'center' }} >Cancel</Radio.Button>
                </Radio.Group>
            </Card>
        
    )
}

export default observer(ActivityDetails);

