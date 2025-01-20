
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// New Tasks
import Users from "./components/recentRegistration"
import Purchase from "./components/recentPurchase"
import PurchaseData from "./data/PurchaseData"
import profilesListData from "./data/RecentRegistrationData";
import Notifications from "./components/notifications";
import TOP5Players from "./components/top5Players";
import TOP5PlayersData from "./data/Top5PlayersData"
import Sidenav from "../SideNavbar";
import Player from "assets/players.png"
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';

function Dashboard() {
  


  
  return (
    <>
    <Sidenav />
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "No. of Players" }}
                count="500"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: PeopleAltSharpIcon }}
                
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Fee Coins" }}
                count="2300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: Player }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Online Player" }}
                count="346"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: Player }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Revenue" }}
                count="$103"
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: Player,
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
                
        <SoftBox mt={5} mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={4}>
              <Users title="Recent Registation" profiles={profilesListData} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              {/* Another Item  need to be here*/}
              <Purchase title="Recent Purchases" profiles={PurchaseData} />

            </Grid>
            <Grid item xs={12} xl={4}>  
              {/* Another Item need to be here*/}
              <Notifications />
            </Grid>
          </Grid>
        </SoftBox>
        
        <TOP5Players title="League Players" profiles={TOP5PlayersData} />



        {/* Build B developers and Work With Rockets Section */}
        {/* <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="active users"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox> 
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>*/}



      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
    </>
  );
}

export default Dashboard;
