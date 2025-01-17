import React, { useState, useRef, useEffect } from "react";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import TimelineItem from "../../../../examples/Timeline/TimelineItem";

function Notifications() {
  const allNotifications = [
    { color: "success", title: "Congratulations!", content: "You got 20 coins on winning of 2 player game", read: true, icon: "notifications", date: "01-01-2025" },
    { color: "error", title: "Congratulations!", content: "You got 20 coins on winning of 2 player game", read: true, icon: "notifications", date: "01-01-2025" },
    { color: "info", title: "Congratulations!", content: "You got 20 coins on winning of 2 player game", read: false, icon: "notifications", date: "01-01-2025" },
    { color: "warning", title: "Congratulations!", content: "You got 20 coins on winning of 2 player game", read: false, icon: "notifications", date: "01-01-2025" },
    { color: "primary", title: "Congratulations!", content: "You got 20 coins on winning of 2 player game", read: false, icon: "notifications", date: "01-01-2025" },
    { color: "primary", title: "Congratulations!", content: "You got 20 coins on winning of 2 player game", read: false, icon: "notifications", date: "01-01-2025" },
    { color: "primary", title: "Congratulations!", content: "You got 20 coins on winning of 2 player game", read: false, icon: "notifications", date: "01-01-2025" },
    { color: "primary", title: "Congratulations!", content: "You got 20 coins on winning of 2 player game", read: false, icon: "notifications", date: "01-01-2025" },
  ];

  const [notifications, setNotifications] = useState(allNotifications.slice(0, 5)); // Initial 5 notifications
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null); // For the scroll container

  const loadMoreNotifications = (direction) => {
    if (loading) return; // Prevent loading multiple times

    setLoading(true);

    if (direction === "down") {
      // Simulating loading newer notifications
      setTimeout(() => {
        setNotifications((prev) => [
          ...prev,
          ...allNotifications.slice(prev.length, prev.length + 5),
        ]);
        setLoading(false);
      }, 1000);
    } else if (direction === "up") {
      // Simulating loading older notifications
      setTimeout(() => {
        setNotifications((prev) => [
          ...allNotifications.slice(prev.length - 5, prev.length),
          ...prev,
        ]);
        setLoading(false);
      }, 1000);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = container;

    if (scrollTop === 0) {
      // User has reached the top of the container, load older notifications
      loadMoreNotifications("up");
    } else if (scrollTop + clientHeight === scrollHeight) {
      // User has reached the bottom of the container, load newer notifications
      loadMoreNotifications("down");
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Notifications
        </SoftTypography>
      </SoftBox>
      <SoftBox
        ref={containerRef}
        p={2}
        sx={{
          maxHeight: "400px",
          overflowY: "scroll", // Enable scrolling
        }}
      >
        {notifications.map((notification, index) => (
          <TimelineItem
            key={index}
            color={notification.color}
            title={notification.title}
            content={notification.content}
            read={notification.read}
            icon={notification.icon}
            date={notification.date}
          />
        ))}
        {loading && (
          <SoftBox display="flex" justifyContent="center" p={2}>
            <CircularProgress />
          </SoftBox>
        )}
      </SoftBox>
    </Card>
  );
}

export default Notifications;
