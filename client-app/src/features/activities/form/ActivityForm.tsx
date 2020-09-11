import React, { useState, FormEvent, useContext, useEffect } from 'react';
import { Form, Input, Button, Card } from 'antd';
import styled from 'styled-components';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';

interface DetailParams {
    id: string
}

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({ match, history }) => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const activityStore = useContext(ActivityStore);
    const {
        createActivity,
        editActivity,
        submitting,
        activity: initialFormState,
        loadActivity,
        clearActivity
    } = activityStore;


    const [activity, setActivity] = useState<IActivity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    //this should be filling out the form with the info for the activity being edited 
    //but its not. its seems to be a problem with ant.design and typescript 

    useEffect(() => {
        if (match.params.id && activity.id.length === 0) {
            loadActivity(match.params.id).then(
                () => initialFormState && setActivity(initialFormState)
            )
        }
        return () => {
            clearActivity()
        }
    }, [loadActivity, clearActivity, match.params.id, initialFormState, activity.id.length]);

    const onFinish = (values: any) => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
        } else {
            editActivity(activity).then(() => history.push(`/activities/${activity.id}`));
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Card style={{ margin: ' 15px 30px', width: '90%' }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    ["Title"]: activity.title,
                    ["Description"]: activity.description,
                    ["Category"]: activity.category,
                    ["Date"]: activity.date,
                    ["City"]: activity.city,
                    ["Venue"]: activity.venue,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Title"
                    name="Title"
                    rules={[{ required: true, message: 'Please input a title' }]}
                >
                    <Input name="title" onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="Description"
                    rules={[{ required: true, message: 'Please input a description' }]}
                >
                    <Input.TextArea name="description" onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="Category"
                    rules={[{ required: true, message: 'Please input a category' }]}
                >
                    <Input name="category" onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="Date"
                    rules={[{ required: true, message: 'Please input a date' }]}
                >
                    <Input name='date' onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label="City"
                    name="City"
                    rules={[{ required: true, message: 'Please input your city' }]}
                >
                    <Input name="city" onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label="Venue"
                    name="Venue"
                    rules={[{ required: true, message: 'Please input a venue' }]}
                >
                    <Input name="venue" onChange={handleChange} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Component>
                        <Button onClick={() => history.push('/activities')} style={{ margin: '0 10px' }} type="default">
                            Cancel
                    </Button>
                        <Button loading={submitting} style={{ margin: '0 10px' }} type="primary" htmlType="submit">
                            Submit
                    </Button>
                    </Component>
                </Form.Item>
            </Form>
        </Card>
    )
}
export default observer(ActivityForm);

const Component = styled.div`
    display: flex;
    flex-direction: row;
`