import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function DefaultProjectCard({ image, price, id }) {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    package: id||"",
    price: price || "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Updated Values:", formValues);
    handleClose();
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "visible",
        }}
      >
        <SoftBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
          <CardMedia
            src={image}
            component="img"
            sx={{
              maxWidth: "100%",
              margin: 0,
              boxShadow: ({ boxShadows: { md } }) => md,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SoftBox>
        <SoftBox pt={3} px={0.5} mb={2}>
          <SoftBox>
            <SoftTypography
              component="a"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {price}
            </SoftTypography>
            <SoftBox display="flex" justifyContent="space-between" alignItems="end">
              <SoftButton
                component="a"
                rel="noreferrer"
                variant="gradient"
                size="small"
                color="info"
                onClick={handleOpen}
              >
                Edit
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <SoftTypography id="edit-modal-title" variant="h6" component="h2" mb={2}>
            Edit Details
          </SoftTypography>
          <TextField
            fullWidth
            label="Package"
            name="package"
            value={formValues.package}
            onChange={handleChange}
            variant="outlined"
            sx={{ mb: 2 }}
            InputLabelProps={{
              color: "black",
              shrink: true, // Ensures the label is always shrunk
            }}

          />
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            variant="outlined"
            type="text"
            sx={{ mb: 2 }}
            InputLabelProps={{
              color: "black",
              shrink: true, // Ensures the label is always shrunk
            }}
          />
          <SoftBox display="flex" justifyContent="space-between">
            <SoftButton
              variant="gradient"
              size="small"
              color="info"
              onClick={handleSave}
            >
              Save
            </SoftButton>
            <SoftButton
              variant="outlined"
              size="small"
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </SoftButton>
          </SoftBox>
        </Box>
      </Modal>
    </>
  );
}

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default DefaultProjectCard;
