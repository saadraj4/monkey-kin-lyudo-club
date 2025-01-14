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

function Function({ Id }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="regular" fontWeight="medium" color="text">
        {Id}
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
    { name: "Id", align: "left" },
    { name: "game", align: "center" },
  ],

  rows: [
    {
      user: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      Id: <Function Id={"player1"} />,
      game: (
        <SoftBadge variant="gradient" badgeContent="4" color="success" container />
      ),


    },
    {
      user: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      Id: <Function Id={"player2"} />,
      game: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),


    },
    {
      user: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      Id: <Function Id={"player3"} />,
      game: (
        <SoftBadge variant="gradient" badgeContent="7" color="success" container />
      ),


    },
    {
      user: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      Id: <Function Id={"player4"} />,
      game: (
        <SoftBadge variant="gradient" badgeContent="10" color="success" container />
      ),


    },
    {
      user: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      Id: <Function Id={"player5"} />,
      game: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),


    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      Id: <Function Id={"player6"} />,


      game: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      Id: <Function Id={"player7"} />,
      game: (
        <SoftBadge variant="gradient" badgeContent="10" color="success" container />
      ),


    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      Id: <Function Id={"player8"} />,
      game: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),


    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      Id: <Function Id={"player9"} />,

      reward: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      game: (
        <SoftBadge variant="gradient" badgeContent="0" color="secondary" container />
      ),

    },
  ]
};

export default authorsTableData;
