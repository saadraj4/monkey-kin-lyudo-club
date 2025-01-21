import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Sidenav from "../SideNavbar";
import DailyReward from "./dailyReward";
import SoftBox from "components/SoftBox";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ChestRewards from "./chestRewards";
import DailyRewardsData from "./dailyReward/data/DailyRewardsData";
import LeagueRewardList from "./leagueRewards/components/LeagueReward";
import LeagueRewardData from "./leagueRewards/data/LeagueRewardData";



const PlatformManagement = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Sidenav />
            <SoftBox mb={2}>
                <ChestRewards />
            </SoftBox>
            <SoftBox>
                <DailyReward title={"Daily Rewards"} DailyReward={DailyRewardsData} />
            </SoftBox>

            <SoftBox>
                <LeagueRewardList title={"League Rewards"} LeagueRewards={LeagueRewardData} />
            </SoftBox>


        </DashboardLayout>
    );
};

export default PlatformManagement;
