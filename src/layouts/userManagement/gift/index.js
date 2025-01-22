// import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Autocomplete } from '@mui/material';
// import SoftBox from 'components/SoftBox';
// import SoftButton from 'components/SoftButton';
// import SoftInput from 'components/SoftInput';
// import SoftTypography from 'components/SoftTypography';
// import React, { useState } from 'react';
// import Coin from 'assets/images/Coins.jpeg';
// import Diamond from 'assets/images/diamond.png';
// import Booster from 'assets/images/booster.png';

// function index({ openGift, handleCloseGift }) {
//   const [selectedAsset, setSelectedAsset] = useState('');
//   const [selectedVariant, setSelectedVariant] = useState('');

//   // Map assets to their respective variants and image URLs
//   const assetVariants = {
//     Coins: [
//       { name: 'Gold Coin', imageUrl: Coin },
//       { name: 'Silver Coin', imageUrl: Coin },
//       { name: 'Bronze Coin', imageUrl: Coin },
//     ],
//     Diamonds: [
//       { name: 'Red Diamond', imageUrl: Diamond },
//       { name: 'Blue Diamond', imageUrl: Diamond },
//       { name: 'Green Diamond', imageUrl: Diamond },
//     ],
//     Boosters: [
//       { name: 'Speed Booster', imageUrl: Booster },
//       { name: 'Energy Booster', imageUrl: Booster },
//       { name: 'Shield Booster', imageUrl: Booster },
//     ],
//   };

//   // Handle asset change
//   const handleAssetChange = (event, value) => {
//     setSelectedAsset(value);
//     setSelectedVariant(''); // Reset variant when asset changes
//   };

//   // Handle variant change
//   const handleVariantChange = (event, value) => {
//     setSelectedVariant(value);
//   };

//   // Handle submit
//   const handleSubmit = () => {
//     console.log('Gift updated', { asset: selectedAsset, variant: selectedVariant });
//     handleCloseGift();
//   };

//   const handleClose = () => {
//     setSelectedAsset('');
//     setSelectedVariant('');
//     handleCloseGift();
//   };

//   return (
//     <Dialog open={openGift} onClose={handleClose} maxWidth="sm" fullWidth>
//       <SoftBox>
//         <DialogTitle display="flex" alignItems="center" justifyContent="center" fontWeight="bold" fontSize="20px">
//           Gift
//         </DialogTitle>
//         <DialogContent>
//           {/* Asset Dropdown */}
//           <SoftTypography sx={{ marginTop: 2 }} variant="body2">
//             Select Asset
//           </SoftTypography>

//           {/* Asset Dropdown using Autocomplete */}
//           <Autocomplete
//             value={selectedAsset}
//             onChange={handleAssetChange}
//             options={Object.keys(assetVariants)}
//             renderInput={(params) => (
//               <TextField {...params} variant="outlined" fullWidth />
//             )}
//             renderOption={(props, option) => (
//               <li {...props}>
//                 <SoftBox sx={{ display: 'flex', alignItems: 'center' }}>
//                   <img
//                     src={assetVariants[option][0]?.imageUrl} // Assuming the first variant image for the asset
//                     alt={option}
//                     style={{ width: 20, height: 20, marginRight: 8 }}
//                   />
//                   <SoftTypography variant="body2">{option}</SoftTypography>
//                 </SoftBox>
//               </li>
//             )}
//             sx={{ marginBottom: 1 }}
//           />

