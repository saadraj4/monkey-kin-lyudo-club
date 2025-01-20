import { useState } from "react";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Pagination from "@mui/material/Pagination";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";
import { useDropzone } from "react-dropzone";

// Soft UI Dashboard React components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "./data/UserTableData";
import SoftButton from "components/SoftButton";
import SideNav from "../SideNavbar"
import SoftInput from "components/SoftInput";


function UserManagement() {

  const { columns, rows } = authorsTableData;
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Show 5 rows per page
  const [openModal, setOpenModal] = useState(false); // State to open/close modal
  const [newPlayer, setNewPlayer] = useState(""); // State to store the new player's name
  const [newImage, setNewImage] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  // Calculate the index for slicing the rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);

      // Trigger callback to parent component (if needed)
      handleImageChange(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: "image/*", multiple: false });

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Open Modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const [searchText, setSearchText] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText.trim()) {
      handleSearch();
    }

  };
  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handle New Player Input Change
  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };
  const handleImageChange = (file) => {
    // Get the selected file
    setNewImage(file);
  };

const handleSearch = () => {
  console.log("Search Triggered:", searchText);
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
          <SoftBox p={3}>
            {/* Player Header with Add New Player Button */}
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Heading */}
              <SoftTypography variant="h4" gutterBottom>
                Player
              </SoftTypography>

              {/* Add New Player Button */}
              <SoftButton
                variant="gradient"
                color="info"
                onClick={handleOpenModal}
              >
                Add New Player
              </SoftButton>
            </SoftBox>

            {/* Search Bar with Search Button */}
            <SoftBox display="flex" alignItems="center" mt={2}>
              {/* Search Bar */}
              <SoftBox sx={{ width: "90%" }}>
                <SoftInput
                  fullWidth
                  variant="outlined"
                  placeholder="Search Player"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </SoftBox>

              {/* Search Button */}
              <SoftButton
                variant="gradient"
                color="info"
                onClick={handleSearch}
                sx={{ marginLeft: 2 }}
              >
                Search
              </SoftButton>
            </SoftBox>
          </SoftBox>

          {/* Table */}
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
        </SoftBox>
      </SoftBox>





      {/* Add New Player Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle
          display="flex" alignItems="center" justifyContent="center"
          fontWeight="bold" fontSize="20px"
        >Add New Player

        </DialogTitle>
        <DialogContent>
          <SoftTypography sx={{ marginTop: 2 }} variant="body2">
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

          <SoftTypography sx={{ marginTop: 2 }} variant="body2">
            Email
          </SoftTypography>
          {/* Email Field */}
          <SoftInput
            placeholder="Email"
            variant="outlined"
            fullWidth
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />

          {/* Image Upload Field */}
          <SoftTypography sx={{ marginTop: 2 }} variant="body2">
            Player Image
          </SoftTypography>

          <div
            {...getRootProps()}
            style={{
              border: "2px dashed #3a3bf1",
              padding: "20px",
              textAlign: "center",
              borderRadius: "8px",
              cursor: "pointer",
              background: isDragActive ? "#f0f4ff" : "white",
              position: "relative",
              height: "190px",
              width: "100%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input {...getInputProps()} />
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Ensure image doesn't overflow and stays within bounds
                  borderRadius: "8px",
                }}
              />
            ) : isDragActive ? (
              <p>Drop the image here...</p>
            ) : (
              <p>Drag & drop an image, or click to select one</p>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <SoftBox mt={4} mb={1}>
            <SoftButton
              variant="gradient"
              color="secondary"
              fullWidth
              onClick={handleCloseModal}
              sx={{ color: "black" }}
            >
              Cancel
            </SoftButton>
          </SoftBox>

          <SoftBox mt={4} mb={1}>
            <SoftButton
              variant="gradient"
              color="info"
              fullWidth
              onClick={handleAddPlayer}
              sx={{ color: "black" }}
            >
              Add Player
            </SoftButton>
          </SoftBox>
        </DialogActions>
      </Dialog>

    </DashboardLayout>

  );
}

export default UserManagement;
