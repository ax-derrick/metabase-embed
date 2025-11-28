import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function Dashboard() {
  return (
    <div>
      <Title level={4}>Dashboard</Title>
      <Paragraph type="secondary">
        Welcome to your dashboard. Select a menu item to navigate.
      </Paragraph>
    </div>
  );
}

export default Dashboard;
