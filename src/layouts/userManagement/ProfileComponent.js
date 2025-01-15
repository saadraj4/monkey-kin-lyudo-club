import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Avatar, Card, Modal, TextField } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function UserProfile({ image, name, playerId, winStreak, winRatio, level }) {
  // State to manage the modal's visibility
  const [open, setOpen] = useState(false);

  // Handlers to open and close the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event) => {
    console.log("Profile updated",event);
    handleClose();
  } 
    return (
    <>
      <SoftBox>
        <Card
          sx={{
            boxShadow: "0px 4px 10px rgb(78, 78, 233)", // Custom shadow
            borderRadius: "12px",
          }}
          elevation={4}
        >
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
              <SoftTypography variant="body2" color="textSecondary">
                Level: {level}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftButton variant="gradient" color="info" onClick={handleOpen}>
            Edit Profile
          </SoftButton>
        </Card>
      </SoftBox>

      {/* Modal for editing profile */}
      <Modal open={open} onClose={handleClose}>
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
            />
            <SoftBox mt={2} display="flex" justifyContent="flex-end">
              <SoftButton variant="contained" color="secondary" onClick={handleClose}>
                Cancel
              </SoftButton>
              <SoftButton variant="contained" color="info" sx={{ ml: 2 }} onClick={handleSubmit}>
                Save
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </Box>
      </Modal>
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
