import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SoftBox from "components/SoftBox";

function DefaultProjectCard({ image, price, id,flag }) {

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
        {/* Cross Icon Button */}
        {flag && <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}
          onClick={() => onRemove(id)}
        >
          <CloseIcon />
        </IconButton>}
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
