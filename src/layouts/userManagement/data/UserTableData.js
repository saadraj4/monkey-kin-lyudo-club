/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import { useState } from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import SoftButton from "components/SoftButton";
import Gift from "../gift";

function Author({ image, name, email, id }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded"
          sx={{ cursor: "pointer" }}
          onClick={() => handleViewClick(id)} />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium"
          onClick={() => handleViewClick(id)}
          sx={{ cursor: "pointer" }}
        >
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary"
          onClick={() => handleViewClick(id)}
          sx={{ cursor: "pointer" }}
        >
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ rate }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="regular" fontWeight="medium" color="text">
        {rate}
      </SoftTypography>
    </SoftBox>
  );
}

const handleViewClick = (row) => {
  window.location.href = `/user-profile/${row}`;
};


function GiftComponent({ id }) {
  // State to manage the modal's visibility
  const [openGift, setOpenGift] = useState(false);
console.log("id",id)
  const handleOpenGift = () => setOpenGift(true); // Open the Gift modal
  const handleCloseGift = () => setOpenGift(false); // Close the Gift modal

  return (
    <>
      <SoftBox display="flex" justifyContent="space-between">
        <SoftButton
          component="a"
          href="#"
          variant="contained"
          color="info"
          fontWeight="medium"
          sx={{ marginLeft: 2 }}
          onClick={() => handleOpenGift()}
        >
          Gift
        </SoftButton>
      </SoftBox>
      <Gift openGift={openGift} handleCloseGift={handleCloseGift} />
    </>
  );
}

const authorsTableData = {

  columns: [
    { name: "user", align: "left" },
    { name: "rate", align: "left" },
    { name: "streak", align: "center" },
    { name: "action", align: "center" },
    { name: "status", align: "center" }
  ],

  rows: [
    {
      user: <Author image={team2} name="John Michael" email="john@creative-tim.com" id={1} />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="4" color="success" container />
      ),
      action: <GiftComponent id={1} />,
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" id={2} />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: <GiftComponent id={2} />,
      status: <StatusButton id={2} />,

    },
    {
      user: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" id={3} />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="7" color="success" container />
      ),

      action: <GiftComponent id={3} />,
      status: <StatusButton id={3} />,

    },
    {
      user: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" id={4} />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="10" color="success" container />
      ),

      action: <GiftComponent id={4} />,
      status: <StatusButton id={4} />,

    },
    {
      user: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" id={5} />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: <GiftComponent id={5} />,
      status: <StatusButton id={5} />,

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={6} />,
      rate: <Function rate={"35%"} />,


      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),
      action: <GiftComponent id={6} />,
      status: <StatusButton id={6} />,

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={7} />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="10" color="success" container />
      ),

      action: <GiftComponent id={7} />,
      status: <StatusButton id={7} />,

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={8} />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: <GiftComponent id={8} />,
      status: <StatusButton id={8} />,

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={9} />,
      rate: <Function rate={"35%"} />,

      reward: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),
      action: <GiftComponent id={9} />,
      status: <StatusButton id={9} />,

    },

    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={10} />,
      rate: <Function rate={"35%"} />,

      reward: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),
      action: <GiftComponent id={10} />,
      status: <StatusButton id={10} />,

    },

  ]
};
function StatusButton(id) {
  const [status, setStatus] = useState("Active");


  const toggleStatus = (id) => {
    if (status === "Active") {
      setStatus("Blocked");
    } else {
      setStatus("Active");
    }
  };

  return (
    <SoftButton
      variant="contained"
      color={status === "Active" ? "info" : "error"} // Color based on status
      onClick={toggleStatus}
      sx={{
        minWidth: 100, // Ensure the button width remains the same
        padding: "6px 16px", // Consistent padding
      }}
    >
      {status === "Active" ? "Block" : "Unblock"}
    </SoftButton>
  );
}

export default authorsTableData;
