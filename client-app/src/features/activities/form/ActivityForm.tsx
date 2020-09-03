import React, { useState, FormEvent } from 'react';
import { Form, Input, Button, Card } from 'antd';
import styled from 'styled-components';
import { IActivity } from '../../../app/models/activity';
import {v4 as uuid} from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    submitting: boolean;
}

const ActivityForm: React.FC<IProps> = ({ setEditMode, activity: initialFormState , createActivity, editActivity, submitting}) => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values: any) => {
        if(activity.id.length === 0) {
            let newActivity = {
                ...activity, 
                id: uuid()
            }
            createActivity(newActivity);
        } else {
            editActivity(activity);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.currentTarget;
        setActivity({...activity, [name]: value});
    }

    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            }
        }
    }

    const [activity, setActivity] = useState<IActivity>(initializeForm);

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
                    <Input.TextArea name="description" onChange={handleChange}/>
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="Category"
                    rules={[{ required: true, message: 'Please input a category' }]}
                >
                    <Input name="category" onChange={handleChange}/>
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="Date"
                    rules={[{ required: true, message: 'Please input a date' }]}
                >
                    <Input name='date' onChange={handleChange}/>
                </Form.Item>

                <Form.Item
                    label="City"
                    name="City"
                    rules={[{ required: true, message: 'Please input your city' }]}
                >
                    <Input name="city" onChange={handleChange}/>
                </Form.Item>

                <Form.Item
                    label="Venue"
                    name="Venue"
                    rules={[{ required: true, message: 'Please input a venue' }]}
                >
                    <Input name="venue" onChange={handleChange}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Component>
                        <Button onClick={() => setEditMode(false)} style={{ margin: '0 10px' }} type="default">
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
export default ActivityForm;

const Component = styled.div`
    display: flex;
    flex-direction: row;
`