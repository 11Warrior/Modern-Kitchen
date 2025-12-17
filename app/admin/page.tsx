import AdminDashboard from '@/components/Dashboard/AdminDashboard'
import Navbar from '@/components/Navbar/Navbar';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const Admin = async () => {
    const user = await currentUser();
    const adminUserEmail = process.env.ADMIN_EMAIL;

    const isAdmin = user?.emailAddresses?.[0].emailAddress === adminUserEmail;
    if (!isAdmin) {
        redirect("/");
    }
    
    redirect("/admin/dashboard");
}

export default Admin