import React from 'react'
import RandomJoke from './RandomJoke'
import Joke from './Joke'

class Wrapper extends React.Component {
    constructor() {
        super()
        this.state = {
            id : '',
            value : '',
            savedJokes : ((JSON.parse(localStorage.getItem('chuckjokes'))) !== null 
                            ? (JSON.parse(localStorage.getItem('chuckjokes'))) 
                            : [])
        }
        this.editJokesList = this.editJokesList.bind(this)
    }

    editJokesList(id, value) {
        let myJokes = this.state.savedJokes
        if (value) myJokes.push({id, value})
        else {
            let removeIndex = myJokes.map((joke) => { return joke.id; }).indexOf(id)
            if (removeIndex >= 0) myJokes.splice(removeIndex, 1)
        }
        localStorage.setItem('chuckjokes', JSON.stringify(myJokes))
        this.setState({
            ...this.state,
            savedJokes : myJokes
        })
    }

    render() {
        return (
            <>
            <div><img src='https://media.giphy.com/media/3yhmYJ0A5lQv6/giphy.gif' alt='logo'></img> </div>
            <RandomJoke saveCb={this.editJokesList} />
            <h3>SAVED JOKES</h3>
                <div>{
                    (this.state.savedJokes.length > 0) &&
                    this.state.savedJokes.map((joke) => (
                        <Joke id={joke.id} value={joke.value} deleteCb={this.editJokesList} />
                    ))
                }
                </div>
            </>
        )
    }
}

export default Wrapper