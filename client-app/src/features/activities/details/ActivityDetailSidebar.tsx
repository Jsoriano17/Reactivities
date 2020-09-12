import { Divider, Row, Col, Button, List, Badge } from 'antd';

import React from 'react';
import { Link } from 'react-router-dom';

const ActivityDetailSidebar = () => {
    return (
        <List bordered header="3 People Going">
            <Badge.Ribbon text='Host' color="orange">
                <List.Item>

                    <List.Item.Meta
                        avatar={<img src='/assets/user.png' width="60px" height="60px" />}
                        title={<h2>BoB</h2>}
                        description="Following"
                    />

                </List.Item >
            </Badge.Ribbon>
            <List.Item>
                <List.Item.Meta
                    avatar={<img src='/assets/user.png' width="60px" height="60px" />}
                    title={<h2>Tom</h2>}
                    description="Following"
                />
            </List.Item >
            <List.Item>
                <List.Item.Meta
                    avatar={<img src='/assets/user.png' width="60px" height="60px" />}
                    title={<h2>Sally</h2>}
                    description="Following"
                />
            </List.Item >
        </List >
    )
}

export default ActivityDetailSidebar; 