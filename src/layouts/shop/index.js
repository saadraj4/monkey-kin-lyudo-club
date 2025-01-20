import React from 'react'
import SideNav from '../SideNavbar'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import SoftButton from 'components/SoftButton'
import SoftBox from 'components/SoftBox'
import { Grid } from '@mui/material'
import SoftTypography from 'components/SoftTypography'
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard'
import Coins from "assets/images/Coins.jpeg";
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'

function index() {
    const Data = [
        { id: 1, image: Coins, price: "$10", coins: "10k" },
        { id: 2, image: Coins, price: "$10", coins: "10k" },
        { id: 3, image: Coins, price: "$10", coins: "10k" },
        { id: 4, image: Coins, price: "$10", coins: "10k" },
    ];
    return (
        <DashboardLayout>
            <SideNav />
            <DashboardNavbar />
            <SoftBox    
                sx={{
                    position: "absolute", // Makes the button position relative to the viewport
                    top: "16px", // Distance from the top
                    right: "16px", // Distance from the left
                    zIndex: 1000, // Ensures it appears above other elements
                }}>
                <SoftButton color="info" variant="contained" alignItem="right" >
                    Create Package
                </SoftButton>
            </SoftBox>


            <SoftBox mb={3} mt={5}>
            
                    <SoftBox pt={2} px={2}>
                        <SoftBox mb={1}>
                            <SoftTypography variant="h6" fontWeight="medium">
                                Coins
                            </SoftTypography>
                        </SoftBox>
                        
                    </SoftBox>
                    <SoftBox p={2}>
                        <Grid container spacing={3}>
                            {Data.map((card, index) => (
                                <Grid item xs={12} md={6} xl={3} key={index}>
                                    <DefaultInfoCard
                                                        icon={card.image}
                                                        title={card.coins}
                                                        value={card.price}
                                                      />
                                </Grid>
                            ))}
                        </Grid>
                    </SoftBox>

               
            </SoftBox>

            <SoftBox mb={3} >
                    <SoftBox pt={2} px={2}>
                        <SoftBox mb={0.5}>
                            <SoftTypography variant="h6" fontWeight="medium">
                                Diamonds
                            </SoftTypography>
                        </SoftBox>
                        
                    </SoftBox>
                    <SoftBox p={2}>
                        <Grid container spacing={3}>
                            {Data.map((card, index) => (
                                <Grid item xs={12} md={6} xl={3} key={index}>
                                    <DefaultInfoCard
                                                        icon={card.image}
                                                        title={card.coins}
                                                        value={card.price}
                                                      />
                                </Grid>
                            ))}
                        </Grid>
                    </SoftBox>

            </SoftBox>


            <SoftBox mb={3}>
                    <SoftBox pt={2} px={2}>
                        <SoftBox mb={0.5}>
                            <SoftTypography variant="h6" fontWeight="medium">
                                Boosters
                            </SoftTypography>
                        </SoftBox>
                        
                    </SoftBox>
                    <SoftBox p={2}>
                        <Grid container spacing={3}>
                            {Data.map((card, index) => (
                                <Grid item xs={12} md={6} xl={3} key={index}>
                                    <DefaultInfoCard
                                                        icon={card.image}
                                                        title={card.coins}
                                                        value={card.price}
                                                      />
                                </Grid>
                            ))}
                        </Grid>
                    </SoftBox>

            </SoftBox>

        </DashboardLayout>
    )
}

export default index