import React,{useState} from 'react'
import SideNav from '../SideNavbar'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import SoftButton from 'components/SoftButton'
import SoftBox from 'components/SoftBox'
import NotificationList from './components/NotificationList'
import NotificationListData from './data/NotificationsListData'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import SoftTypography from 'components/SoftTypography'
import SoftInput from 'components/SoftInput'
import { useDropzone } from "react-dropzone";


function index() {
  const [openModal, setOpenModal] = useState(false); // State to open/close modal
  const [newTitle, setNewTitle] = useState(""); // State to store the new player's name
  const [newImage, setNewImage] = useState(null);
  const [newDescription, setNewDescription] = useState("");

  const [previewImage, setPreviewImage] = useState(null);


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
    setNewTitle(event.target.value);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setNewImage(file);
  };

  // Handle Add New Player
  const handleAddNotification = () => {
      setNewTitle("");
      handleCloseModal();
  };

    return (
        <DashboardLayout>
            <SideNav />
            <SoftBox
                sx={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    zIndex: 1000,
                }}>
                <SoftButton color="info" variant="contained" alignItem="right" onClick={handleOpenModal}>
                    Create Notifications
                </SoftButton>
            </SoftBox>


            <SoftBox mb={3} mt={5}>
                <SoftBox p={2}>
                    <NotificationList title={"Notifications History"} Notifications={NotificationListData} />
                </SoftBox>

            </SoftBox>

             <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
                    <DialogTitle
                      display="flex" alignItems="center" justifyContent="center"
                      fontWeight="bold" fontSize="20px"
                    >Add New Notification
            
                    </DialogTitle>
                    <DialogContent>
                      <SoftTypography sx={{ marginTop: 2 }} variant="body2">
                        Notification Title
                      </SoftTypography>
                      {/* Player Name Field */}
                      <SoftInput
                        placeholder="Player Name"
                        variant="outlined"
                        fullWidth
                        value={newTitle}
                        onChange={handleInputChange}
                      />
            
                      <SoftTypography sx={{ marginTop: 2 }} variant="body2">
                      Notification Description
                      </SoftTypography>
                      {/* Email Field */}
                      <SoftInput
                        placeholder="Email"
                        variant="outlined"
                        fullWidth
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                      />
            
                      {/* Image Upload Field */}
                      <SoftTypography sx={{ marginTop: 2 }} variant="body2">
                        Notification Image
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
                          onClick={handleAddNotification}
                          sx={{ color: "black" }}
                        >
                          Add Player
                        </SoftButton>
                      </SoftBox>
                    </DialogActions>
                  </Dialog>
        </DashboardLayout>
    )
}

export default index