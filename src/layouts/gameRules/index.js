import React, { useState } from 'react'
import Sidenav from "../SideNavbar";
import SoftBox from "components/SoftBox";
import { Card, Grid, Modal, TextField } from '@mui/material';
import SoftTypography from 'components/SoftTypography';
import DefaultProjectCard from 'examples/Cards/ProjectCards/DefaultProjectCard';
import PlaceholderCard from 'examples/Cards/PlaceholderCard';
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import Coins from 'assets/images/Coins.jpeg';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import SoftButton from 'components/SoftButton';
import SoftInput from 'components/SoftInput';

function index() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [updatedCoins, setUpdatedCoins] = useState("");

    const Data = [
        { id: 1, image: Coins, title: "Game", coins: "30 Coins" },
        { id: 2, image: Coins, title: "Game", coins: "30 Coins" },
        { id: 3, image: Coins, title: "Game", coins: "30 Coins" },
        { id: 4, image: Coins, title: "Game", coins: "30 Coins" },
        { id: 5, image: Coins, title: "Game", coins: "30 Coins" },
        { id: 6, image: Coins, title: "Game", coins: "30 Coins" },
        { id: 7, image: Coins, title: "Game", coins: "30 Coins" },
        { id: 8, image: Coins, title: "Game", coins: "30 Coins" },
        { id: 9, image: Coins, title: "Game", coins: "30 Coins" },
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
                                    <DefaultProjectCard image={card.image} flag={false}/>
                                    <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2}>
                                        <SoftTypography variant="h6" fontWeight="medium">
                                            {card.title}
                                        </SoftTypography>
                                        <SoftTypography variant="h6" fontWeight="medium" textAlign="right">
                                            {card.coins}
                                        </SoftTypography>
                                    </SoftBox>
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