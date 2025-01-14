/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import { useNavigate } from "react-router-dom";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
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
  ],

  rows: [
    {
      user: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="4" color="success" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(1)}>
          
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      user: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(2)}>
          
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      user: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="7" color="success" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(3)}
          >
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      user: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="10" color="success" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(4)}
          >
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      user: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(5)}
          >
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      rate: <Function rate={"35%"} />,

      
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),
      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(6)}
          >
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="10" color="success" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(7)}
          >
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      rate: <Function rate={"35%"} />,
      streak: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

      action: (
        <SoftBox display="flex" justifyContent="space-between">
          {/* View Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(8)}
          >
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
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
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            onClick={() => handleViewClick(9)}
          >
            View
          </SoftTypography>

          {/* Edit Action */}
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="black"
            fontWeight="medium"
            sx={{ marginLeft: 2 }} // Adding some margin between the actions
          >
            
          </SoftTypography>
        </SoftBox>
      ),
    },
  ]
};

export default authorsTableData;
