import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import { Modal } from "@mui/material";
import SoftInput from "components/SoftInput";
import { useState } from "react";

function ChestRewards() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [value, setValue] = useState("30%"); // Value state for diamonds

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleSave = () => {
    // Save the updated value and close the modal
    console.log("Updated Value:", value);
    handleClose();
  };

  return (
    <>
      <Card>
        <SoftBox p={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                  Diamonds
                </SoftTypography>
                <SoftBox mb={1}>
                  <SoftTypography variant="body2" color="text">
                    30 %
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={3} sx={{ position: "relative", ml: "auto" }}>
              <SoftBox>
                <SoftButton color="info" variant="gradient" onClick={handleOpen}>
                  Edit
                </SoftButton>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </Card>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <SoftBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: 400,
          }}
        >
          <SoftTypography id="edit-modal-title" variant="h6" fontWeight="bold" mb={2}>
            Edit Diamonds Value
          </SoftTypography>
          <SoftInput
            fullWidth
            label="Diamonds Percentage"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <SoftBox display="flex" justifyContent="flex-end" mt={2}>
            <SoftButton onClick={handleClose} variant="gradient" color="secondary" sx={{ mr: 2 }}>
              Cancel
            </SoftButton>
            <SoftButton onClick={handleSave} color="info" variant="gradient">
              Save
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </Modal>

    </>
  );
}

export default ChestRewards;
