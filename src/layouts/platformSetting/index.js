import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Sidenav from "../SideNavbar";
import DailyRewards from "./dailyReward"
import SoftBox from "components/SoftBox";


const PlatformManagement = () => {
    return (
        <DashboardLayout>
            <SoftBox>
            <Sidenav />
                <DailyRewards />
            </SoftBox>


        </DashboardLayout>
    );
};

export default PlatformManagement;
