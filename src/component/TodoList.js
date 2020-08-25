import React, { Component } from 'react'
import Item from './TodoItem'
import TodoItem from './Todo'

export default class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit} = this.props
        return (
            <ul className="list-group-my-5">
            <h3 className="text-capitalize text-center">todo List</h3>
            {items.map(item=>{return (<TodoItem key={item.id} title={item.title} handleEdit={()=>handleEdit(item.id)} handleDelete={()=>handleDelete(item.id)}></TodoItem>)})}
            <button type="button" disabled = {items.length>0?false:true} className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>clear list</button>

            </ul>

        )
    }
}
