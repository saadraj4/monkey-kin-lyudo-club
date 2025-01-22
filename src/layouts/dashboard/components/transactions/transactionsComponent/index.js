
// prop-types is library for typechecking of props
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import { useState } from "react";

function TransactionList({ title, Transaction }) {

  const [searchText, setSearchText] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText.trim()) {
      handleSearch();
    }

  };
  const handleSearch = () => {
    console.log("Search Triggered:", searchText);
  };

  const renderTransaction = Transaction.map(({ image, id, description, date }) => (
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
    <>
      <SoftBox display="flex" alignItems="center" mt={2} mb={2}>
        {/* Search Bar */}
        <SoftBox sx={{ width: "90%" }}>
          <SoftInput
            fullWidth
            variant="outlined"
            placeholder="Search Player"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </SoftBox>

        {/* Search Button */}
        <SoftButton
          variant="gradient"
          color="info"
          onClick={handleSearch}
          sx={{ marginLeft: 2 }}
        >
          Search
        </SoftButton>
      </SoftBox>
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

        </SoftBox>
        <SoftBox p={2}>
          <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            {renderTransaction}
          </SoftBox>
        </SoftBox>
      </Card>
    </>
  );
}

// Typechecking props for the TransactionList
TransactionList.propTypes = {
  title: PropTypes.string.isRequired,
  Transaction: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionList;
