import React from 'react'

class Joke extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.deleteJoke = this.deleteJoke.bind(this)
    }

    deleteJoke() {
        this.props.deleteCb(this.props.id)
    }

    render() {
        return (
            <tr><td>{this.props.value}</td><td><button onClick={this.deleteJoke} >DELETE ME</button></td></tr>
        )
    }
}

export default Joke