import React, {Component} from 'react'
import {LocaleProvider} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import {Layout, Menu, Icon} from 'antd'
import './App.css'
import {
  PertanianForm,
} from './Component/PertanianApp'


const {
  Header,
  Sider,
  Content,
} = Layout

export default class App extends Component {
  state = {
    collapsed: false,
  };
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Layout style={{height: '100vh'}}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{background: '#fff', padding: 0}}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}>
              <PertanianForm/>
            </Content>
          </Layout>
        </Layout>

      </LocaleProvider>
    )
  }
}

