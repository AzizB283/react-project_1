import React, { useState } from "react";
function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleClick() {
    setTasks([...tasks, task]);
    setTask("");
  }
  function deleteTask(e) {
    const newTasks = tasks.filter((task) => task !== e);
    setTasks(newTasks);
  }
  function updateTask(task, index) {
    setTask(task);
    setEditIndex(index);
    setEditing(true);
  }
  function handleUpdate() {
    const newTasks = [...tasks];
    newTasks[editIndex] = task;
    setTasks(newTasks);
    setTask("");
    setEditIndex(null);
    setEditing(false);
  }
  
  return (
    <>
      <div className="container">
        <h1>To Do Lists</h1>
        {editing ? (
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add Task"
                onChange={handleChange}
                value={task}
              />
              <button className="btn btn-primary" type="submit" onClick={handleUpdate}>
                Update Task
              </button>
            </div>
         
        ) : (
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Task"
              onChange={handleChange}
              value={task}
            />
            <button className="btn btn-primary" onClick={handleClick}>
              Add Task
            </button>
          </div>
        )}
        {tasks.length > 0 ? (
          <>
            {tasks.map((task, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="card my-2">
                    <div className="card-body">
                      {task}
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          className="btn btn-primary me-md-2"
                          type="button"
                          onClick={() => {
                            updateTask(task, index);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() => {
                            deleteTask(task);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <>
            <div>
              <h4>No Tasks Found</h4>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Todo;
