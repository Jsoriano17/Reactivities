import React, { useState, useEffect } from 'react';
import axios from "axios"
import { PageHeader } from 'antd';
import { Divider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IActivity } from '../models/activity';
import styled from 'styled-components';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { act } from 'react-dom/test-utils';

const App = () => {
  const [activities, setActivites] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0])
  }

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then(res => {
          setActivites(res.data)
        }).catch(err => {
          console.log(err)
        })
  }, [])

  const handleCreateActivity = (activity: IActivity) => {
    setActivites([...activities, activity])
    setSelectedActivity(activity)
    setEditMode(false)
  }


  const handleEditActivity = (activity: IActivity) => {
    setActivites([...activities.filter(a => a.id !== activity.id), activity])
    setSelectedActivity(activity)
    setEditMode(false)
  }

  return (
    <div className="App">
      <div style={{ display: "flex",  flexDirection: "row", margin: "20px", alignItems: 'center',}}>
        <img src="/assets/logo-black.png" style={{ fontSize: '50px', color: '#08c', margin: '0px 2%', width:"105px", height:"100px"} } alt="logo" />
        <PageHeader
          className="site-page-header"
          title="Reactivities"
          style={{marginRight: "5%"}}
        />
        <NavBar/>
        <Button icon={<PlusOutlined />} style={{margin: "0px 5%"}} type="primary" onClick={handleOpenCreateForm}>Create Activity</Button>
      </div>
      <Divider orientation="left">Activities</Divider>
      <Container>
        <ActivityDashboard activities={activities} 
        selectActivity={handleSelectActivity} 
        selectedActivity={selectedActivity}
        editMode={editMode}
        setEditMode={setEditMode}
        setSelectedActivity={setSelectedActivity}
        createActivity={handleCreateActivity}
        editActivity={handleEditActivity}

        />
      </Container>
    </div>
  )
}

export default App;

const Container =  styled.div`
margin: 30px
`