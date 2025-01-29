import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Sidenav from "../SideNavbar";
import DailyReward from "./dailyReward";
import SoftBox from "components/SoftBox";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ChestRewards from "./chestRewards";
import LeagueRewardList from "./leagueRewards/components/LeagueReward";
import LeagueRewardData from "./leagueRewards/data/LeagueRewardData";
import team3 from "assets/images/team-3.jpg";

const DailyRewardsData = [
    {
      id: 1,
      image: team3,
      name: "Day 1",
      title: "Title",
      description: "Description",
      date: "01/01/25"
    },
    {
      id: 2,
      image: team3,
      title: "Title",
      name: "Day 2",
      description: "Description",
      date: "01/01/25"
    },
    {
      id: 3,
      image: team3,
      title: "Title",
      name: "Day 3",
  
      description: "Description",
      date: "01/01/25"
    },
    {
      id: 4,
      image: team3,
      title: "Title",
      name: "Day 4",
  
      description: "Description",
      date: "01/01/25"
    },
    {
      id: 5,
      image: team3,
      title: "Title",
      name: "Day 5",
      description: "Description",
      date: "01/01/25"
    },
    {
      id: 6,
      image: team3,
      title: "Title",
      name: "Day 6",
      description: "Description",
      date: "01/01/25"
      
    },
    {
      id: 7,
      image: team3,
      title: "Title",
      name: "Day 7",
      description: "Description",
      date: "01/01/25"
    },
  ];

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
