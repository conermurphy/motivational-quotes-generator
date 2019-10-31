import React from 'react';
import Quotes from './components/quotes.js'
import './App.css';
import QuotesData from "./data/quotes.json"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteNum: Math.floor(Math.random()*QuotesData.length)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <svg width="100" height="100">
                <rect width="50" height="50" x="35" y="35" fill="black"/>
            </svg>
            <h6 className="QuoteID">#{QuotesData[this.state.quoteNum].ID}</h6>
        </header>
        <Quotes quote={QuotesData[this.state.quoteNum].Quote}/>
      </div>
    );
  }
}

export default App;
