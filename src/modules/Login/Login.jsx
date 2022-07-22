
import LoginForm from "./LoginForm";

function Login() {
    function onSubmit(data) {
        console.log('data', data)
    }
    
    return (
        <>
            <LoginForm onSubmit={onSubmit} />
        </>
    )
 };
export default Login;