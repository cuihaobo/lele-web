import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Menu, MenuProps} from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const TextMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed)
  };

  return (
    <div style={{ width: 200, textAlign:'center' }}>
      <Avatar style={{ backgroundColor: '#f56a00', margin: 20 }} size={80} shape="square" icon={<UserOutlined />} />
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

export const TopNavigation = () => {
    return (
      <>
       <Menu mode="horizontal">
            <Menu.Item>
                <Link to="/">Home</Link>  
            </Menu.Item>
            <Menu.Item>
                <Link to="/register">Register</Link>  
            </Menu.Item>
            <Menu.Item>
                <Link to="/login">Login</Link>  
            </Menu.Item>
            <Menu.Item>
                <Link to="/profile">Profile</Link>  
            </Menu.Item>
        </Menu>
      </>
        
    )
}
