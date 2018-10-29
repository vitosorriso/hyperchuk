import React from 'react'
/**
 * @description this component displays a single joke saved into local storage and gives the
 * possibility to remove it
 */
class Joke extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.deleteJoke = this.deleteJoke.bind(this)
    }
    /**
     * @description the joke is actually removed by a parent's callback
     */
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