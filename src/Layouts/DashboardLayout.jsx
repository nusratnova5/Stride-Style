import React, { useState } from 'react';
import SideBar from '../Components/Shared/SideBar';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../Components/Shared/DashboardHeader';

const DashboardLayout = () => {
    const [isOpenSidebar, setIsOpenIsdebar] = useState(false);
    const toggleSidebar = () => {
        setIsOpenIsdebar(!isOpenSidebar);
    }
    return (
        <div className='h-screen overflow-hidden flex flex-col'>
            <DashboardHeader toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar}></DashboardHeader>
            <div className='flex flex-1 overflow-hidden'>
                <div >
                    <SideBar toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
                </div>
                <div className='p-10 flex-1 overflow-y-scroll h-full pt-20' >
                    <Outlet />
                </div>
            </div>

        </div>

    );
};

export default DashboardLayout;