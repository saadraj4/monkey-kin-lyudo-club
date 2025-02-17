
import { useNavigate } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";

function ProfilesList({ title, profiles }) {
  const navigate = useNavigate();
  const renderProfiles = profiles.map(({ image, id, description, date }) => (
    <SoftBox key={id} component="li" display="flex" alignItems="center" py={1} mb={1}>
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
          {description}
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
        {id}

        </SoftTypography>
      </SoftBox>
      <SoftBox ml="auto">
        
          <SoftButton variant="text" color="info">
            {date}
          </SoftButton>
       
      </SoftBox>
    </SoftBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox
    pt={2}
    px={2}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
        <SoftButton
      variant="text"
      color="info"
      size="small"
      onClick={() => navigate("/dashboard/transactions")} // Add desired functionality
    >
      See All
    </SoftButton>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
