import React, { useState } from 'react';
import { Menu } from 'antd';
import { ContactsOutlined } from '@ant-design/icons';

const NavBar = () => {
    const [current, setCurrent] = useState(['activity']);

    const handleClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{ width: "100%" }}>
            <Menu.Item key="activity" icon={<ContactsOutlined />}>Activities</Menu.Item>
        </Menu>
    )
}

export default NavBar;