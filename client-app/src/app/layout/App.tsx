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
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App = () => {
  const activityStore = useContext(ActivityStore)

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content='loading content...' />

  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/activities' component={ActivityDashboard} />
          <Route path='/activities/:id' component={ActivityDetails} />
          <Route
            path={['/createActivity', '/manage/:id']}
            component={ActivityForm}
          />
        </Switch>
      </Container>
    </>
  )
}

export default observer(App);

const Container = styled.div`
  margin: 30px
`