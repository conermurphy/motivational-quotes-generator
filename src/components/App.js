import React from 'react';
import Quotes from './quotes.js'
import NextQuote from './nextQuote.js'
import '../styles/App.css';
import QuotesData from "../data/quotes.json"

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
            <h1 className="logo">MQG</h1>
            <h6 className="QuoteID">#{QuotesData[this.state.quoteNum].ID}</h6>
        </header>
        <main>
          <Quotes quote={QuotesData[this.state.quoteNum].quote}/>
          <NextQuote changeCallback={this.changeCallback}/>
        </main>
        
      </div>
    );
  }
}

export default App;
