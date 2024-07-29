import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import FormTodo from "./FormTodo";

export default function Todos({ todos }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Piority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.title}</td>
                <td>{todo.desc}</td>
                <td>{todo.pior}</td>
                <td>
                  <div>
                    <Button className="m-1" variant="danger">
                      Delete
                    </Button>
                    <Button variant="primary"> Edit</Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