//           {/* Variant Dropdown */}
//           <SoftTypography sx={{ marginTop: 2 }} variant="body2">
//             Select Variant
//           </SoftTypography>
//           <Autocomplete
//             value={selectedVariant}
//             onChange={handleVariantChange}
//             options={
//               selectedAsset
//                 ? assetVariants[selectedAsset].map((variant) => variant.name)
//                 : []
//             }
//             renderInput={(params) => (
//               <TextField {...params} variant="outlined" fullWidth />
//             )}
//             renderOption={(props, variant) => {
//               const selectedVariantImage = assetVariants[selectedAsset].find(
//                 (v) => v.name === variant
//               )?.imageUrl;
//               return (
//                 <li {...props}>
//                   <SoftBox sx={{ display: 'flex', alignItems: 'center' }}>
//                     <img
//                       src={selectedVariantImage}
//                       alt={variant}
//                       style={{ width: 20, height: 20, marginRight: 8 }}
//                     />
//                     <SoftTypography variant="body2">{variant}</SoftTypography>
//                   </SoftBox>
//                 </li>
//               );
//             }}
//             disabled={!selectedAsset}
//             sx={{ marginBottom: 1 }}
//           />

//           {/* Quantity / Hours Input */}
//           <SoftTypography sx={{ marginTop: 2 }} variant="body2">
//             Quantity / Hours
//           </SoftTypography>
//           <SoftInput
//             variant="outlined"
//             type="number"
//             placeholder="Enter quantity or hours"
//             fullWidth
//             onWheel={(e) => e.target.blur()}
//           />

//           {/* Message Input */}
//           <SoftTypography sx={{ marginTop: 2 }} variant="body2">
//             Message
//           </SoftTypography>
//           <SoftInput placeholder="Message" variant="outlined" type="text" fullWidth multiline rows={4} />
//         </DialogContent>

//         <DialogActions>
//           <SoftBox mt={3} mb={1}>
//             <SoftButton variant="gradient" color="secondary" fullWidth onClick={handleClose} sx={{ color: 'black' }}>
//               Cancel
//             </SoftButton>
//           </SoftBox>

//           <SoftBox mt={3} mb={1}>
//             <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit} sx={{ color: 'black' }}>
//               Send
//             </SoftButton>
//           </SoftBox>
//         </DialogActions>
//       </SoftBox>
//     </Dialog>
//   );
// }

// export default index;







import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
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

  const handleAssetChange = (event) => {
    setSelectedAsset(event.target.value);
    setSelectedVariant(''); // Reset variant when asset changes
  };

  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Gift updated', { asset: selectedAsset, variant: selectedVariant });
    handleCloseGift();
  };

  const handleClose = () => {
    setSelectedAsset('');
    setSelectedVariant('');
    handleCloseGift();
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
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <Select
              value={selectedAsset}
              onChange={handleAssetChange}
              displayEmpty
              input={<SoftInput variant="outlined" />}
            >
             
              {Object.keys(assetVariants).map((asset) => (
                <MenuItem key={asset} value={asset}>
                  <SoftBox display="flex" alignItems="center">
                    <img
                      src={assetVariants[asset][0]?.imageUrl}
                      alt={asset}
                      style={{ width: 20, height: 20, marginRight: 8 }}
                    />
                    {asset}
                  </SoftBox>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Variant Dropdown */}
          <SoftTypography sx={{ marginTop: 1 }} variant="body2">
            Select Variant
          </SoftTypography>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <Select
              value={selectedVariant}
              onChange={handleVariantChange}
              displayEmpty
              input={<SoftInput variant="outlined" />}
              disabled={!selectedAsset}
            >
             
              {selectedAsset &&
                assetVariants[selectedAsset].map((variant) => (
                  <MenuItem key={variant.name} value={variant.name}>
                    <SoftBox display="flex" alignItems="center">
                      <img
                        src={variant.imageUrl}
                        alt={variant.name}
                        style={{ width: 20, height: 20, marginRight: 8 }}
                      />
                      {variant.name}
                    </SoftBox>
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

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
          <SoftBox mt={2} mb={1}>
            <SoftButton variant="gradient" color="secondary" fullWidth onClick={handleClose} sx={{ color: 'black' }}>
              Cancel
            </SoftButton>
          </SoftBox>

          <SoftBox mt={2} mb={1}>
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
