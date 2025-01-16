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

function index() {
  const [openModal, setOpenModal] = useState(false); // State to open/close modal
  const [newTitle, setNewTitle] = useState(""); // State to store the new player's name
  const [newImage, setNewImage] = useState(null);
  const [newDescription, setNewDescription] = useState("");

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

            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>Add New Notification</DialogTitle>
                <DialogContent>
                    <SoftTypography
                        sx={{
                            marginTop: 4,

                        }}
                        variant="body2">
                        Notification Title
                    </SoftTypography>
                    {/* Title Field */}
                    <SoftInput
                        placeholder="Title"
                        variant="outlined"
                        fullWidth
                        value={newTitle}
                        onChange={handleInputChange}

                    />
                    <SoftTypography
                        sx={{ marginTop: 4, }}
                        variant="body2">
                        Notification Description
                    </SoftTypography>
                    {/* Description Field */}
                    <SoftInput
                        placeholder="Description"
                        variant="outlined"
                        fullWidth
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)} // Use appropriate state update function


                    />

                    {/* Image Upload Field */}
                    <SoftTypography
                        sx={{
                            marginTop: 4,

                        }}
                        variant="body2">
                        Image
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
                        <SoftButton variant="gradient" color="info" fullWidth onClick={handleAddNotification} sx={{ color: "black" }}>
                            Add Notifications
                        </SoftButton>
                    </SoftBox>
                </DialogActions>
            </Dialog>
        </DashboardLayout>
    )
}

export default index