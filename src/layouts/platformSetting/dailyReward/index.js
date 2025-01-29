import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid"; // Import Grid component
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import SoftInput from "components/SoftInput";
// import UseStore from "store/UseStore";


function DailyRewardList({ title, DailyReward }) {

  const [openReward, setOpenReward] = useState(false);
  // const {fetchData} = UseStore();


  const handleOpenReward = () => setOpenReward(true); // Open the Reward modal
  const handleCloseReward = () => setOpenReward(false); // Close the Reward modal

  // Handle submit
  const handleSubmit = (id) => {
    console.log('Reward updated');
    handleCloseReward();
  };

  const handleClose = () => {
    setSelectedAsset('');
    setSelectedVariant('');
    handleCloseReward();
  };


  const renderDailyReward = DailyReward.map(({ id, image, name, description }, index) => (
    <Grid item xs={12} sm={6} key={index}> {/* Use Grid item for each profile */}
      <SoftBox component="li" display="flex" alignItems="center" py={1} mb={1} ml={2} mr={1}>
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
            

            {/* Quantity / Hours Input */}
            <SoftTypography sx={{ marginTop: 2 }} variant="body2">
                Hours
            </SoftTypography>
            <SoftInput
              variant="outlined"
              type="number"
              placeholder="Enter quantity or hours"
              fullWidth
              onWheel={(e) => e.target.blur()}
            />            
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
