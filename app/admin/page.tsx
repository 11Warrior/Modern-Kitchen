
import AdminDashboard from '@/components/Admin/AdminDashboard';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const Dashboard = async () => {
  const user = await currentUser();
  const adminUserEmail = process.env.ADMIN_EMAIL;

  const isAdmin = user?.emailAddresses?.[0].emailAddress === adminUserEmail;
  if (!isAdmin) {
    redirect("/");
  }
  return (
    <section>
      <AdminDashboard />
    </section>
  )
}

export default Dashboard