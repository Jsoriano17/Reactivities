import React, { useState, useEffect, SyntheticEvent, useContext } from 'react';
import { PageHeader } from 'antd';
import { Divider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IActivity } from '../models/activity';
import styled from 'styled-components';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import {observer} from 'mobx-react-lite';

const App = () => {
  const activityStore = useContext(ActivityStore)
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState('');

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0])
    setEditMode(false)
  }

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  const handleCreateActivity = (activity: IActivity) => {
    setSubmitting(true)
    agent.Activities.create(activity).then(() => {
      setActivities([...activities, activity])
      setSelectedActivity(activity)
      setEditMode(false)
    }).then(() => setSubmitting(false))
  }


  const handleEditActivity = (activity: IActivity) => {
    setSubmitting(true)
    agent.Activities.update(activity).then(() => {
      setActivities([...activities.filter(a => a.id !== activity.id), activity])
      setSelectedActivity(activity)
      setEditMode(false)
    }).then(() => setSubmitting(false))
  }

  const handleDeleteActivity = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(a => a.id !== id)])
    }).then(() => setSubmitting(false));
  }

  if (activityStore.loadingInitial) return <LoadingComponent />

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", margin: "20px", alignItems: 'center', }}>
        <img src="/assets/logo-black.png" style={{ fontSize: '50px', color: '#08c', margin: '0px 2%', width: "105px", height: "100px" }} alt="logo" />
        <PageHeader
          className="site-page-header"
          title="Reactivities"
          style={{ marginRight: "5%" }}
        />
        <NavBar />
        <Button icon={<PlusOutlined />} style={{ margin: "0px 5%" }} type="primary" onClick={handleOpenCreateForm}>Create Activity</Button>
      </div>
      <Divider orientation="left">Activities</Divider>
      <Container>
        <ActivityDashboard activities={activityStore.activities}
          selectActivity={handleSelectActivity}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
          target={target}
        />
      </Container>
    </div>
  )
}

export default observer(App);

const Container = styled.div`
margin: 30px
`