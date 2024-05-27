import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.config';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <div className="max-w-4xl flex flex-col-reverse lg:flex-row items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0">
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.displayName}</h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                            {user.email}
                        </p>
                        <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                {user.phoneNumber}
                            </p>
                        </p>
                    </div>

                </div>

                <div className="w-full lg:w-2/5">
                    <img src={user.photoURL} alt="User Avatar" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;