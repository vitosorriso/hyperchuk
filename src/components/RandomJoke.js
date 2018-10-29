import React from 'react'
/**
 * @description this component generates a random Chuck Norris joke, calling api.chucknoris.io
 * contains a button to generate the joke and another button to save it to local storage
 */
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
    /**
     * @description a function to get the random joke and save it to the state
     */
    async getRandomJoke() {
        let response = await fetch('https://api.chucknorris.io/jokes/random')
        let data = await response.json()
        this.setState({
            ...this.state,
            id : data.id,
            value : data.value
        })
    }
    /**
     * @description Joke is actually saved by a parent's callback
     */
    async saveJoke() {
        this.props.saveCb(this.state.id, this.state.value)
    }
    /**
     * @description calling the joke api before the component mounts
     */
    componentWillMount() {
        this.getRandomJoke()
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