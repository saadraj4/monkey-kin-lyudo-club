import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import SideNavbar from "layouts/SideNavbar"
import { useState } from "react";
import team2 from "assets/images/team-2.jpg";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftButton from "components/SoftButton";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";


function Overview() {
    const [open, setOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
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
  
  return (
    <DashboardLayout>
      <SideNavbar />
      <DashboardNavbar />
      <SoftBox display="flex" justifyContent="flex-end" p={2}>
        <SoftButton variant="contained" color="info" onClick={handleClickOpen}>
          Change password
        </SoftButton>
      </SoftBox>
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>

            <Card>
              <img src={team2} alt="Admin Image" style={{ width: "100%", borderRadius: "8px" }} />
            </Card>
          </Grid>


          <Grid item xs={12} md={12} xl={8}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Alec M. Thompson",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
              }}
              action={{ tooltip: "Edit Profile" }}
            />
          </Grid>
        </Grid>
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
          Change Password
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: "16px" }}>

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
    </DashboardLayout>
  );
}

export default Overview;