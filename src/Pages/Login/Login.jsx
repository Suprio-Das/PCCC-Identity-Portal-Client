import React from 'react';

const Login = () => {
    return (
        <div className='min-h-[calc(100vh-130px)] flex flex-col items-center justify-center'>
            <h1 className='my-3 lg:text-3xl text-lg font-semibold'>Login</h1>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl border-1">
                <div className="card-body">
                    <form className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn bg-blue-500 text-white mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;