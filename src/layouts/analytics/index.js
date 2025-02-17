import React from 'react'
import SideNavbar from "../SideNavbar"
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'

// Data
import reportsBarChartData from "./data/reportsBarChartData";
import gradientLineChartData from "./data/gradientLineChartData";
import SoftBox from 'components/SoftBox';
import { Grid, Icon } from '@mui/material';
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart';
import GradientLineChart from 'examples/Charts/LineCharts/GradientLineChart';
import SoftTypography from 'components/SoftTypography';
import typography from "assets/theme/base/typography";

function Index() {
    const { size } = typography;
    const { chart, items } = reportsBarChartData;

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SideNavbar />
            <SoftBox py={3}>


                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={6} mt={1}>
                            <ReportsBarChart
                                color="secondary"
                                title="active users"
                                chart={chart}
                                items={items}
                            />
                        </Grid>



                        <Grid item xs={12} lg={12} mt={3}>
                            <GradientLineChart
                                title="Revenue"
                                description={
                                    <SoftBox display="flex" alignItems="center">
                                        <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                                        </SoftBox>

                                    </SoftBox>
                                }
                                height="30rem"
                                chart={gradientLineChartData}
                            />
                        </Grid>
                    </Grid>
                </SoftBox>

            </SoftBox>

        </DashboardLayout>
    );
}

export default Index;