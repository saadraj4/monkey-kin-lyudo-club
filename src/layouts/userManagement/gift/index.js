import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SoftBox from 'components/SoftBox'
import SoftButton from 'components/SoftButton'
import SoftInput from 'components/SoftInput'
import SoftTypography from 'components/SoftTypography'
import React, {useState} from 'react'

function index({ openGift, handleCloseGift }) {
    const [selectedAsset, setSelectedAsset] = useState("");
    const [selectedVariant, setSelectedVariant] = useState("");
    const assets = ['Asset 1', 'Asset 2', 'Asset 3']; // Replace with your actual assets
    const variants = ['Variant 1', 'Variant 2', 'Variant 3']; // Replace with your actual variants

    
      const handleSubmit = (event) => {
        console.log("Gift updated", event);
        handleCloseGift();
      }
      const handleAssetChange = (event) => {
        setSelectedAsset(event.target.value);
      };
    
      const handleVariantChange = (event) => {
        setSelectedVariant(event.target.value);
      };
    

  return (

    <Dialog open={openGift} onClose={handleCloseGift}>
    <SoftBox>
      <DialogTitle>Gift</DialogTitle>
      <DialogContent>
        <SoftTypography sx={{ marginTop: 4 }} variant="body2">
          Select Asset
        </SoftTypography>
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
          <InputLabel>Asset</InputLabel>
          <Select
            value={selectedAsset}
            onChange={handleAssetChange}
            label="Asset"
            defaultValue=""
            open={false} // Make sure the dropdown opens on click
          >
            {assets.map((asset, index) => (
              <MenuItem key={index} value={asset}>
                {asset}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <SoftTypography sx={{ marginTop: 4 }} variant="body2">
          Select Variant
        </SoftTypography>
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
          <InputLabel>Variant</InputLabel>
          <Select
            value={selectedVariant}
            onChange={handleVariantChange}
            label="Variant"
            defaultValue=""
          >
            {variants.map((variant, index) => (
              <MenuItem key={index} value={variant}>
                {variant}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <SoftTypography sx={{ marginTop: 4 }} variant="body2">
          Quantity
        </SoftTypography>
        <SoftInput placeholder="Quantity" variant="outlined" type="number" fullWidth />

        <SoftTypography sx={{ marginTop: 4 }} variant="body2">
          Message
        </SoftTypography>
        <SoftInput placeholder="Message" variant="outlined" type="text" fullWidth />
      </DialogContent>

      <DialogActions>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="secondary" fullWidth onClick={handleCloseGift} sx={{ color: "black" }}>
            Cancel
          </SoftButton>
        </SoftBox>

        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit} sx={{ color: "black" }}>
            Send
          </SoftButton>
        </SoftBox>
      </DialogActions>
    </SoftBox>
  </Dialog>
  )
}

export default index