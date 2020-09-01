import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: props.id,
            task: props.task
        }
    }
    
    render() {
        return (
            <div className="card" id={this.props.id} >
                <p id="task">{this.state.task}</p>
                <button onClick={this.props.deleteItem} id="dlt_btn">X</button>
            </div>
        )
    }
}

export default Card
