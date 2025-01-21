import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import SideNavbar from "layouts/SideNavbar"

import team2 from "assets/images/team-2.jpg";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Overview() {
  return (
    <DashboardLayout>
      <SideNavbar />
    <DashboardNavbar />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            
            <Card>
              <img src={team2} alt="Admin Image" style={{ width: "100%", borderRadius: "8px" }} />
            </Card>
          </Grid>


          <Grid item xs={12} md={12} xl={8}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Alec M. Thompson",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
              }}
              // social={[
              //   {
              //     link: "https://www.facebook.com/CreativeTim/",
              //     icon: <FacebookIcon />,
              //     color: "facebook",
              //   },
              //   {
              //     link: "https://twitter.com/creativetim",
              //     icon: <TwitterIcon />,
              //     color: "twitter",
              //   },
              //   {
              //     link: "https://www.instagram.com/creativetimofficial/",
              //     icon: <InstagramIcon />,
              //     color: "instagram",
              //   },
              // ]}
              action={{tooltip: "Edit Profile" }}
            />
          </Grid>
        </Grid>
      </SoftBox>

    </DashboardLayout>
  );
}

export default Overview;