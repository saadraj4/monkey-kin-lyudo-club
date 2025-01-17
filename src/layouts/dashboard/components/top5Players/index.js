import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import badge1 from "assets/images/Badges/1.jpg";
import badge2 from "assets/images/Badges/2.jpg";
import badge3 from "assets/images/Badges/3.jpg";

function ProfilesList({ title, profiles }) {
  const [displayedProfiles, setDisplayedProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const profilesPerPage = 5;

  // Load profiles for the current page
  const loadProfiles = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      const startIndex = (page - 1) * profilesPerPage;
      const endIndex = startIndex + profilesPerPage;

      if (startIndex >= profiles.length) {
        setHasMore(false); // No more profiles to load
        setLoading(false);
        return;
      }

      setDisplayedProfiles((prevProfiles) => [
        ...prevProfiles,
        ...profiles.slice(startIndex, endIndex),
      ]);
      setLoading(false);
    }, 1000); // Simulated delay for loading profiles
  }, [page, profiles]);

  // Trigger loading on page change
  useEffect(() => {
    loadProfiles();
  }, [page, loadProfiles]);

  // Handle scroll event
  const handleScroll = () => {
    const bottomReached =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight;

    if (bottomReached && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Attach and detach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={styles.th}>Badge</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Player ID</th>
                <th style={styles.th}>Image</th>
                <th style={styles.th}>Win Amount</th>
              </tr>
            </thead>
            <tbody>
              {displayedProfiles.map(({ image, name, id, badge, winAmount },index) => (
                <tr key={index}>
                  <td style={styles.td}>
                    {badge === 1 ? (
                      <SoftAvatar src={badge1} alt="Badge1" variant="rounded" shadow="md" /> // Replace with your actual image source for badge 1
                    ) : badge === 2 ? (
                      <SoftAvatar src={badge2} alt="Badge2" variant="rounded" shadow="md" /> // Replace with your actual image source for badge 1
                    ) : badge === 3 ? (
                      <SoftAvatar src={badge3} alt="Badge3" variant="rounded" shadow="md" /> // Replace with your actual image source for badge 1
                    ) : (
                      <span  >{badge}</span> // For badge > 3, display the number
                    )}
                  </td>
                  <td style={styles.td}>
                    <SoftTypography variant="button" fontWeight="medium">
                      {name}
                    </SoftTypography>
                  </td>
                  <td style={styles.td}>
                    <SoftTypography variant="button" fontWeight="regular">
                      {id}
                    </SoftTypography>
                  </td>
                  <td style={styles.td}>
                    <SoftTypography variant="button" fontWeight="regular">
                      <SoftAvatar src={image} alt={name} variant="rounded" shadow="md" />

                    </SoftTypography>
                  </td>
                  <td style={styles.td}>
                    <SoftTypography variant="button" fontWeight="regular">
                      ${winAmount.toLocaleString()}
                    </SoftTypography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {loading && (
          <SoftBox display="flex" justifyContent="center" mt={2}>
            <CircularProgress color="info" />
          </SoftBox>
        )}
        {!hasMore && !loading && (
          <SoftTypography
            variant="button"
            fontWeight="medium"
            color="textSecondary"
            display="flex"
            textAlign="center"
            justifyContent="center"
            mt={2}
          >
            No more profiles to display.
          </SoftTypography>
        )}
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
      badge: PropTypes.number,
      winAmount: PropTypes.number,
    })
  ).isRequired,
};

export default ProfilesList;