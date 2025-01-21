import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem, Select } from '@mui/material';
import SoftBox from 'components/SoftBox';
import SoftButton from 'components/SoftButton';
import SoftInput from 'components/SoftInput';
import SoftTypography from 'components/SoftTypography';
import React, { useState } from 'react';
import Coin from 'assets/images/Coins.jpeg';
import Diamond from 'assets/images/diamond.png';
import Booster from 'assets/images/booster.png';

function index({ openGift, handleCloseGift }) {
  const [selectedAsset, setSelectedAsset] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');

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

  return (
    <Dialog open={openGift} onClose={handleClose} maxWidth="sm" fullWidth>
      <SoftBox>
        <DialogTitle display="flex" alignItems="center" justifyContent="center" fontWeight="bold" fontSize="20px">
          Gift
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
  );
}

export default index;
