import React from 'react'
import SideNav from '../../SideNavbar'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import SoftBox from 'components/SoftBox'
import DailyRewardsData from './data/DailyRewardsData'
import Dailyrewards from './components/DailyRewards'

function index() {
  

    return (
        <DashboardLayout>
            <SideNav />
            <SoftBox
                sx={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    zIndex: 1000,
                }}>
               
            </SoftBox>


            <SoftBox mb={3} mt={5}>
                <SoftBox p={2}>
                    <Dailyrewards title={"Notifications History"} Rewards={DailyRewardsData} />
                </SoftBox>

            </SoftBox>

         
        </DashboardLayout>
    )
}

export default index