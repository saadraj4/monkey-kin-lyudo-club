// Necessary imports
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import SoftAvatar from "components/SoftAvatar";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function NotificationList({ title, Notifications }) {
  const handleReuse = (id) => {
    console.log(`Reuse notification with id: ${id}`);
    // Display a success toast
    toast.success("Notification reused!");
  };

  return (
    <>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <TableContainer>
          <Table>
            <TableBody>
              {Notifications.map(({ id, image, title, description, date }, index) => (
                <TableRow key={index}>
                  {/* Title and Description */}
                  <TableCell>
                    <SoftBox display="flex" alignItems="center">
                      <SoftAvatar
                        src={image}
                        alt="notification-avatar"
                        variant="rounded"
                        shadow="md"
                        sx={{ mr: 2 }}
                      />
                      <SoftBox
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="center">
                        <SoftTypography variant="button" fontWeight="medium">
                          {title}
                        </SoftTypography>
                        <SoftTypography variant="caption" color="text">
                          {description}
                        </SoftTypography>
                      </SoftBox>
                    </SoftBox>
                  </TableCell>

                  {/* Date */}
                  <TableCell align="center">
                    <SoftTypography variant="caption" color="text">
                      {date}
                    </SoftTypography>
                  </TableCell>

                  {/* Action */}
                  <TableCell align="center">
                    <SoftButton color="info" variant="gradient" onClick={() => handleReuse(id)}>
                      Reuse
                    </SoftButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SoftBox>
      {/* ToastContainer to display toast messages */}
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  );
}

// Typechecking props for the NotificationList
NotificationList.propTypes = {
  title: PropTypes.string.isRequired,
  Notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
};

export default NotificationList;
