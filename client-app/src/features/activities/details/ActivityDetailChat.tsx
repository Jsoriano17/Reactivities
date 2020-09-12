import React from 'react';
import { Comment, Avatar, Button, Form, List } from 'antd';
import TextArea from 'antd/lib/input/TextArea';


const ActivityDetailChat = () => {

    const ExampleComment = ({ children }: any) => (
        <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>Han Solo</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
            </p>
            }
        >
            {children}
        </Comment>
    );

    const CommentList = ({ comments }: any) => (
        <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
            itemLayout="horizontal"
        />
    );

    const Editor = ({ onChange, onSubmit, submitting, value }: any) => (
        <>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    Add Comment
            </Button>
            </Form.Item>
        </>
    );
    return (
        <div style={{width: 750}}>
            <ExampleComment>
                <ExampleComment>
                    <ExampleComment />
                    <ExampleComment />
                </ExampleComment>
            </ExampleComment>

            <>
                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                        />
                    }
                />
            </>
        </div>

    )
}

export default ActivityDetailChat; 