import ActionCards from '@/components/Dashboard/ActionCards'
import AppointmentsStats from '@/components/Dashboard/AppointmentsStats'
import WelcomeSection from '@/components/Dashboard/WelcomeSection'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const DashBoard = () => {
    return (
        <>
            <Navbar />

            <section className='min-h-screen px-20 py-10 space-y-10'>
                <WelcomeSection />
                <ActionCards />
                <AppointmentsStats />
            </section>
        </>
    )
}

export default DashBoard