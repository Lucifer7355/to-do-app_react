import React, { useState } from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import { v4 } from 'uuid'


const InputForm = ({ addTodos }) => {
    const [todoString, setTodostring] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoString === "") return alert("Please enter a To-do")
        const todo = {
            todoVal: todoString,
            id: v4()
        }
        addTodos(todo)
        setTodostring("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <span>
                    <input type="text" name="todo" id="todo" placeholder="Enter To-do" value={todoString} onChange={e => setTodostring(e.target.value)} />
                    <span addonType="prepend" >
                        <Button color="warning">
                            Add
                        </Button>
                    </span>
                </span>
            </FormGroup>
        </Form>
    )
}

export default InputForm