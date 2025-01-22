

const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "users",
      progress: { content: "36K", percentage: 60 },
    },
  ],
};

export default reportsBarChartData;
