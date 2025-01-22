import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid"; // Import Grid component
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem, Select } from "@mui/material";
import SoftInput from "components/SoftInput";
import Coin from "assets/images/coins.png"
import Diamond from "assets/images/diamond.png"
import Booster from "assets/images/booster.png"

function DailyRewardList({ title, DailyReward }) {
  const [selectedAsset, setSelectedAsset] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [openReward, setOpenReward] = useState(false);

  const handleOpenReward = () => setOpenReward(true); // Open the Reward modal
  const handleCloseReward = () => setOpenReward(false); // Close the Reward modal

  // Map assets to their respective variants and image URLs
  const assetVariants = {
    Coins: [
      { name: 'Gold Coin', imageUrl: Coin },
      { name: 'Silver Coin', imageUrl: Coin },
      { name: 'Bronze Coin', imageUrl: Coin },
    ],
    Diamonds: [
      { name: 'Red Diamond', imageUrl: Diamond },
      { name: 'Blue Diamond', imageUrl: Diamond },
      { name: 'Green Diamond', imageUrl: Diamond },
    ],
    Boosters: [
      { name: 'Speed Booster', imageUrl: Booster },
      { name: 'Energy Booster', imageUrl: Booster },
      { name: 'Shield Booster', imageUrl: Booster },
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
  const handleSubmit = (id) => {
    console.log('Reward updated', { asset: selectedAsset, variant: selectedVariant });
    handleCloseReward();
  };

  const handleClose = () => {
    setSelectedAsset('');
    setSelectedVariant('');
    handleCloseReward();
  };

  // Function to open the select dropdown on field click
  const openAssetDropdown = () => {
    document.getElementById('asset-select').click();
  };

  const openVariantDropdown = () => {
    document.getElementById('variant-select').click();
  };

  const renderDailyReward = DailyReward.map(({ id,image, name, description }, index) => (
    <Grid item xs={12} sm={6} key={index}> {/* Use Grid item for each profile */}
      <SoftBox component="li" display="flex" alignItems="center" py={1} mb={1} ml={2}  mr={1}>
        <SoftBox mr={2}>
          <SoftAvatar src={image} alt="something here" variant="rounded" shadow="md" />
        </SoftBox>
        <SoftBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <SoftTypography variant="button" fontWeight="medium">
            {name}
          </SoftTypography>
          <SoftTypography variant="caption" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox ml="auto">
          <SoftButton
            component="a"
            target="_blank"
            variant="gradient"
            color="info"
            onClick={handleOpenReward}
          >
            Edit
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Grid>
  ));

  return (
    <>
      
      <Card sx={{ height: "100%" }}>
        <SoftBox pt={2} px={2}>
          <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {title}
          </SoftTypography>
        </SoftBox>
        <SoftBox p={2}>
          <Grid container spacing={2}>
            {renderDailyReward}
          </Grid>
        </SoftBox>
      </Card>
      <Dialog open={openReward} onClose={handleClose} maxWidth="sm" fullWidth>
        <SoftBox>
          <DialogTitle display="flex" alignItems="center" justifyContent="center" fontWeight="bold" fontSize="20px">
            Edit Rewards
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
            <SoftBox mt={3} mb={1}>
              <SoftButton variant="gradient" color="secondary" fullWidth onClick={handleClose} sx={{ color: 'black' }}>
                Cancel
              </SoftButton>
            </SoftBox>

            <SoftBox mt={3} mb={1}>
              <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit} sx={{ color: 'black' }}>
                Send
              </SoftButton>
            </SoftBox>
          </DialogActions>
        </SoftBox>
      </Dialog>
    </>
  );
}

// Typechecking props for the DailyRewardList
DailyRewardList.propTypes = {
  title: PropTypes.string.isRequired,
  DailyReward: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DailyRewardList;
