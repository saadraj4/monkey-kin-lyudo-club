import React, { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Pagination from "@mui/material/Pagination";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Table from "examples/Tables/Table";
import Profile from "./ProfileComponent"
// Data
import AffiliateInvitees from "./data/AffiliateInviteesData";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import { Grid } from "@mui/material";
import SoftButton from "../../components/SoftButton";
import { useNavigate } from "react-router-dom";
import Transactions from "./Transactions";

function Tables() {
    const navigate = useNavigate();
    const { columns, rows } = AffiliateInvitees;

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5; // Show 5 rows per page

    // Calculate the index for slicing the rows
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);


    // Handle pagination
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <DashboardLayout>
            <SoftBox py={3}>
                {/* Go Back Button */}
                <SoftBox mb={3} display="flex" justifyContent="flex-start">
                    <SoftButton
                        variant="contained"
                        color="info"
                        onClick={() => navigate("/UserManagement")} // Replace "/some-route" with your desired route
                    >
                        Go Back
                    </SoftButton>
                </SoftBox>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} xl={4}>
                            <Profile
                                image="https://via.placeholder.com/150" // Replace with actual image URL
                                name="John Doe"
                                playerId="12345"
                                winStreak="10"
                                winRatio="75%"
                                level="Gold"
                            />
                        </Grid>
                    </Grid>
                </SoftBox>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} xl={4}>
                            <MiniStatisticsCard
                                title={{ text: "Coins in Wallet" }}
                                count="500"
                                percentage={{ color: "success", text: "+55%" }}
                                icon={{ color: "info", component: "paid" }}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={4}>
                            <MiniStatisticsCard
                                title={{ text: "Diamonds in Wallet" }}
                                count="2300"
                                percentage={{ color: "success", text: "+3%" }}
                                icon={{ color: "info", component: "public" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={4}>
                            <MiniStatisticsCard
                                title={{ text: "Boosters in Wallet" }}
                                count="+346"
                                percentage={{ color: "error", text: "-2%" }}
                                icon={{ color: "info", component: "emoji_events" }}
                            />
                        </Grid>

                    </Grid>
                </SoftBox>
                <SoftBox mb={3}>
                    <Transactions />
                </SoftBox>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h6">Affiliate Invitees</SoftTypography>
                        </SoftBox>
                        <SoftBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            <Table columns={columns} rows={currentRows} />
                        </SoftBox>
                        <SoftBox display="flex" justifyContent="center" mt={3}>
                            <Pagination
                                count={Math.ceil(rows.length / rowsPerPage)} // Calculate number of pages
                                page={currentPage}
                                onChange={handlePageChange}
                                color="info"
                            />
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Tables;
