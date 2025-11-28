import { Layout, Menu, Badge, Avatar, Button, Typography, Space, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  HomeOutlined,
  FolderOutlined,
  TeamOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  BarChartOutlined,
  MenuOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import './App.css';

const { Sider, Header, Content } = Layout;
const { Text } = Typography;

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/analytics',
      icon: <BarChartOutlined />,
      label: 'Analytics',
    },
    {
      key: '/portfolio',
      icon: <FolderOutlined />,
      label: 'Portfolio',
    },
    {
      key: '/open-tenders',
      icon: <TeamOutlined />,
      label: (
        <Space>
          Open Tenders
          <Badge count={9} size="small" />
        </Space>
      ),
    },
    {
      key: '/my-bids',
      icon: <FileTextOutlined />,
      label: 'My Bids',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider
        theme="light"
        width={200}
        style={{
          borderRight: '1px solid #f0f0f0',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          overflow: 'auto',
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <div className="logo">
          <img src="/axmed-logo.png" alt="Axmed" height="28" />
        </div>

        {/* Navigation Menu */}
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 'none' }}
        />
      </Sider>

      <Layout style={{ marginLeft: 200 }}>
        {/* Header */}
        <Header className="header">
          <div className="header-content">
            <div />
            {/* Right side menu items */}
            <Space size="large" className="header-menu">
              <a
                href="https://form.asana.com/?k=syQQO9QJls5IRuUzlbUDTQ&d=1207382794046065"
                target="_blank"
                rel="noopener noreferrer"
                className="header-link"
              >
                <QuestionCircleOutlined className="header-icon" />
                <span>Support</span>
              </a>

              <a href="/dashboard/tenders/quotes" className="header-link">
                <Badge count={3} size="small" offset={[-2, 0]} color="#faad14">
                  <FileTextOutlined className="header-icon" />
                </Badge>
                <span>Draft Bids</span>
              </a>

              <Dropdown
                menu={{
                  items: [
                    { key: 'profile', label: 'Profile' },
                    { key: 'settings', label: 'Settings' },
                    { type: 'divider' },
                    { key: 'logout', label: 'Logout' },
                  ] as MenuProps['items'],
                }}
                trigger={['click']}
              >
                <Space className="profile-trigger">
                  <Avatar
                    src="https://axmed-demo-static-files.s3.eu-west-1.amazonaws.com/uploads/CIPLA-logo381353.png"
                    size={38}
                  />
                  <span className="org-name">Cipla Pharmaceuticals</span>
                  <DownOutlined className="caret-icon" />
                </Space>
              </Dropdown>
            </Space>

            {/* Mobile menu button */}
            <Button type="primary" className="mobile-menu-btn" icon={<MenuOutlined />} />
          </div>
        </Header>

        {/* Main Content Area */}
        <Content className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Content>

        {/* Footer */}
        <div className="footer">
          <Text type="secondary">© 2025 | All Rights Reserved</Text>
          <Space>
            <Button type="link" size="small">Terms</Button>
            <Text type="secondary">|</Text>
            <Button type="link" size="small">Privacy Policy</Button>
          </Space>
        </div>
      </Layout>
    </Layout>
  );
}

function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}

export default App;
