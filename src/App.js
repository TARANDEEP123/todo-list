import React, { Component } from 'react';

import {v1 as uuid} from "uuid";
import TodoInput from './component/Todo'
import TodoList from './component/TodoList'
import TodoItem from './component/TodoItem';


class App extends Component {
  state={
    items:[{id:1,title:'wakeup'},{id:2,title:'wakeup1'}],
    id: uuid(),
    item:'',
    editItem:false
  };
  handleChange = (e)=>{
    this.setState({
      item:e.target.value
    });
  };
  clearList = ()=>{
    this.setState({
      items:[]
    })
  }
  editSubmit = ()=>{console.log("")}
  handleSubmit = (e)=>{
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
  
    const updateItem = [...this.state.items,newItem]
    this.setState({
      items:updateItem,
      item:'',
      id:uuid(),
      editItem:false

    })
  }
  
  handleDelete = (id)=>{
    const itemArray = this.state.items;
    const updatedItem = itemArray.filter((item)=>item.id!=id)
    this.setState({
      items:updatedItem
    })
  }
  handleEdit = (id)=>{
    const updatedItem = this.state.items.filter((item)=>item.id!=id)
    const selectedItem = this.state.items.find(item=>item.id === id);
    this.setState({
      items:updatedItem,
      item:selectedItem.title,
      id:id,
      editItem:true

    })


  }

  
  
  

  render(){
    console.log(this.state.id)
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitialize text-center">Todo Input</h3>
        <TodoItem item = {this.state.item} editItem={this.state.editItem} handleSubmit={this.handleSubmit} handleChange={this.handleChange}
        ></TodoItem>
      <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}></TodoList>     
        </div>
      </div>
     

    </div>
  );
  }
}

export default App;
