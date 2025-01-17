import React, { useState } from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import Gift from "./gift"
import image1 from "assets/images/team-1.jpg";

function UserProfile({ image, name, playerId, winStreak, winRatio, level }) {
  // State to manage the modal's visibility
  const [openGift, setOpenGift] = useState(false);

  const handleOpenGift = () => setOpenGift(true); // Open the Gift modal
  const handleCloseGift = () => setOpenGift(false); // Close the Gift modal

  return (
    <>
      <SoftBox>
        <SoftBox
          display="flex"
          alignItems="center"
          p={5}
          sx={{
            // maxWidth: "700px",
            backgroundColor: "#fff",
            position: "relative", // To allow positioning of the button
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}>

          {/* Gift Button */}
          <SoftButton
            variant="gradient"
            color="info"
            sx={{
              position: "absolute",
              right: "-500px",
              top: "0px",

              zIndex: 1,
            }}
            onClick={() => handleOpenGift()}
          >
            Gift
          </SoftButton>

          {/* Profile Image */}
          <SoftAvatar
            src={image1}
            alt="User Profile"
            sx={{
              width: 200,
              height: 200,
              border: "2px solid #000",
            }}
          />

          {/* User Details */}
          <SoftBox ml={10}>
            <SoftTypography variant="h6" fontWeight="bold" mb={2}>
              {name}
            </SoftTypography>
            <SoftTypography variant="body2" color="textSecondary" mb={2}>
              Player ID: {playerId}
            </SoftTypography>
            <SoftTypography variant="body2" color="textSecondary" mb={2}>
              Win Streak: {winStreak}
            </SoftTypography>
            <SoftTypography variant="body2" color="textSecondary" mb={2}>
              Win Ratio: {winRatio}
            </SoftTypography>
            <SoftTypography variant="body2" color="textSecondary">
              Level: {level}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>

      <Gift openGift={openGift} handleCloseGift={handleCloseGift} />


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
