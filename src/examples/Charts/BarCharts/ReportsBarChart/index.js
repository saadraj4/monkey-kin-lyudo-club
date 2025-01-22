import { useMemo } from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import BarReportsChartItem from "examples/Charts/BarCharts/ReportsBarChart/ReportsBarChartItem";
import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";

function ReportsBarChart({ color, title, chart, items }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderItems = items.map(({ icon, label, progress }) => (
    <Grid item xs={6} sm={4} key={label}>
      <BarReportsChartItem
        color="info"
        icon={{ color: icon.color, component: icon.component }}
        label={label}
        progress={{ content: progress.content }}
      />
    </Grid>
  ));

  return (
    <>
      <SoftBox mb={2}>
        <Card>
          <SoftBox px={1} mb={2}>
            <SoftBox mb={2}>
              <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize" mt={1}>
                {title}
              </SoftTypography>
            </SoftBox>
            <SoftBox >
              <Grid container spacing={3}>
                {renderItems}
              </Grid>
            </SoftBox>
          </SoftBox>
        </Card>
      </SoftBox>


      <SoftBox mt={3}>
        <Card>

          <SoftBox padding="1rem">

            {useMemo(
              () => (
                <SoftBox
                  variant="contained"
                  bgColor="secondary"
                  borderRadius="lg"
                  py={2}
                  pr={0.5}
                  mb={3}
                  height="15rem"
                >
                  <Bar data={data} options={options} color="dark"/>
                </SoftBox>
              ),
              [chart, color]
            )}

          </SoftBox>
        </Card>
      </SoftBox>
    </>
  );
}

// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  color: "dark",
  items: [],
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ReportsBarChart;