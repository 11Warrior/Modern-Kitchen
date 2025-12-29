"use client"

import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useGetChefs } from '@/hooks/use-chefs'
import { useGetMeetings } from '@/hooks/use-meetings'
import { useUser } from '@clerk/nextjs'
import { CogIcon } from 'lucide-react'
import AdminStatus from './AdminStatus'
import ChefManagementPanel from './ChefManagementPanel'



const AdminDashboard = () => {
  const { data: chefs = [], isLoading: isChefLoading, isPending: isChefPending } = useGetChefs();
  const { data: meetings = [], isLoading: isMeetingLoading, isPending: isMeetingPending } = useGetMeetings();

  // console.log(chefs, meetings);


  const admin = useUser();
  let user;

  useEffect(() => {
    user = admin.user;
  }, [admin.user])


  const stats = {
    totalChefs: chefs.length,
    activeChefs: (chefs.filter((chef) => chef.isActive)).length,
    totalMeetings: meetings.length,
    completedMeetings: (meetings.filter((meeting) => meeting.status === "CONFIRMED")).length
  }

  return (
    <section className='w-full min-h-screen'>
      {!admin.user && (<LoadingUI />)}
      <Navbar />

      <div className='w-full px-20 py-10 h-[40vh] overflow-hidden'>
        <div className='bg-primary/60 rounded-lg w-full h-full px-5 py-10 flex items-center justify-between'>
          <div className='flex flex-col space-y-4'>
            <div className='text-accent-foreground rounded-full bg-amber-400/10 p-3 flex gap-2 items-center w-[10vw]  '>
              <div className='size-2 bg-amber-700 rounded-full animate-pulse'>
              </div>
              <span className='text-[1vw]'>Admin Dashboard</span>
            </div>

            <div>
              <h1 className='text-5xl'>Welcome Back ! {admin?.user?.fullName}</h1>
            </div>

            <div>
              <p className='text-2xl'>Manage your chefs, meetings and monitor the performance of chefs</p>
            </div>
          </div>

          <div className='size-40 rounded-full bg-amber-950 flex items-center justify-center'>
            <CogIcon size={100} />
          </div>
        </div>
      </div>

      <div className='w-full px-20 py-20 space-y-20'>
        <div>
          <AdminStatus
            totalChefs={stats.totalChefs}
            activeChefs={stats.activeChefs}
            totalMeetings={stats.totalMeetings}
            completedMeetings={stats.completedMeetings}
          />
        </div>

        <div>
          <ChefManagementPanel />
        </div>
      </div>

      {/**Meeting records in dashboard to be done */}

    </section>
  )
}

export default AdminDashboard

export const LoadingUI = () => {
  return <div className="min-h-screen bg-background">
    <Navbar />
    <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    </div>
  </div>
}
