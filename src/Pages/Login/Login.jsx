import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { loginWithEmailAndPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Login Using firebase
        loginWithEmailAndPassword(email, password)
            .then(res => {
                const user = res.user;
                if (user) {
                    toast.success('Logged-in successfully!', {
                        position: 'top-center'
                    })

                    navigate('/dashboard');
                    form.reset();
                }
            })
            .catch(error => {
                if (error.message) {
                    toast.error('Enter valid login credentials!', {
                        position: 'top-center'
                    })
                }
            })
    }
    return (
        <div className='min-h-[calc(100vh-130px)] flex flex-col items-center justify-center'>
            <h1 className='my-3 lg:text-3xl text-lg font-semibold'>Login</h1>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl border-1">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn bg-blue-500 text-white mt-4">Login</button>
                    </form>
                </div>
                {/* Toast Container */}
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;