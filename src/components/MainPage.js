import React, { Component } from 'react';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './MainPage.css';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render () {
    const { onSearchChange, isPending } = this.props;
  
    return isPending ? 
    <h1 className='tc light-green'>Loading</h1> :
    (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filteredRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
  
export default MainPage;
