
import useForm from "shared/hooks/useForm";

import TextField from "shared/components/TextFiled/TextField";
import Button from "shared/components/Button";

import { initialState } from "./initialState";
import { fields } from "./fields";

function LoginForm({ onSubmit }) {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

    const { email, password } = state;

    return (
        <form onSubmit={handleSubmit} >
            <TextField value={email} onChange={handleChange} {...fields.email} />
            <TextField value={password} onChange={handleChange} {...fields.password} />
            <Button text="Login" type="submit"/>
        </form>
    )
}
export default LoginForm;