import { useState } from "react";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Pagination from "@mui/material/Pagination";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Tabs, Tab } from "@mui/material";
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
  const [firstName, setFirstName] = useState(""); // State to store the new player's first name
  const [lastName, setLastName] = useState(""); // State to store the new player's last name
  const [newImage, setNewImage] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState(0); // State for tab selection



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
  // handle tab change
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setCurrentPage(1); // Reset pagination when switching tabs
  };
  // Open Modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText.trim()) {
      handleSearch();
    }

  };
  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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

      rows.push(newPlayerData);

      setNewPlayer("");
      handleCloseModal();
    }
  };

  const filteredRealUsers = rows.filter(row => row.is_bot === false);
const filteredBotPlayers = rows.filter(row => row.is_bot === true);

const filteredRows = selectedTab === 0
  ? filteredRealUsers.slice(indexOfFirstRow, indexOfLastRow) // Real users paginated
  : filteredBotPlayers.slice(indexOfFirstRow, indexOfLastRow); // Bot players paginated

  const totalRows = selectedTab === 0 ? filteredRealUsers.length : filteredBotPlayers.length;


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
            <SoftBox mt={2}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                indicatorColor="info"
                textColor="primary"
                centered


              >
                <Tab label="Real Users" sx={{
                  '&.Mui-selected': {
                    color: 'black', 
                    backgroundColor: 'info.main'
                  },
                }} />
                <Tab label="Bot Players" sx={{
                  '&.Mui-selected': {
                    color: 'black', 
                    backgroundColor: 'info.main'
                  },
                }} />
              </Tabs>
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
            }}>

            <Table columns={columns} rows={filteredRows} />
          </SoftBox>

          {/* Pagination */}
          <SoftBox display="flex" justifyContent="center" mt={3}>
            <Pagination
              count={Math.ceil(totalRows / rowsPerPage)} // Calculate number of pages
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
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <div style={{ flex: 1 }}>
              <SoftTypography variant="body2">First Name</SoftTypography>
              {/* First Name Field */}
              <SoftInput
                placeholder="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div style={{ flex: 1 }}>
              <SoftTypography variant="body2">Last Name</SoftTypography>
              {/* Last Name Field */}
              <SoftInput
                placeholder="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>

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

          <SoftTypography sx={{ marginTop: 2 }} variant="body2">
            Player Image
          </SoftTypography>
          {/* Image Upload Field */}
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
