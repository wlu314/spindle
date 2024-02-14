import LoginForm from "../forms/LoginForm";



const LoginArea = () => {
    return (
        <>
            <div className="login-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="text-center mb-60">Login From Here</h3>
                                <LoginForm /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginArea;