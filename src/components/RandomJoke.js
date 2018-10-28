import React from 'react'

class RandomJoke extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id : '',
            value : ''
        }
        this.getRandomJoke = this.getRandomJoke.bind(this)
        this.saveJoke = this.saveJoke.bind(this)
    }

    async getRandomJoke() {
        let response = await fetch('https://api.chucknorris.io/jokes/random')
        let data = await response.json()
        console.log(data)
        this.setState({
            ...this.state,
            id : data.id,
            value : data.value
        })
    }

    async saveJoke() {
        console.log('RJ save')
        this.props.saveCb(this.state.id, this.state.value)
    }

    render() {
        return(<>
            <button onClick={this.getRandomJoke}>FUCK ME</button>
            <div><h2>{this.state.value}</h2></div>
            <button onClick={this.saveJoke}>SAVE ME</button>
        </>)
    }
}

export default RandomJoke