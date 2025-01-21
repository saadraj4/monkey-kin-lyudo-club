import React, { useState } from 'react'
import SideNav from '../SideNavbar'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import SoftButton from 'components/SoftButton'
import SoftBox from 'components/SoftBox'
import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, MenuItem, Select } from '@mui/material'
import SoftTypography from 'components/SoftTypography'
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard'
import Coins from "assets/images/coins.png";
import Diamonds from "assets/images/diamond.png";
import Boosters from "assets/images/booster.png";

import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import SoftInput from 'components/SoftInput'

function index() {
    const [selectedAsset, setSelectedAsset] = useState('');
    const [selectedVariant, setSelectedVariant] = useState('');
    const [openGift, setOpenGift] = useState(false);
    const handleOpenGift = () => setOpenGift(true); // Open the Gift modal
    const handleCloseGift = () => setOpenGift(false); // Close the Gift modal

    // Map assets to their respective variants and image URLs
    const assetVariants = {
        Coins: [
            { name: 'Gold Coin', imageUrl: Coins },
            { name: 'Silver Coin', imageUrl: Coins },
            { name: 'Bronze Coin', imageUrl: Coins },
        ],
        Diamonds: [
            { name: 'Red Diamond', imageUrl: Diamonds },
            { name: 'Blue Diamond', imageUrl: Diamonds },
            { name: 'Green Diamond', imageUrl: Diamonds },
        ],
        Boosters: [
            { name: 'Speed Booster', imageUrl: Boosters },
            { name: 'Energy Booster', imageUrl: Boosters },
            { name: 'Shield Booster', imageUrl: Boosters },
        ],
    };

    // Handle asset change
    const handleAssetChange = (event) => {
        setSelectedAsset(event.target.value);
        setSelectedVariant(''); // Reset variant when asset changes
    };

    // Handle variant change
    const handleVariantChange = (event) => {
        setSelectedVariant(event.target.value);
    };

    // Handle submit
    const handleSubmit = () => {
        console.log('Gift updated', { asset: selectedAsset, variant: selectedVariant });
        handleCloseGift();
    };

    const handleClose = () => {
        setSelectedAsset('');
        setSelectedVariant('');
        handleCloseGift();
    };

    // Function to open the select dropdown on field click
    const openAssetDropdown = () => {
        document.getElementById('asset-select').click();
    };

    const openVariantDropdown = () => {
        document.getElementById('variant-select').click();
    };
    const CoinsData = [
        { id: 1, image: Coins, price: "$10", coins: "10k" },
        { id: 2, image: Coins, price: "$10", coins: "10k" },
        { id: 3, image: Coins, price: "$10", coins: "10k" },
        { id: 4, image: Coins, price: "$10", coins: "10k" },

    ];
    const DiamondsData = [
        { id: 1, image: Diamonds, price: "$10", coins: "10k" },
        { id: 2, image: Diamonds, price: "$10", coins: "10k" },
        { id: 3, image: Diamonds, price: "$10", coins: "10k" },
        { id: 4, image: Diamonds, price: "$10", coins: "10k" },

    ];
    const BoostersData = [
        { id: 1, image: Boosters, price: "$10", coins: "10k" },
        { id: 2, image: Boosters, price: "$10", coins: "10k" },
        { id: 3, image: Boosters, price: "$10", coins: "10k" },
        { id: 4, image: Boosters, price: "$10", coins: "10k" },

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
                    zIndex: 1500, // Ensures it appears above other elements
                }}>
                <SoftButton color="info" variant="contained" alignItem="right" onClick={handleOpenGift}>
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
                        {CoinsData.map((card, index) => (
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
                        {DiamondsData.map((card, index) => (
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
                        {BoostersData.map((card, index) => (
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
            <Dialog open={openGift} onClose={handleClose} maxWidth="sm" fullWidth>
                <SoftBox>
                    <DialogTitle display="flex" alignItems="center" justifyContent="center" fontWeight="bold" fontSize="20px">
                        Create Package
                    </DialogTitle>
                    <DialogContent>
                        {/* Asset Dropdown */}
                        <SoftTypography sx={{ marginTop: 2 }} variant="body2">
                            Select Asset
                        </SoftTypography>
                        <SoftBox onClick={openAssetDropdown}>
                            <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }}>
                                <Select
                                    id="asset-select"
                                    value={selectedAsset}
                                    onChange={handleAssetChange}
                                    label="Asset"
                                    defaultValue=""
                                    aria-label="Select an asset"
                                >
                                    {Object.keys(assetVariants).map((asset) => (
                                        <MenuItem key={asset} value={asset}>
                                            {asset}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </SoftBox>

                        {/* Variant Dropdown */}
                        <SoftTypography sx={{ marginTop: 2 }} variant="body2">
                            Select Variant
                        </SoftTypography>
                        <SoftBox onClick={openVariantDropdown}>
                            <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }}>
                                <Select
                                    id="variant-select"
                                    value={selectedVariant}
                                    onChange={handleVariantChange}
                                    label="Variant"
                                    defaultValue=""
                                    disabled={!selectedAsset}
                                    aria-label="Select a variant"
                                >
                                    {selectedAsset
                                        ? assetVariants[selectedAsset].map((variant) => (
                                            <MenuItem key={variant.name} value={variant.name}>
                                                <SoftBox sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <img
                                                        src={variant.imageUrl}
                                                        alt={variant.name}
                                                        style={{ width: 20, height: 20, marginRight: 8 }}
                                                    />
                                                    <SoftTypography variant="body2">{variant.name}</SoftTypography>
                                                </SoftBox>
                                            </MenuItem>
                                        ))
                                        : [
                                            <MenuItem key="placeholder" value="" disabled>
                                                Select an asset first
                                            </MenuItem>,
                                        ]}
                                </Select>
                            </FormControl>
                        </SoftBox>

                        {/* Quantity / Hours Input */}
                        <SoftTypography sx={{ marginTop: 2 }} variant="body2">
                            Quantity / Hours
                        </SoftTypography>
                        <SoftInput
                            variant="outlined"
                            type="number"
                            placeholder="Enter quantity or hours"
                            fullWidth
                            onWheel={(e) => e.target.blur()}
                        />

                        {/* Message Input */}
                        <SoftTypography sx={{ marginTop: 2 }} variant="body2">
                            Message
                        </SoftTypography>
                        <SoftInput placeholder="Message" variant="outlined" type="text" fullWidth multiline rows={4} />
                    </DialogContent>

                    <DialogActions>
                        <SoftBox mt={4} mb={1}>
                            <SoftButton variant="gradient" color="secondary" fullWidth onClick={handleClose} sx={{ color: 'black' }}>
                                Cancel
                            </SoftButton>
                        </SoftBox>

                        <SoftBox mt={4} mb={1}>
                            <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit} sx={{ color: 'black' }}>
                                Send
                            </SoftButton>
                        </SoftBox>
                    </DialogActions>
                </SoftBox>
            </Dialog>
        </DashboardLayout>
    )
}

export default index