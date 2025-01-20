import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Sidenav from "../SideNavbar";
import DailyReward from "./dailyReward";
import SoftBox from "components/SoftBox";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ChestRewards from "./chestRewards";
import DailyRewardsData from "./dailyReward/data/DailyRewardsData";


const PlatformManagement = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Sidenav />
            <SoftBox mb={2}>
                <ChestRewards />
            </SoftBox>
            <SoftBox>
                <DailyReward profiles={DailyRewardsData} />
            </SoftBox>

        </DashboardLayout>
    );
};

export default PlatformManagement;
