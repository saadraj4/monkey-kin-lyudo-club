import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import { Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel } from "@mui/material";
import SoftInput from "components/SoftInput";
import { useState } from "react";

function LeagueRewardList({ title, LeagueRewards }) {
  const [open, setOpen] = useState(false); // Modal visibility
  const [editData, setEditData] = useState(null); // Data of the row being edited

  const handleEdit = (id) => {
    const rowData = LeagueRewards.find((row) => row.id === id);
    setEditData({ ...rowData }); // Pre-fill the modal with the data to edit
    setOpen(true); // Open the modal
  };
  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
    // Update the LeagueRewards with the new data
    const updatedData = LeagueRewards.map((row) =>
      row.id === editData.id ? { ...row, ...editData } : row
    );
    // You can save this updated data to your state, backend, or context
    console.log("Updated Data: ", updatedData);
    setOpen(false); // Close the modal
  };

  return (
    <>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox >
        <TableContainer>
          <Table sx={{ tableLayout: "fixed", width: "100%" }}>
            <TableBody>
              {LeagueRewards.map(({ id, rank, coins, diamond, booster, dice }, index) => (
                <TableRow key={index}>
                  {/* Rank */}
                  <TableCell
                    sx={{
                      padding: "10px",
                      width: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {typeof dice === "string" ? (
                      <SoftTypography variant="button" fontWeight="medium">
                        Rank
                      </SoftTypography>
                    ) : (
                      <img
                        src={rank}
                        alt={`Rank ${id}`}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </TableCell>

                  {/* Coins */}
                  <TableCell align="center">
                    <SoftTypography variant="button" fontWeight="medium">
                      {coins}
                    </SoftTypography>
                  </TableCell>

                  {/* Diamond */}
                  <TableCell align="center">
                    <SoftTypography variant="button" fontWeight="medium">
                      {diamond}
                    </SoftTypography>
                  </TableCell>

                  {/* Booster */}
                  <TableCell align="center">
                    <SoftTypography variant="button" fontWeight="medium">
                      {booster}
                    </SoftTypography>
                  </TableCell>

                  {/* Dice Piece */}
                  <TableCell align="center">
                    <SoftTypography
                      variant="button"
                      fontWeight="medium"
                      color={typeof dice === "string" ? "default" : dice ? "success" : "error"}
                    >
                      {typeof dice === "string" ? dice : dice ? "✔" : "✖"}
                    </SoftTypography>
                  </TableCell>

                  {/* Action */}
                  <TableCell align="center">

                    {typeof dice === "string" ? (
                      <SoftTypography variant="button" fontWeight="medium">
                        Action
                      </SoftTypography>
                    ) : (
                      <SoftButton color="info" variant="gradient" onClick={() => handleEdit(id)}>
                        Edit
                      </SoftButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SoftBox>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth={true}
        PaperProps={{
          sx: {
            padding: "20px",
            borderRadius: "12px",
            minHeight: "400px",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>
          Edit Reward
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {editData && (
            <>
              <SoftTypography sx={{ marginTop: 1 }} variant="body2">
                Coins
              </SoftTypography>
              <SoftInput
                name="coins"
                placeholder="Coins"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                value={editData.coins}
              />

              <SoftTypography sx={{ marginTop: 1 }} variant="body2">
                Diamonds
              </SoftTypography>
              <SoftInput
                name="diamond"
                placeholder="Diamonds"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                value={editData.diamond}
              />

              <SoftTypography sx={{ marginTop: 1 }} variant="body2">
                Boosters
              </SoftTypography>
              <SoftInput
                name="booster"
                placeholder="Boosters"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                value={editData.booster}
              />

              {/* Checkbox for adding a dice face */}
              <SoftBox mt={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="dice"
                      checked={editData.dice}
                      onChange={(e) => setEditData({ ...editData, dice: e.target.checked })}
                      color="primary"
                    />
                  }
                  label="Add a dice face"
                />
              </SoftBox>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "space-between", padding: "12px 24px" }}>
          <SoftButton color="secondary" variant="gradient" onClick={handleClose} sx={{ width: "120px", padding: "10px 16px" }}>
            Cancel
          </SoftButton>
          <SoftButton color="info" variant="gradient" onClick={handleSave} sx={{ width: "120px", padding: "10px 16px" }}>
            Save
          </SoftButton>
        </DialogActions>
      </Dialog>


    </>
  );
}

// Typechecking props for the LeagueRewardList
LeagueRewardList.propTypes = {
  title: PropTypes.string.isRequired,
  LeagueRewards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rank: PropTypes.string.isRequired,
      coins: PropTypes.string.isRequired,
      diamond: PropTypes.string.isRequired,
      booster: PropTypes.string.isRequired,
      dice: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    })
  ).isRequired,
};

export default LeagueRewardList;
