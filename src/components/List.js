import React, { Component } from 'react'
import Card from './Card'
import './List.css'

class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: props.title,
            tasks: [],
            item: ''
        }
    }

    updateInput(key, value){
        this.setState({ [key]: value })
    }
    
    additem(){
        const newItem = {
            id: 1+Math.random(),
            value: this.state.item.slice()
        }

        if(this.state.item==='') return 

        const tasks = [...this.state.tasks]
        tasks.push(newItem)
    
        this.setState({
          tasks,
          item: ''
        });
    }

    deleteItem(i){
        const tasks = [...this.state.tasks]
        const updatedtasks = tasks.filter(item => item.id !== i.id)
        this.setState({ tasks: updatedtasks })
    }    

    render() {
        return (
            <div className="list">
                <h3>{this.state.title}</h3>
                <input type="text" onChange={e=>this.updateInput("item",e.target.value)}></input>
                <button onClick={()=>this.additem()} id="btn">+ Add</button> 
                {this.state.tasks.map((i)=>{
                    return(
                        <Card key={i.id} id={i.id} task={i.value} deleteItem={this.deleteItem.bind(this,i)} />
                    );
                })}
            </div>
        )
    }
}

export default List
