import React from 'react';
import Quotes from './quotes.js'
import NextQuote from './nextQuote.js'
import '../styles/App.css';
import QuotesData from "../data/quotes.json"
import { thisExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteNum: Math.floor(Math.random()*QuotesData.length)
    }
  }

  changeCallback = () => {

    let value = Math.floor(Math.random()*QuotesData.length);

    if (value === this.state.quoteNum) {
      value = Math.floor(Math.random()*QuotesData.length);
    } else {
      this.setState({
        quoteNum: value
      })
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
        <main>
          <Quotes quote={QuotesData[this.state.quoteNum].Quote}/>
          <NextQuote changeCallback={this.changeCallback}/>
        </main>
        
      </div>
    );
  }
}

export default App;
