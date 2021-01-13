import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        search: '',
        suggestion: []
     };
  }

  setSearch = (e) => {
    this.setState( prevState => ({
      ...prevState,
      search: e.target.value
    } ))
    if(this.state.search.length > 2){
      this.callSuggestion()
    }

  }

  callSuggestion = () => {
    fetch(`https://www.catchpoint.com/api?q=${this.state.search}`)
      .then( response => response.json() )
      .then( response => 
        this.setState( prevState => ({
          ...prevState,
          suggestion: [...response.data]
        }) )
       )
       .catch( error )
  }

  updateInput = (sugg) => {
    this.setState( prevState => ({
      ...prevState,
      search: sugg
    }))
  }

  render() {

    
    return (
      <div>
        <input value={this.state.search} onChange={(e) => this.setSearch(e)} />
        <button onClick={() => console.log(this.state.search)} >Search</button>
        {
          this.suggestion.length > 0 ?
            this.suggestion.map( sugg => <button key={sugg} onClick={() => this.updateIpunt(sugg)}>sugg</button>) : null
        }
      </div>
    );
  }
}

export default App;