import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = { 
    visible: false, 
    activeItem: 'home'
  };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { visible } = this.state;
    const { activeItem } = this.state;

    return (
      <div className="App">
         <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
        <Button onClick={this.toggleVisibility} className="toggleBtn">Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Start
            </Menu.Item>
            <Menu.Item name='shopping basket'>
              <Icon name='shopping basket' />
              Zakupy
            </Menu.Item>
            <Menu.Item name='calendar'>
              <Icon name='calendar' />
              Okazje
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src="https://static.pexels.com/photos/264636/pexels-photo-264636.jpeg" size="big" centered />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
