import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';

const App = () => {
  const activityStore = useContext(ActivityStore)

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent />

  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/activities' component={ActivityDashboard} />
          <Route path='/createActivity' component={ActivityForm} />
        </Switch>
      </Container>
    </>
  )
}

export default observer(App);

const Container = styled.div`
  margin: 30px
`