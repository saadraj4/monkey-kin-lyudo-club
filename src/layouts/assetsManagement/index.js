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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import Slider from "react-slick";


function Overview() {
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite looping
        speed: 500, // Transition speed in ms
        slidesToShow: 4, // Number of slides visible at a time
        slidesToScroll: 1, // Number of slides to scroll per action
        autoplay: true, // Enable autoplay
  autoplaySpeed: 1000, // Time interval between transitions (in ms)
//   pauseonh
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ],
    };
    const cardData = [
        { id: "1", image: homeDecor1, price: "100" },
        { id: "2", image: homeDecor2, price: "100" },
        { id: "3", image: homeDecor3, price: "100" },
        { id: "4", image: homeDecor3, price: "100" },
        { id: "19", image: homeDecor1, price: "100" },
        { id: "20", image: homeDecor2, price: "100" },
    ];

    return (
        <DashboardLayout>
            <Sidenav />
            <SoftBox mb={3}>
                <Card>
                    <SoftBox pt={2} px={2}>
                        <SoftBox mb={0.5}>
                            <SoftTypography variant="h6" fontWeight="medium">
                                Assets Management
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1}>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                Coins
                            </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                    <SoftBox p={2}>
                        <Slider {...settings}>
                            {cardData.map((card) => (
                                <Card key={card.id} style={{ padding: "0 10px" }}>
                                   
                                    <Grid item xs={12} md={6} xl={3}>
                                    <DefaultProjectCard
                                        image={card.image}
                                        price={card.price}
                                        id={card.id}
                                    />
                                    
                                    </Grid>
                                </Card>
                            ))}
                        </Slider>
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
