import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Divider, Layout, Menu, Typography, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const { Text, Link } = Typography;

const AdminLayout = ({children}) => {
   const colorBgContainer = "#fff";

    return  <Layout >
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          color: 'black'
        }}
      >Header</Header>

    {/* <Layout
      className="site-layout"
      hasSider
     
    >
        <Sider
    theme='light'
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="demo-logo-vertical" />
      <Text style={{padding: '20px', boxSizing: 'border-box'}} type="secondary">Ant Design (secondary)</Text>
      <Divider ></Divider>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} />
    </Sider>
      <Divider 
      style={
        {
            margin: 0
        }
      }></Divider>
      <Content
        style={{
          overflow: 'initial',
        }}
      >
        <div
          style={{
            padding: 24,
            textAlign: 'center',
            background: colorBgContainer,
            minHeight: '100vh'
          }}
        >
        
        </div>
      </Content>
  
    </Layout> */}
  </Layout>
}

export {
    AdminLayout
}