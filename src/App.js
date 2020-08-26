import React, {Component} from 'react';
import {CardList} from './components/card-list/Card-List.component';
import {SearchBox} from './components/search-box/searchbox.component';

import '../src/App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters : [],
      SearchField : ""
    };


  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters : users}))
  }

  render(){

    const {monsters,SearchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
      )

    return(
      <div className='App'>
        <SearchBox placeholder = 'Search Monsters'
        handleChange = {e=> this.setState({SearchField : e.target.value})}
        />
        <CardList monsters= {filteredMonsters}/>
      </div>
    )
  }
}

export default App;