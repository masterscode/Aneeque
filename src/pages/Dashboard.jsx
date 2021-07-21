import React from 'react'
import { DashboardMain } from '../components/DashboardMain'
import { NavBar } from '../components/NavBar'
import { UserProfile } from '../components/UserProfile'

export const Dashboard = () => {
    return (
        <section className='dashboard'>
                {/* dashboard nav start*/}
                <NavBar />
                {/* dashboard nav end*/}
                <DashboardMain />
                {/* dashboard main-body */}
                {/* dashboard user-profile */}
                <UserProfile />
        </section>
        
    )
}
