import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = { 
    visible: false, 
    activeItem: 'home'
  };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { visible } = this.state;
    const { activeItem } = this.state;

    return (
      <div className="App">
         <Menu pointing secondary>
          <Menu.Menu className='logo' position='left'>
            <li onClick={this.handleItemClick}><Link to='/'>Start</Link></li>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <li><Link to='/logout'>Wyloguj</Link></li>
          </Menu.Menu>
        </Menu>
        <Button onClick={this.toggleVisibility} className="toggleBtn">Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Link to='/'>
                <Icon name='home' />
                Start
              </Link>
            </Menu.Item>
            <Menu.Item name='shopping basket'>
              <Link to='/basket'>
                <Icon name='shopping basket' />
                Zakupy
              </Link>
            </Menu.Item>
            <Menu.Item name='calendar'>
              <Link to='/calendar'>
                <Icon name='calendar' />
                Okazje
              </Link>
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
