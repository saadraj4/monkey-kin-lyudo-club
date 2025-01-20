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
        sx={{cursor: "pointer"}}
        onClick={()=>handleViewClick(id)}/>
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium"
         onClick={()=>handleViewClick(id)}
         sx={{cursor: "pointer"}}
        >
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary"
         onClick={()=>handleViewClick(id)}
         sx={{cursor: "pointer"}}
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
      user: <Author image={team2} name="John Michael" email="john@creative-tim.com" id={1}/>,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="4" color="success" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
         

          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2}}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" id={2}/>,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
        

          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" id={3}/>,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="7" color="success" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
      

          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" id={4}/>,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="10" color="success" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
        

          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" id={5}/>,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
        
          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={6}/>,
      rate: <Function rate={"35%"} />,


      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),
      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
        
          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={7}/>,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="10" color="success" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
      

          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={8}/>,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
     

          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={9}/>,
      rate: <Function rate={"35%"} />,

      reward: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),
      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
       

          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },

    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" id={10}/>,
      rate: <Function rate={"35%"} />,

      reward: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),
      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
       

          {/* Edit Action */}
          <SoftButton
            component="a"
            href="#"
            variant="contained"
            color="info"
            fontWeight="medium"
            sx={{ marginLeft: 2 }}
            >
            Gift
          </SoftButton>
        </SoftBox>
      ),
      status: <StatusButton id={1} />,

    },

  ]
};
function StatusButton(id) {
  const [status, setStatus] = useState("Active");
 

  const toggleStatus = (id) => {
    console.log(id);
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
