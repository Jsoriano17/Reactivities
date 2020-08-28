import React from 'react';
import { Form, Input, Button, Checkbox, Card, DatePicker } from 'antd';


const ActivityForm = () => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card style={{ margin: ' 15px 30px', width: '90%' }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Title"
                    name="Title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="Description"
                    rules={[{ required: true, message: 'Please input your Description' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="Category"
                    rules={[{ required: true, message: 'Please input your Category' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="Date"
                    rules={[{ required: true, message: 'Please input your Date' }]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="City"
                    name="City"
                    rules={[{ required: true, message: 'Please input your City' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Venue"
                    name="Venue"
                    rules={[{ required: true, message: 'Please input your Venue' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
export default ActivityForm;