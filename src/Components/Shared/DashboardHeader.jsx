import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const DashboardHeader = ({ toggleSidebar }) => {
    const [user] = useAuthState(auth);

    return (
        <div className="navbar bg-blue-500">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Stride Style</a>
            </div>
            <div className="flex-none gap-2">
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label onClick={toggleSidebar} className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                        <img src={user.photoURL} alt="User Avatar" className="rounded-full" />

                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;