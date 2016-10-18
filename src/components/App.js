import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div>
    <h1 style={{margin:'0',marginBottom:"20px",lineHeight:"100px",backgroundColor:"#1fa67a",color:"#fff",fontSize:"24px"}}>
      Redux Persist Todos Example
    </h1> 
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
