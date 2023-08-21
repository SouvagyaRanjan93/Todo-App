import React from "react";

export default function TodoCard({
  title,
  description,
  completed,
  id,
  markAsComplete,
  deleteTodo,
}) {
  return (
    <div style={{ border: "1px solid black", margin: "20px", padding: "10px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteTodo(id)}>Delete</button>
      {completed == true ? (
        <button style={{ backgroundColor: "green", color: "white" }} disabled>
          Completed
        </button>
      ) : (
        <button onClick={() => markAsComplete(id)}>Mark As Complete</button>
      )}
    </div>
  );
}
