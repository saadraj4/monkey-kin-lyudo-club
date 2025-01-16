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
import { Card, Grid, IconButton } from "@mui/material";
import { Upload } from '@mui/icons-material';

// import Card from "@mui/material";
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
    const handleUpload = () => {

        console.log("Image upload triggered");
    };
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

    const sections = [
        { name: "Coins", assetType: "Coins" },
        { name: "Diamonds", assetType: "Diamonds" },
        { name: "Boosters", assetType: "Boosters" },
        { name: "Avatars", assetType: "Avatars" },
        { name: "Dice", assetType: "Dice" },
        { name: "Frames", assetType: "Frames" },
        { name: "Bounty", assetType: "Bounty" },
    ];


    return (
        <DashboardLayout>
            <Sidenav />
            <SoftBox mb={5}>
                <Card mb={3}>
                    {sections.map((section, index) => (
                        <div key={index}>
                            <SoftBox pt={2} px={2} position="relative">
                                {/* Title and Upload Button */}
                                <SoftBox mb={1}>
                                    <SoftTypography variant="button" fontWeight="regular" color="text">
                                        {section.name}
                                    </SoftTypography>
                                </SoftBox>

                                {/* Upload Button */}
                                <IconButton
                                    onClick={() => handleUpload(section.assetType)}
                                    sx={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        fontSize: '2rem',
                                    }}
                                >
                                    <Upload />
                                </IconButton>
                            </SoftBox>

                            {/* Slider */}
                            <SoftBox p={2}>
                                <Slider {...settings}>
                                    {cardData.map((card, index) => (
                                        <Card key={index} style={{ padding: "0 10px" }}>
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
                        </div>
                    ))}
                </Card>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Overview;
