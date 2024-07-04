import React from 'react';
import './Home.css';
import img from './images.jpg'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, ConfigProvider } from 'antd';
import { SearchOutlined,DownOutlined } from '@ant-design/icons';
import { Button, Dropdown,Avatar  , Space } from 'antd';
import Card from './ui/Card';
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
          <div className="demo-logo-vertical" style={{ color: 'black', textAlign: 'center', fontFamily:"sans-serif",fontSize: "25px", padding: "20px 0" }}>
            Rhythmix
          </div>
          <Menu style={{ backgroundColor: 'transparent' }} defaultSelectedKeys={['4']} items={items} />
        </Sider>

        <Layout style={{ backgroundColor: 'transparent' }}>

          <Header style={{ padding: 0, background: 'transparent',display:'flex',alignItems:'center',justifyContent:'space-between' }} >

          <Space direction="vertical" size="middle">
          <Space.Compact size="large" style={{ margin: '20px 16px', background: 'transparent' }}>
      <div className="div" style={{ border: '0.1px solid grey', borderRadius: "7px", display: 'flex', alignItems: 'center' }}>
        <SearchOutlined style={{ padding: "0 10px", fontSize: "20px" }} />
        <input 
          type='text' 
          style={{ 
            fontSize: "20px", 
            width: '20em', 
            height: '40px', 
            padding: "5px 0", 
            backgroundColor: 'transparent', 
            border: 'none', 
            lineHeight: '20px' 
          }} 
          onFocus={(e) => { e.target.style.outline = "none"; }} 
          placeholder="Search track, album, artists..."
        />

      </div>

    </Space.Compact>
        </Space>
  
        <Space direction="vertical">
    <Space wrap style={{marginRight:"90px"}} >
    <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow={{
          pointAtCenter: true,
        }}
        style={{background:'transparent'}}
      >
        <Button className='glow-on-hover' > 
        <Avatar
    size={{
      xs: 24,
      sm: 28,
      md: 30,
      lg: 35,
      xl: 35,
      xxl: 35,
    }}
    icon={<img src={img}></img>}
  />
 Chetax
  <DownOutlined />

        </Button>
      </Dropdown>
      </Space>
  </Space>


          </Header>
          <Content style={{ margin: '15px 10px', backgroundColor: 'transparent' }}>
          
          <div style={{ padding: 24, minHeight: 36, borderRadius: '8px' ,color:"white",display:"flex",alignItems:'center',justifyContent:'space-between'}}>
          <p style={{fontSize:"20px"}}>  Recenttly Plays</p>
          <p style={{fontSize:"15px",marginRight:"20px"}}> See all</p>
          </div>

        {/* map on the recent plaed song which are stored in DB */}
        
<div style={{display:'flex',overflowX: 'scroll',  scrollbarWidth: 'none',}} >
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
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
