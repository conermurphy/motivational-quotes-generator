import React from 'react'
import '../styles/nextQuote.css'

class NextQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 10
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log(`There are ${this.state.timer} seconds remaining.`)
            if (this.state.timer > 0)   {
                this.setState({
                    timer: this.state.timer-1
                })
            } else {

                this.props.changeCallback()
    
                this.setState({
                    timer: 10
                })
                console.log(`New quote incoming!`)
            }
        }, 1000) 
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        return (
            <div className="container">
                <p>Next Quote in: {this.state.timer}</p>
                <p>Or,</p>
            </div>
        )
    }
}

export default NextQuote