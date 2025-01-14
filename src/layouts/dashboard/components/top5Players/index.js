// /**
// =========================================================
// * Soft UI Dashboard React - v4.0.1
// =========================================================

// * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */


import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

function ProfilesList({ title, profiles }) {
  return (
    <Card sx={{ height: "100%"  }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Player ID</th>
              <th style={styles.th}>Badge</th>
              <th style={styles.th}>Win Amount</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map(({ image, name, id, badge, winAmount }) => (
              <tr key={id}>
                <td style={styles.td}>
                  <SoftAvatar src={image} alt={name} variant="rounded" shadow="md" />
                </td>
                <td style={styles.td}>
                  <SoftTypography variant="button" fontWeight="medium">
                    {name}
                  </SoftTypography>
                </td>
                <td style={styles.td}>
                  <SoftTypography variant="button" fontWeight ="regular">
                    {id}
                  </SoftTypography>
                </td>
                <td style={styles.td}>
                  <SoftTypography variant="button" fontWeight ="regular">
                    {badge}
                  </SoftTypography>
                </td>
                <td style={styles.td}>
                  <SoftTypography variant="button" fontWeight ="regular">
                    ${winAmount.toLocaleString()}
                  </SoftTypography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SoftBox>
    </Card>
  );
}

const styles = {
  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    fontWeight: "bold",
    color: "#3a3bf1",
  },
  td: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
      badge: PropTypes.string,
      winAmount: PropTypes.number,
    })
  ).isRequired,
};

export default ProfilesList;

