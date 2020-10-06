import { Button, Card} from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IActivity } from '../../../app/models/activity';
import { format } from 'date-fns';
import { RootStoreContext } from '../../../app/stores/rootStore';

const ActivityDetailHeader: React.FC<{ activity: IActivity }> = ({ activity }) => {
    const rootStore = useContext(RootStoreContext);
    const { attendActivity, cancelAttendance, loading } = rootStore.activityStore;
    return (
        <Card
            style={{ width: 750 }}
            cover={
                <StyledDiv>
                    <img
                        alt="example"
                        src={`/assets/categoryImages/${activity.category}.jpg`}
                        width="100%"
                        style={{ filter: 'brightness(30%)' }}
                    />
                    <StyledDiv2>
                        <h1 style={{ color: 'white' }}>{activity.title}</h1>
                        <h3 style={{ color: 'white' }}>{format(activity.date, 'eeee do MMMM')}</h3>
                        <h4 style={{ color: 'white' }}>hosted by bob</h4>
                    </StyledDiv2>

                </StyledDiv>
            }
        >

            {activity.isHost ? (<Link to={`/manage/${activity.id}`}>
                <Button size='middle'>Manage Event</Button>
            </Link>) : activity.isGoing ? (
                <Button type="primary" danger size='middle' onClick={cancelAttendance} loading={loading}>Cancel Attendance</Button>
            ) : (
                        <Button type="primary" size='middle' onClick={attendActivity} loading={loading}>Join Activity</Button>
                    )}
        </Card>
    )
}

export default observer(ActivityDetailHeader);

const StyledDiv = styled.div`
    position: relative;
`

const StyledDiv2 = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 30px;
    margin-left: 40px;
`