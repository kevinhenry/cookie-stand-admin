import React, { useState } from "react";
import { useAuth } from "../contexts/auth";

function LoginForm() {
    const [formItems, setFormItems] = useState({});
    const { login } = useAuth();

    const handleChange = (e) => {
        const newFormItems = {
            ...formItems,
            [e.target.name]: e.target.value,
        };
        setFormItems(newFormItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formItems.username, formItems.password);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-1/2 p-8 mx-auto my-16 text-center font-bold bg-green-300 rounded-md"
        >
            <h3>USER NAME</h3>
            <input
                name="username"
                type="text"
                className="w-3/4 p-2 mt-2 rounded-md"
                onChange={handleChange}
                placeholder='User Name'
            />
            <h3 className="pt-8">PASSWORD</h3>
            <input
                name="password"
                type="password"
                className="w-3/4 p-2 mt-2 rounded-md"
                onChange={handleChange}
                placeholder='password'
            />
            <button className="w-3/4 p-3 mt-10 bg-green-600 rounded-md">
                SIGN IN
            </button>
        </form>
    );
}

export default LoginForm;
