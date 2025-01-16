import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Avatar, Card, Modal, TextField, MenuItem, Select, InputLabel, DialogActions, Dialog, DialogTitle, DialogContent, FormControl } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";

function UserProfile({ image, name, playerId, winStreak, winRatio, level }) {
  // State to manage the modal's visibility
  const [openEdit, setOpenEdit] = useState(false);
  const [openGift, setOpenGift] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const assets = ['Asset 1', 'Asset 2', 'Asset 3']; // Replace with your actual assets
  const variants = ['Variant 1', 'Variant 2', 'Variant 3']; // Replace with your actual variants


  // Handlers to open and close the modal
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenGift = () => setOpenGift(true);
  const handleCloseGift = () => setOpenGift(false);

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
    <>
      <SoftBox
        // sx={{
        //   boxShadow: "0px 4px 10px rgb(78, 78, 233)", // Custom shadow
        //   borderRadius: "12px",
        // }}
        elevation={4}>

        <SoftBox
          display="flex"
          alignItems="center"
          p={5}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgb(78, 78, 233)",
            maxWidth: "400px",
            backgroundColor: "#fff",
          }}
        >
          {/* Profile Image */}
          <Avatar
            src={image}
            alt="User Profile"
            sx={{
              width: 100,
              height: 100,
              border: "2px solid #000",
              marginRight: "16px",
            }}
          />

          {/* User Details */}
          <SoftBox>
            <SoftTypography variant="h6" fontWeight="bold">
              {name}
            </SoftTypography>
            <SoftTypography variant="body2" color="textSecondary">
              Player ID: {playerId}
            </SoftTypography>
            <SoftTypography variant="body2" color="textSecondary">
              Win Streak: {winStreak}
            </SoftTypography>
            <SoftTypography variant="body2" color="textSecondary">
              Win Ratio: {winRatio}
            </SoftTypography>
            <SoftTypography variant="body2" color="textSecondary" mb={1}>
              Level: {level}
            </SoftTypography>

            <SoftBox>
              <SoftButton variant="gradient" color="info" onClick={handleOpenGift} mb={2}>
                GIFT
              </SoftButton>


              <SoftButton variant="gradient" color="info" onClick={handleOpenEdit} mt={2}>
                Edit Profile
              </SoftButton>

            </SoftBox>
          </SoftBox>

        </SoftBox>


      </SoftBox>

      {/* Modal for editing profile */}
      <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <SoftTypography variant="h6" fontWeight="bold" mb={2}>
            Edit Profile
          </SoftTypography>
          <SoftBox component="form">
            <TextField
              fullWidth
              label="Name"
              defaultValue={name}
              margin="normal"
              InputLabelProps={{
                color: "black",
                shrink: true, // Ensures the label is always shrunk
              }}
              disabled
            />
            <TextField
              fullWidth
              label="Player ID"
              defaultValue={playerId}
              margin="normal"
              InputLabelProps={{
                color: "black",
                shrink: true, // Ensures the label is always shrunk
              }}
              disabled

            />
            <TextField
              fullWidth
              label="Win Streak"
              defaultValue={winStreak}
              type="number"
              margin="normal"
              InputLabelProps={{
                color: "black",
                shrink: true, // Ensures the label is always shrunk
              }}
              disabled

            />
            <TextField
              fullWidth
              label="Win Ratio"
              defaultValue={winRatio}
              type="text"
              margin="normal"
              InputLabelProps={{
                color: "black",
                shrink: true, // Ensures the label is always shrunk
              }}
              disabled

            />
            <TextField
              fullWidth
              label="Level"
              defaultValue={level}
              type="text"
              margin="normal"
              InputLabelProps={{
                color: "black",
                shrink: true, // Ensures the label is always shrunk
              }}
              disabled

            />
            <SoftBox mt={2} display="flex" justifyContent="flex-end">
              <SoftButton variant="contained" color="secondary" onClick={handleCloseEdit}>
                Cancel
              </SoftButton>

            </SoftBox>
          </SoftBox>
        </Box>
      </Modal>

      {/* Modal for Gifting Section */}


      {/* <Dialog open={openGift} onClose={handleCloseGift}>
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
    </Dialog> */}
    </>
  );
}

UserProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playerId: PropTypes.string.isRequired,
  winStreak: PropTypes.number.isRequired,
  winRatio: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default UserProfile;
