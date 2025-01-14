import React from "react";
import PropTypes from "prop-types";
import { Box, Avatar, Card } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "../../components/SoftTypography";

function UserProfile({ image, name, playerId, winStreak, winRatio, level }) {
  return (
    <Card
    sx={{
      boxShadow: "0px 4px 10px rgb(78, 78, 233)", // Custom shadow
      borderRadius: "12px", // Optional: To make it look more prominent and modern
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
    </Card>
  );
}
UserProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playerId: PropTypes.string.isRequired,
  winStreak: PropTypes.number.isRequired,
  winRatio: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
};

export default UserProfile;
