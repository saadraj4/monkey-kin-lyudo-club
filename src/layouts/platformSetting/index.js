import React from "react";
import { TextField, Button, Grid, Typography, Card } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import Sidenav from "../SideNavbar";
const PlatformManagement = () => {
    return (
        <DashboardLayout>
            <Sidenav />
            <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
                <SoftTypography variant="h4" gutterBottom>
                    Platform Management
                </SoftTypography>
                <Card style={{ padding: "20px", marginTop: "20px" }}>
                    <Grid container spacing={2}>
                        {/* Support Email */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="Support email"
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>

                        {/* Chest Reward & Signup Bonus */}
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                placeholder="Chest Reward"
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                placeholder="Signup Bonus coins"
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>

                        {/* Signup Bonus Diamonds & Defender */}
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                placeholder="Signup Bonus diamonds"
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                placeholder="Signup Bonus defender"
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>

                        {/* Daily Login Rewards */}
                        <Grid item xs={12}>
                            <SoftTypography variant="h6" gutterBottom>
                                Daily Login Reward
                            </SoftTypography>
                        </Grid>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Grid item xs={6} key={index}>
                                <TextField
                                    fullWidth
                                    placeholder={`Day ${index + 1}`}
                                    variant="outlined"
                                    color="secondary"
                                />
                            </Grid>
                        ))}

                        {/* Bounty Reward */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="Bounty reward"

                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>

                        {/* Update Platform Settings Button */}
                        <Grid item xs={12}>
                            <SoftButton
                                fullWidth
                                variant="contained"
                                color="info"
                                style={{ textTransform: "none" }}
                            >
                                Update Platform Settings
                            </SoftButton>
                        </Grid> 
                    </Grid>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default PlatformManagement;
