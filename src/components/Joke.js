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
            <div className='joke'>
                {this.props.value}
                <button className='button delete' onClick={this.deleteJoke}>DELETE</button>
            </div>
        )
    }
}

export default Joke