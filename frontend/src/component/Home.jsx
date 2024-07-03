import React from 'react';
import './Home.css';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, ConfigProvider } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'white',
        },
      }}
    >
      <Layout className="anim_gradient" style={{ width: "100vw", height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
        >
          <div className="demo-logo-vertical" style={{ color: 'black', textAlign: 'center', fontSize: "20px", padding: "10px" }}>
            Rhythmix
          </div>
          <Menu style={{ backgroundColor: 'transparent' }} defaultSelectedKeys={['4']} items={items} />
        </Sider>

        <Layout style={{ backgroundColor: 'transparent' }}>
          <Header style={{ padding: 0, background: 'transparent' }} />
          <Content style={{ margin: '24px 16px 0', backgroundColor: 'transparent' }}>
            <div style={{ padding: 24, minHeight: 360, borderRadius: '8px' }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', background: 'transparent' }}>
          Rhythmix Design ©{new Date().getFullYear()} Created by Chetan Padhen
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
