import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, updateTodo } from "../redux/actions";
import "./style.css"

export const AddTodo = () => {
    const [value, setValue] = useState({});
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const isEdit = useSelector((state) => state.todoReducer.isEdit);
    const editTodo = useSelector((state) => state.todoReducer.editTodo);

    useEffect(() => {
        editTodo && setValue(() => editTodo);
    }, [editTodo]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!value?.title) {
            setError((error) => ({
                ...error,
                title: 'Please enter todo title',
            }));
            return;
        }
        // if (!value?.description) {
        //     setError((error) => ({
        //         ...error,
        //         description: 'Please enter todo description'
        //     }));
        //     return;
        // }

        if (isEdit) {
            dispatch(updateTodo(editTodo.id, value));
        }
        else {
            dispatch(addNewTodo(value));
        }
        setValue({ title: '' });
        document.getElementById("todoForm").reset();
    };

    const changeEvent = (e) => {
        setValue(
            {
                ...value,
                [e.target.name]: e.target.value,
            },
        );

    };

    return (
        // <div className="container my-4 py-1 border">
        <div className="main_div">
            <form className="mt-3 mb-2" id="todoForm" onSubmit={onSubmit}>
                <div className="inner_div">
                    <div className="col-xl-3">
                        <input
                            type="text"
                            name="title"
                            className="input"
                            placeholder="Todo Title"
                            defaultValue={value?.title}
                            onChange={(e) => changeEvent(e)}
                        />
                        <span className="text-danger">{error?.title}</span>
                    </div>
                    <div className="col-xl-2">
                        <button className="button" type="submit"> {isEdit ? 'Update Todo' : 'Add Todo'} </button>
                    </div>
                </div>
            </form>
            </div>
        // </div>
    );
};