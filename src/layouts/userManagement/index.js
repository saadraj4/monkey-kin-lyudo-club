import { useState } from "react";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Pagination from "@mui/material/Pagination";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";

// Soft UI Dashboard React components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "./data/UserTableData";
import SoftButton from "components/SoftButton";
import SideNav from "../SideNavbar"
import SoftInput from "components/SoftInput";
import SoftTypographyRoot from "components/SoftTypography/SoftTypographyRoot";
function UserManagement() {
  const { columns, rows } = authorsTableData;
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Show 5 rows per page
  const [openModal, setOpenModal] = useState(false); // State to open/close modal
  const [newPlayer, setNewPlayer] = useState(""); // State to store the new player's name
  const [newImage, setNewImage] = useState(null);
  const [newEmail, setNewEmail] = useState("");

  // Calculate the index for slicing the rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Open Modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handle New Player Input Change
  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setNewImage(file);
  };

  // Handle Add New Player
  const handleAddPlayer = () => {
    if (newPlayer) {
      const newPlayerData = {
        name: newPlayer,
        type: "Bot", // You can set additional attributes for the bot player
      };

      // Add the new player to the rows (this could be saved to state or updated in the backend)
      // For simplicity, we're adding to the original rows here, but you'd want to handle this differently in a real app
      rows.push(newPlayerData);

      // Reset the newPlayer input and close the modal
      setNewPlayer("");
      handleCloseModal();
    }
  };

  return (
    <DashboardLayout>
      <SideNav />
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Player</SoftTypography>
              {/* Add New Player Button */}
              <SoftButton variant="gradient" color="info" onClick={handleOpenModal}>
                Add New Player
              </SoftButton>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={currentRows} />
            </SoftBox>
            {/* Pagination */}
            <SoftBox display="flex" justifyContent="center" mt={3}>
              <Pagination
                count={Math.ceil(rows.length / rowsPerPage)} // Calculate number of pages
                page={currentPage}
                onChange={handlePageChange}
                color="info"
              />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>

      {/* Add New Player Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add New Player</DialogTitle>
        <DialogContent>
          <SoftTypography
            sx={{
              marginTop: 4,

            }}
            variant="body2">
            Player Name
          </SoftTypography>
          {/* Player Name Field */}
          <SoftInput
            placeholder="Player Name"
            variant="outlined"
            fullWidth
            value={newPlayer}
            onChange={handleInputChange}

          />
          <SoftTypography
            sx={{ marginTop: 4, }}
            variant="body2">
            Email
          </SoftTypography>
          {/* Email Field */}
          <SoftInput
            placeholder="Email"
            variant="outlined"
            fullWidth
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)} // Use appropriate state update function


          />

          {/* Image Upload Field */}
          <SoftTypography
            sx={{
              marginTop: 4,

            }}
            variant="body2">
            Player Image
          </SoftTypography>
          <SoftInput
            placeholder="Player Image"
            variant="outlined"
            type="file"
            fullWidth
            onChange={handleImageChange} // Function to handle the file input change




          />
        </DialogContent>

        <DialogActions>

          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="secondary" fullWidth onClick={handleCloseModal} sx={{ color: "black" }}>
              Cancel
            </SoftButton>
          </SoftBox>

          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="info" fullWidth onClick={handleAddPlayer} sx={{ color: "black" }}>
              Add Player
            </SoftButton>
          </SoftBox>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default UserManagement;
