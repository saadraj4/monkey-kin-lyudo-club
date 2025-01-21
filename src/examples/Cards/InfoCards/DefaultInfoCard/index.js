import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function DefaultInfoCard({ color, icon, title, value }) {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        width: "180px", // Increased card width
        height: "230px", // Set a consistent height for larger size
        textAlign: "center",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <SoftBox pb={1}>
        <SoftTypography variant="h6" fontWeight="bold" color="text.primary">
          {title}
        </SoftTypography>
      </SoftBox>

      {/* Icon */}
      <SoftBox display="flex" justifyContent="center" alignItems="center" mb={1}>
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={title}
            style={{
              width: "80px", // Increased size for the icon
              height: "80px",
              objectFit: "cover",
              borderRadius: "50%", // Circular icon
            }}
          />
        ) : (
          icon
        )}
      </SoftBox>

      {/* Value */}
      <SoftBox mt={1}>
        <SoftTypography
          variant="h6"
          fontWeight="bold"
          color="text.primary"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: "8px 12px",
            borderRadius: "12px",
          }}
        >
          {value}
        </SoftTypography>
      </SoftBox>
    </Card>
  );
}

// Default Props
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
};

// Prop Types
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
