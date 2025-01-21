import React, { useState } from 'react'
import Sidenav from "../SideNavbar";
import SoftBox from "components/SoftBox";
import { Grid, Modal } from '@mui/material';
import SoftTypography from 'components/SoftTypography';
import Ludo from "assets/images/ludo.jpeg";
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import SoftButton from 'components/SoftButton';
import SoftInput from 'components/SoftInput';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import DefaultProjectCard from 'examples/Cards/ProjectCards/DefaultProjectCard';

function index() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [updatedCoins, setUpdatedCoins] = useState("");

    const Data = [
        { id: 1, image: Ludo, title: "Moscow", coins: "30 Coins" },
        { id: 2, image: Ludo, title: "Ganiva", coins: "30 Coins" },
        { id: 3, image: Ludo, title: "Sydney", coins: "30 Coins" },
        { id: 4, image: Ludo, title: "Dubai", coins: "30 Coins" },
        { id: 5, image: Ludo, title: "Beijing", coins: "30 Coins" },
        { id: 6, image: Ludo, title: "Rawalpindi", coins: "30 Coins" },
        { id: 7, image: Ludo, title: "Paris", coins: "30 Coins" },
        { id: 8, image: Ludo, title: "Cairo", coins: "30 Coins" },
        { id: 9, image: Ludo, title: "Tokyo", coins: "30 Coins" },
    ];

    const handleGridClick = (card) => {
        setSelectedCard(card);
        setUpdatedCoins(card.coins.replace(" Coins", "")); // Extract numeric value for editing
        setModalOpen(true);
    }
    // Handle modal close
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedCard(null);
        setUpdatedCoins("");
    };

    // Handle coin update
    const handleCoinChange = (e) => {
        setUpdatedCoins(e.target.value);
    };
    // Handle save changes
    const handleSaveChanges = () => {
        if (selectedCard) {
            console.log(`Updated coins for card ID ${selectedCard.id}: ${updatedCoins}`);
        }
        handleCloseModal();
    };
    return (
        <DashboardLayout>
            <Sidenav />
            <DashboardNavbar />
            <SoftBox mb={3}>
               
                    <SoftBox pt={2} px={2}>
                        <SoftBox mb={0.5}>
                            <SoftTypography variant="h6" fontWeight="medium">
                                Game
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1}>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                Game Rules
                            </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                    <SoftBox p={2}>
                        <Grid container spacing={3}>
                            {Data.map((card, index) => (
                                <Grid item xs={12} md={6} xl={3} key={index} onClick={() => handleGridClick(card)}>
                                    <DefaultProjectCard image={card.image} flag={false} title={card.title} coins={card.coins}/>
                                </Grid>
                            ))}
                        </Grid>
                    </SoftBox>

                
            </SoftBox>
            {/* Modal */}
            <Modal open={modalOpen} onClose={() => handleCloseModal}>
                <SoftBox
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    {selectedCard && (
                        <>
                            <img
                                src={selectedCard.image}
                                alt={selectedCard.title}
                                style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
                            />
                            <SoftTypography variant="h6" mb={2}>
                                Update Coins for {selectedCard.title}
                            </SoftTypography>
                            <SoftInput
                                fullWidth
                                label="Coins"
                                value={updatedCoins}
                                onChange={handleCoinChange}
                                type="number"
                                margin="normal"
                                onWheel={(e) => e.target.blur()} 
                                
                            />
                            <SoftBox display="flex" justifyContent="space-between" mt={3}>
                                <SoftButton onClick={handleCloseModal} color="secondary" variant="gradient">
                                    Cancel
                                </SoftButton>
                                <SoftButton onClick={handleSaveChanges} color="info" variant="gradient">
                                    Save
                                </SoftButton>
                            </SoftBox>
                        </>
                    )}
                </SoftBox>
            </Modal>
        </DashboardLayout>
    )
}

export default index