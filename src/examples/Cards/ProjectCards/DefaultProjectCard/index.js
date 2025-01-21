import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function DefaultProjectCard({ image, price, id, flag, title, coins }) {
  const onRemove = (id) => {
    console.log(`Removing item with id: ${id}`);
  };

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
      {/* Title */}
      <SoftBox display="flex" justifyContent="center" alignItems="center" mb={1}>
        <SoftTypography fontWeight="medium" fontSize="1rem" textAlign="center">
          {title}
        </SoftTypography>
      </SoftBox>

      {/* Image Box */}
      <SoftBox
        position="relative"
        width="100%"
        height="auto"
        borderRadius="xl"
        display="flex"
        justifyContent="center"
        padding={2} // Add padding around the image and other elements
      >
        <CardMedia
          src={image}
          component="img"
          sx={{
            width: "100%", 
            maxWidth: "400px", 
            height: "auto", 
            objectFit: "contain", 
            objectPosition: "center", 
            margin: "0 auto", 
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

      {/* Price (Coins) */}
      {coins && (
        <SoftBox display="flex" justifyContent="center" alignItems="center" pt={1}>
          <SoftTypography
            fontWeight="medium"
            fontSize="1rem"
            textAlign="center"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "8px 12px",
              borderRadius: "12px",
            }}
          >
          {coins} 
          </SoftTypography>
        </SoftBox>
      )}
    </Card>
  );
}

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  flag: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  coins: PropTypes.string.isRequired,
};

export default DefaultProjectCard;
