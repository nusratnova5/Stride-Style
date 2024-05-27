import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/Firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, googleuser, googleLoading] = useSignInWithGoogle(auth);

    const handleGoogleLogin = async () => {
        await signInWithGoogle();
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const res = await signInWithEmailAndPassword(email, password);
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleuser) {
            navigate(from, { replace: true });
        }
    }, [user, loading, navigate, from, googleuser, googleLoading]);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-red-900">Login now!</h1>
                    <p className="py-6">Log in to your account to enjoy a personalized shopping experience at our shoe shop. Access your order history, save favorite items, and check out quickly and securely.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-900 hover:bg-red-600 text-white font-bold">Login</button>
                        </div>
                    </form>
                    <div className="form-control mx-7 mb-3 ">
                        <button onClick={handleGoogleLogin} className="btn bg-stone-900 hover:bg-stone-600 text-white font-bold">Google</button>
                    </div>
                    <div className='mx-7 mb-3'>
                        <p>Don't have any account? <Link to={'/register'} className='text-red-900 font-bold'>Click here </Link>to register.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;