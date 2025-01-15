/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import Sidenav from "../SideNavbar";

function Overview() {
    return (
        <DashboardLayout>
            <Sidenav />
            <SoftBox mb={3}>
                <Card>
                    <SoftBox pt={2} px={2}>
                        <SoftBox mb={0.5}>
                            <SoftTypography variant="h6" fontWeight="medium">
                                Shop Management
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1}>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                Coins
                            </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                    <SoftBox p={2}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor1}
                                    price="100"
                                    id="1"

                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor2}
                                    price="100"
                                    id="2"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor3}
                                    price="100"
                                    id="3"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor3}
                                    price="100"
                                    id="4"
                                />
                            </Grid>

                        </Grid>
                    </SoftBox>

                    <SoftBox pt={2} px={2}>

                        <SoftBox mb={1}>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                Diamonds
                            </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                    <SoftBox p={2}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor1}
                                    price="100"
                                    id="5"

                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor2}
                                    price="100"
                                    id="6"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor3}
                                    price="100"
                                    id="7"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor3}
                                    price="100"
                                    id="8"
                                />
                            </Grid>

                        </Grid>
                    </SoftBox>
                    <SoftBox pt={2} px={2}>

                        <SoftBox mb={1}>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                Boosters
                            </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                    <SoftBox p={2}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor1}
                                    price="100"
                                    id="9"


                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor2}
                                    price="100"
                                    id="10"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor3}
                                    price="100"
                                    id="11"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor3}
                                    price="100"
                                    id="12"
                                />
                            </Grid>

                        </Grid>
                    </SoftBox>
                </Card>
            </SoftBox>
            <SoftBox mb={3}>
                <Card>
                    <SoftBox pt={2} px={2}>
                        <SoftBox mb={0.5}>
                            <SoftTypography variant="h6" fontWeight="medium">
                                Reward Management
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1}>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                Coins
                            </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                    <SoftBox p={2}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor1}
                                    price="100"
                                    id="13"

                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor2}
                                    price="100"
                                    id="14"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor3}
                                    price="100"
                                    id="15"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={3}>
                                <DefaultProjectCard
                                    image={homeDecor3}
                                    price="100"
                                    id="16"
                                />
                            </Grid>

                        </Grid>
                    </SoftBox>
                </Card>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Overview;
