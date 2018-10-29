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

    componentWillMount() {
        this.getRandomJoke();
    }

    render() {
        return(<>
            <div><p className='randomjoke'>{this.state.value}</p>
            <button className='button generate' onClick={this.getRandomJoke}>RANDOM</button>
            <button className='button add' onClick={this.saveJoke}>SAVE</button></div>
        </>)
    }
}

export default RandomJoke