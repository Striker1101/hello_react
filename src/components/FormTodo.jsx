import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
export default function FormTodo({ formData, handleSubmit, handleChange }) {
  return (
    <Form onSubmit={handleSubmit} className="m-3">
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          defaultValue={formData.title}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Enter Title"
        />
      </Form.Group>

      <FloatingLabel controlId="desc" label="Description">
        <Form.Control
          as="textarea"
          defaultValue={formData.desc}
          onChange={handleChange}
          name="desc"
          placeholder="Leave your message here here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>

      <Form.Group className="mb-3">
        <Form.Label>Select priority</Form.Label>
        <Form.Select
          name="pior"
          defaultValue={formData.pior}
          onChange={handleChange}
        >
          <option value="high">High</option>
          <option value={"medium"}>Medium</option>
          <option value={"low"}>Low</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
