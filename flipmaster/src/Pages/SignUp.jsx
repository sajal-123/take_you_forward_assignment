import React, { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Loader = () => (
    <svg
        className="w-5 h-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8 8 8 0 01-8 8z"
        />
    </svg>
);

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user);

    useEffect(() => {
        if (userData.userInfo) {
            navigate('/');
        }
    }, [userData, navigate]);

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (validateForm()) {
            // Handle sign up logic here
            const user = { name: name, email: email, password: password };
            console.log(user);
        }
        setLoading(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h1 className="text-center font-bold text-gray-800 text-3xl mb-6">Sign Up</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-medium text-gray-700" htmlFor="name">Name</label>
                        <input
                            className={`mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none
                                         ${errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}`}
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                        {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            className={`mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none
                                         ${errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}`}
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                className={`mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none
                                             ${errors.password ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}`}
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-700"
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash />
                                ) : (
                                    <FaRegEye />
                                )}
                            </button>
                        </div>
                        {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}
                    </div>
                    <button
                        type="submit"
                        disabled={Loading}
                        className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center transition-transform transform hover:scale-105"
                    >
                        {Loading ? <Loader /> : 'Sign Up'}
                    </button>
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{' '}
                        <Link
                            className="text-blue-600 font-medium hover:underline"
                            to="/login"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export { SignUpPage };
