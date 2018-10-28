import React from 'react'
import RandomJoke from './RandomJoke'
import Joke from './Joke'

class Wrapper extends React.Component {
    constructor() {
        super()
        this.state = {
            id : '',
            value : '',
            savedJokes : ((JSON.parse(localStorage.getItem('chuckjokes'))) !== null ? (JSON.parse(localStorage.getItem('chuckjokes'))) : [])
        }
        this.saveJoke = this.saveJoke.bind(this)
        this.deleteJoke = this.deleteJoke.bind(this)
    }

    saveJoke(id, value) {
        let myJokes = this.state.savedJokes

        myJokes.push({id, value})
        localStorage.setItem('chuckjokes', JSON.stringify(myJokes))
        this.setState({
            ...this.state,
            savedJokes : myJokes
        })
        console.log('Joke ' + id + ' saved!')
    }

    deleteJoke(id) {
        let jokes = this.state.savedJokes
        let removeIndex = jokes.map((joke) => { return joke.id; }).indexOf(id)
        if (removeIndex >= 0) jokes.splice(removeIndex, 1)
        localStorage.setItem('chuckjokes', JSON.stringify(jokes))
        this.setState({
            ...this.state,
            savedJokes : jokes
        })
        console.log('Joke id ' + id + ' deleted!')
    }

    render() {
        return (
            <>
            <RandomJoke saveCb={this.saveJoke} />
            <table>
                <thead><tr><th>saved jokes</th><th>CANC</th></tr></thead>
                <tbody>{
                    (this.state.savedJokes.length > 0) &&
                    this.state.savedJokes.map((joke) => (
                        <Joke id={joke.id} value={joke.value} deleteCb={this.deleteJoke} />
                    ))
                }
                </tbody>
            </table>
            </>
        )
    }
}

export default Wrapper