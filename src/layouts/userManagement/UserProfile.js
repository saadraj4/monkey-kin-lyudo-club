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
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import SoftButton from "../../components/SoftButton";
import { useNavigate } from "react-router-dom";
import Transactions from "./Transactions";
import SideNavbar from "../SideNavbar";
import SoftInput from "components/SoftInput";
function Tables() {
    const navigate = useNavigate();
    const { columns, rows } = AffiliateInvitees;

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [openModal, setOpenModal] = useState(false); // State to open/close modal
    const rowsPerPage = 5; // Show 5 rows per page

    // Calculate the index for slicing the rows
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
    const data = [
        {
            title: { text: "Coins" },
            count: "500",
            percentage: { color: "success", text: "+55%" },
            icon: { color: "info", component: "paid" },
        },
        {
            title: { text: "Diamond" },
            count: "2300",
            percentage: { color: "success", text: "+3%" },
            icon: { color: "info", component: "public" },
        },
        {
            title: { text: "Boosters" },
            count: "+346",
            percentage: { color: "error", text: "-2%" },
            icon: { color: "info", component: "emoji_events" },
        },
    ];

    // Handle pagination
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleSubmit = () => {
        console.log("Submitted");
        handleCloseModal();
    }

    // Open Modal
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <>
            <DashboardLayout>
                <SideNavbar />
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
                    <Card>
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
                                <SoftBox mb={3} mt={5} ml={5}>
                                    <Grid container spacing={3}>
                                        {data.map((item, index) => (
                                            <Grid item xs={12} sm={6} xl={6} width={150} key={index}>
                                                <MiniStatisticsCard
                                                    title={item.title}
                                                    count={item.count}
                                                    percentage={item.percentage}
                                                    icon={item.icon}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </SoftBox>
                            </Grid>

                        </SoftBox>

                    </Card>
                    <SoftBox mb={3}>
                        <Transactions />
                    </SoftBox>
                    <SoftBox mb={3}>
                        <Card>
                            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                                <SoftTypography variant="h6">Affiliate Invitees</SoftTypography>
                                <SoftButton variant="gradient" color="info" sx={{ marginLeft: "auto" }}
                                    onClick={handleOpenModal}
                                >
                                    Affiliate Settings
                                </SoftButton>
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

            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>Affiliate Setting</DialogTitle>
                <DialogContent>
                    <SoftTypography
                        sx={{
                            marginTop: 4,

                        }}
                        variant="body2">
                        Number of Games Win
                    </SoftTypography>
                    {/* Games Win Field */}
                    <SoftInput
                        placeholder="Games Win"
                        variant="outlined"
                        fullWidth


                    />
                    <SoftTypography
                        sx={{ marginTop: 4, }}
                        variant="body2">
                        Bonus percentage
                    </SoftTypography>
                    {/* Percentage Field */}
                    <SoftInput
                        placeholder="Percentage"
                        variant="outlined"
                        fullWidth

                    />
                </DialogContent>
                <DialogActions>
                    <SoftBox mt={4} mb={1}>
                        <SoftButton variant="gradient" color="secondary" fullWidth onClick={handleCloseModal} sx={{ color: "black" }}>
                            Cancel
                        </SoftButton>
                    </SoftBox>

                    <SoftBox mt={4} mb={1}>
                        <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit} sx={{ color: "black" }}>
                            Save
                        </SoftButton>
                    </SoftBox>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Tables;
