/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          notifications
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          title="You got 20 coins on winning of 2 player game"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          title="You got 20 coins on winning of 2 player game"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          title="You got 20 coins on winning of 2 player game"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          title="You got 20 coins on winning of 2 player game"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          title="You got 20 coins on winning of 2 player game"
          dateTime="18 DEC 4:54 AM"
        />
        
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
