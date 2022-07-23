import { useDispatch } from "react-redux";

import { signup } from "../../redux/auth/auth-operations";
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