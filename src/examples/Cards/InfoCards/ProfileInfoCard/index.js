
import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

function ProfileInfoCard({ title, description, info, action }) {

  const [open, setOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState(info);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    // Password validation logic
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    // Here you can call an API to verify the old password and update the new details
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    console.log("Updated Info:", formData);

    // Close the modal after saving
    handleClose();
  };

  const labels = [];
  const values = [];


  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <SoftBox key={label} display="flex" py={1} pr={2} mt={1}>
      <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </SoftTypography>
      <SoftTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </SoftTypography>
    </SoftBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
        <SoftTypography variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top" onClick={handleClickOpen}>
            <Icon>edit</Icon>
          </Tooltip>
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox mb={1} lineHeight={1}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox opacity={0.3}>
          <Divider />
        </SoftBox>
        <SoftBox>
          {renderItems}
          <SoftBox display="flex" py={1} pr={2}>

          </SoftBox>
        </SoftBox>
      </SoftBox>

      {/* Modal for editing information */}
      <Dialog
        open={open}
        onClose={handleClose}
        width="sm"
        sx={{
          "& .MuiDialog-paper": {
            // minWidth: "400px", 
            maxWidth: "600px",
            width: "80%",
            height: "auto",
            padding: "20px", // Add padding inside the modal
            borderRadius: "8px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1.5rem", // Adjust font size for title
            fontWeight: "bold", // Make title bold
            paddingBottom: "10px", // Add spacing below the title
            textAlign: "center", // Center the title text
          }}
        >
          Edit Information
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: "16px" }}>

          {/* Add other fields for user info as needed */}
          {Object.keys(formData).map((key) => (
            <>
              <SoftTypography variant="h6">
                {key}
              </SoftTypography>

              <SoftInput
                key={key}
                placeholder={key.replace(/([A-Z])/g, " $1")}
                fullWidth
                value={formData[key]}
                onChange={(e) =>
                  setFormData({ ...formData, [key]: e.target.value })
                }
                sx={{ mb: 2 }} // Increased margin-bottom for spacing between fields
              />
            </>
          ))}

          {/* Add form fields for user information */}
          <SoftTypography variant="h6">
            Old Password
          </SoftTypography>
          <SoftInput
            placeholder="Old Password"
            type="password"
            fullWidth

            onChange={(e) => setOldPassword(e.target.value)}
            sx={{ mb: 2 }} // Increased margin-bottom for spacing between fields
          />
          <SoftTypography variant="h6">
            New Password
          </SoftTypography>
          <SoftInput
            placeholder="New Password"
            type="password"
            fullWidth

            onChange={(e) => setNewPassword(e.target.value)}
            sx={{ mb: 2 }} // Increased margin-bottom for spacing between fields
          />
          <SoftTypography variant="h6">
            Confirm New Password
          </SoftTypography>
          <SoftInput
            placeholder="Confirm Password"
            type="password"
            fullWidth

            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ mb: 3 }} // Increased margin-bottom for spacing between fields
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", padding: "16px" }}>
          <SoftButton
            onClick={handleClose}
            color="secondary"
            variant="contained"
            sx={{
              padding: "8px 16px", // Adjust button padding
              borderRadius: "4px", // Rounded corners for buttons
            }}
          >
            Cancel
          </SoftButton>
          <SoftButton
            onClick={handleSave}
            color="info"
            variant="gradient"
            sx={{
              padding: "8px 16px", // Adjust SoftButton padding
              borderRadius: "4px", // Rounded corners for SoftButtons
            }}
          >
            Save
          </SoftButton>
        </DialogActions>
      </Dialog>

    </Card>
  );
}

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileInfoCard;
