import React, { useContext, useEffect } from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { Form as FinalForm, Field } from 'react-final-form';
import { Link, RouteComponentProps } from 'react-router-dom';
import TextAreaInput from '../../../app/common/form/TextAreaInput';
import { observer } from 'mobx-react-lite';
import { Form, Button } from 'semantic-ui-react';
import { formatDistance } from 'date-fns';

const ActivityDetailChat = () => {
    const rootStore = useContext(RootStoreContext);
    const { createHubConnection, stopHubConnection, addComment, activity } = rootStore.activityStore;
    const { user } = rootStore.userStore;

    useEffect(() => {
        createHubConnection(activity!.id);
        return () => {
            stopHubConnection();
        }
    }, [createHubConnection, stopHubConnection, activity])

    return (
        <div style={{ width: 750 }}>
            <h2>Activity Comments</h2>
            {activity && activity.comments && activity.comments.map((comment) => (
                <Comment
                    key={comment.id}
                    // actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                    author={<Link to={`/profile/${comment.username}`}>{comment.displayName}</Link>}
                    avatar={
                        <Avatar
                            src={comment.image || '/assets/user.png'}
                            alt="user image"
                        />
                    }
                    content={
                        <p>{comment.body}</p>
                    }
                    datetime={formatDistance(new Date(comment.createdAt), new Date())}
                ></Comment>
            ))}

            <FinalForm
                onSubmit={addComment}
                render={({ handleSubmit, submitting, form }) => (
                    <Comment
                        avatar={
                            <Avatar
                                src={user!.image ||'/assets/user.png'}
                                alt="user image"
                            />
                        }
                        content={
                            <>
                                <Form onSubmit={() => handleSubmit()!.then(() => form.reset())}>
                                    <Field
                                        name='body'
                                        component={TextAreaInput}
                                        rows={2}
                                        placeholder='Add your comment'
                                    />
                                    <Button
                                        content="Add Comment"
                                        labelPosition='left'
                                        icon='edit'
                                        primary
                                        loading={submitting}
                                    />
                                </Form>
                            </>
                        }
                    />

                )}
            />


        </div>

    )
}

export default observer(ActivityDetailChat); 