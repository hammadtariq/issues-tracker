import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IssueList from './components/issue-list/issue-list.component';

class App extends Component {


  render() {
    const issues = [
      {
        id: 1, status: "Open", owner: 'Hammad',
        created: new Date('2017-03-19'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
      },
      {
        id: 2, status: "Assigned", owner: 'Asad',
        created: new Date('2017-03-15'), effort: 14, completionDate: new Date('2017-03-25'),
        title: 'Missing bottom border on panel',
      },
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <IssueList issues={issues}/>
      </div>
    );
  }
}

export default App;
