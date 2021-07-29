function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
   alert("Sure to delete")
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, i) => 
      
       // <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)
       <div className="todo" index={i} key={i} > {todo.text}
         <button className = "btn-remove" onClick={removeTodo}> Delete</button> 
         </div>
      )}
      <TodoForm addTodo={addTodo} />
      </div>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
