import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const API = "http://localhost:4000/a5/todos";

  const createTodo = async () => {
    const response = await axios.get("http://localhost:4000/a5/todos/create");
    setTodos(response.data);
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:4000/a5/todos");
    setTodos(response.data);
  };

  const removeTodo = async (id) => {
    const response = await axios.get(`${API}/${id}/delete`);
    setTodos(response.data);
  };

  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTitle = async () => {
    try {
      const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <input value={todo.id} readOnly className="form-control mb-2" />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        value={todo.title}
        type="text"
        className="form-control mb-2"
      />
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
        className="form-control mb-2"
      />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
        className="form-control mb-2"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          checked={todo.completed}
          type="checkbox"
        />{" "}
        Completed
      </label>
      <button onClick={postTodo} className="btn btn-warning mb-2 w-100">
        Post Todo
      </button>
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTodo} className="btn btn-success mb-2 w-100">
        Update Todo
      </button>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="btn btn-danger float-end"
            >
              Remove
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
            <input checked={todo.completed} type="checkbox" readOnly />
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>

      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />

      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <input
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <input
        checked={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: e.target.checked,
          })
        }
        type="checkbox"
      />
      <a
        href={`${API}/${todo.id}/completed/${todo && todo.completed}`}
        className="btn btn-primary me-2"
      >
        Update completed to {todo && todo.completed.toString()}
      </a>

      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2"
      >
        Update Title to {todo.title}
      </a>
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2"
      >
        Update description to {todo.description}
      </a>

      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>

      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>

      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
    </div>

    // <div>
    //   <h1>Working with Arrays</h1>
    //   <h2>Todos from server</h2>
    //   <button
    //     className="btn btn-primary"
    //     onClick={() => updateTitle(id, title)}
    //   >
    //     Update Todo Title
    //   </button>
    //   <button className="btn btn-primary" onClick={createTodo}>
    //     Create Todo
    //   </button>
    //   <button className="btn btn-primary" onClick={postTodo}>
    //     Post Todo
    //   </button>
    //   <input
    //     className="form-control"
    //     value={title}
    //     onChange={(e) => setTitle(e.target.value)}
    //   />
    //   <ul className="list-group">
    //     {todos.map((todo) => (
    //       <li className="list-group-item" key={todo.id}>
    //         <button
    //           className="btn btn-warning float-end"
    //           onClick={() => updateTitle(todo.id, todo.title)}
    //         >
    //           Update
    //         </button>
    //         <button
    //           className="btn btn-danger float-end"
    //           onClick={() => deleteTodo(todo.id)}
    //         >
    //           Delete
    //         </button>
    //         {todo.title}
    //         <hr />
    //         {todo.id}
    //       </li>
    //     ))}
    //   </ul>
    //   <h2>Update item title</h2>
    //   <input
    //     className="form-control"
    //     value={title}
    //     onChange={(e) => setTitle(e.target.value)}
    //   />

    //   <a
    //     href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
    //     className="btn btn-primary"
    //   >
    //     Update Todo Title
    //   </a>
    //   <h2>Fetch item by id</h2>

    //   <input
    //     className="form-control"
    //     value={id}
    //     onChange={(e) => setTodo({ ...todo, id: e.target.value })}
    //   />

    //   <input
    //     className="form-control"
    //     value={id}
    //     onChange={(e) => setId(e.target.value)}
    //   />
    //   <a
    //     href={`http://localhost:4000/a5/todos/${id}`}
    //     className="btn btn-primary"
    //   >
    //     Fetch Todo {id}
    //   </a>
    //   <h2>Fetch Array</h2>
    //   <a href="http://localhost:4000/a5/todos" className="btn btn-primary">
    //     Fetch Todos
    //   </a>

    //   <h3>Filtering Array Items</h3>
    //   <a
    //     href={`${API}/${todo.id}?completed=true`}
    //     className="btn btn-primary me-2"
    //   >
    //     Get Completed Todos
    //   </a>
    // </div>
  );
}

export default WorkingWithArrays;
