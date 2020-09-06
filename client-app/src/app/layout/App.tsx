import React, { useEffect, useContext } from 'react';
import { PageHeader } from 'antd';
import { Divider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import {observer} from 'mobx-react-lite';

const App = () => {
  const activityStore = useContext(ActivityStore)

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

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
        <Button icon={<PlusOutlined />} style={{ margin: "0px 5%" }} type="primary" onClick={activityStore.openCreateForm}>Create Activity</Button>
      </div>
      <Divider orientation="left">Activities</Divider>
      <Container>
        <ActivityDashboard />
      </Container>
    </div>
  )
}

export default observer(App);

const Container = styled.div`
margin: 30px
`