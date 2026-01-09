"use client"

import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useGetChefs } from '@/hooks/use-chefs'
import { useGetMeetings } from '@/hooks/use-meetings'
import { useUser } from '@clerk/nextjs'
import { CogIcon } from 'lucide-react'
import AdminStatus from './AdminStatus'
import ChefManagementPanel from './ChefManagementPanel'
import RecentAppointments from './RecentAppointments'
import Image from 'next/image'



const AdminDashboard = () => {
  const { data: chefs = [], isLoading: isChefLoading, isPending: isChefPending } = useGetChefs();
  const { data: meetings = [], isLoading: isMeetingLoading, isPending: isMeetingPending } = useGetMeetings();

  // console.log(chefs, typeof (meetings));


  const admin = useUser();
  // let user;

  // useEffect(() => {
  //   user = admin.user;
  // }, [admin.user])


  const stats = {
    totalChefs: chefs.length,
    activeChefs: (chefs.filter((chef) => chef.isActive)).length,
    totalMeetings: meetings.length,
    completedMeetings: (meetings.filter((meeting) => meeting.status === "COMPLETED")).length
  }

  return (
    <section className='w-full min-h-screen'>
      {!admin.user && isChefLoading && isChefPending && isMeetingLoading && isMeetingPending && (<LoadingUI />)}
      <Navbar />

      <div className='w-full px-20 py-10 h-[40vh] overflow-hidden'>
        <div className='w-full h-[30vh] bg-linear-to-br from-primary/90 to-primary/10 rounded-lg p-7'>
          <div className='h-full  flex justify-between'>
            <div className='  flex flex-col space-y-5'>
              <div className='w-[9vw] h-[3vh] bg-background rounded-full flex gap-3 items-center px-4 outline-2 outline-primary'>
                <div className='size-2  animate-pulse bg-accent-foreground rounded-full' />
                <p className='text-white'>
                  View and Verify
                </p>
              </div>
              <div className='space-y-2 text-white'>
                <h1 className='text-6xl' >
                  Good {new Date().getHours() < 12
                    ? "Morning"
                    : new Date().getHours() < 18 ?
                      "Afternoon" : "Evening"
                  }, {admin?.user?.fullName}
                </h1>
                <p className='text-4xl text-background/50'>Admin Dashboard to add chefs and manage your meetings.</p>
              </div>
            </div>

            <div className=' right flex items-center justify-end'>
              <div className=' size-46 p-2 rounded-full  flex items-center bg-linear-to-br from-primary/90 to-primary/10 justify-center outline-2 outline-primary'>
                <Image src={'/logo.png'} height={200} width={200} alt='' />
              </div>
            </div>

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
      {meetings.length > 0 && (
        <RecentAppointments meetings={meetings} />
      )}

    </section>
  )
}

export default AdminDashboard

export const LoadingUI = () => {
  return <div className="min-h-screen bg-background z-99 ">
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
