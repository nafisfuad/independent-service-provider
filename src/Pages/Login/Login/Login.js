import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h2>Login</h2>
        </div>
    );
};

export default Login;