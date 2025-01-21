import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SoftBox from "components/SoftBox";

function DefaultProjectCard({ image, price, id, flag }) {

  const onRemove = (id) => { 
    console.log(`Removing item with id: ${id}`);
  }
  
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
        padding: 2, // Add padding to the card for spacing around elements
      }}
    >
      <SoftBox 
        position="relative" 
        width="100%" 
        height="auto" 
        borderRadius="xl" 
        display="flex" 
        justifyContent="center" 
        padding={2}  // Add padding around the image and other elements
      >
        <CardMedia
          src={image}
          component="img"
          sx={{
            width: "100%",    // Set width to leave some space around the image
            maxWidth: "400px",  // Maximum width for the image
            height: "auto",  // Let the height adjust based on the aspect ratio
            objectFit: "contain",  // Ensures the image is contained and not stretched
            objectPosition: "center",  // Centers the image within the container
            margin: "0 auto",  // Center the image within its container
          }}
        />
        {/* Cross Icon Button */}
        {flag && (
          <IconButton
            sx={{
              position: "absolute",
              top: 1,
              right: 1,
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            }}
            onClick={() => onRemove(id)}
          >
            <CloseIcon />
          </IconButton>
        )}
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flag: PropTypes.bool.isRequired,
};

export default DefaultProjectCard;
