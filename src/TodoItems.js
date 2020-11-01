import React from 'react'
import FlipMove from "react-flip-move";

class TodoItems extends React.Component {
    constructor(props) {
        super(props);

        this.createTask = this.createTask.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    createTask(item) {
        return <li key= {item.key} onClick= {()=> this.delete(item.key)}>{item.text}</li>
    }

    render() {
        var todoEnteries = this.props.entries;
        var listItems = todoEnteries.map(this.createTask);

        return(
        <FlipMove duration={250 } easing="ease-out">
           <ul className='theList'> {listItems} </ul>
           </FlipMove>
        )
    }
}

export default TodoItems;