import { useDispatch } from "react-redux";

import { signup } from "shared/services/API/auth";
import RegisterForm from "./RegisterForm";

function Register() {
    const dispatch = useDispatch();

    function onRegister(data) {
        dispatch(signup(data));
    }
    
    return (
        <>
            <RegisterForm onSubmit={onRegister} />
        </>
    )
 };
export default Register;