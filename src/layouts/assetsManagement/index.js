import { Card, Grid, IconButton } from "@mui/material";
import { Upload } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import { useRef, useState } from "react";
import Coin from "assets/images/coins.png";
import Diamond from "assets/images/diamond.png";
import Booster from "assets/images/booster.png";
import Avatar from "assets/images/avatar.png";
import Frame from "assets/images/frame.png";
import Dice from "assets/images/dice.png";
import Bounty from "assets/images/bounty.jpeg";
import Sidenav from "../SideNavbar";
import Slider from "react-slick";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Overview() {
  const fileInputRef = useRef(null); // Reference to the hidden file input
  const [image, setImage] = useState(null); // State to store the selected image

  const handleUpload = () => {
    console.log("Image upload triggered");
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a temporary URL for the image
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Card data specific to each section
  const cardDataBySection = {
    Coins: [
      { id: "1", image: Coin, price: "100" },
      { id: "2", image: Coin, price: "200" },
      { id: "3", image: Coin, price: "200" },
      { id: "4", image: Coin, price: "200" },
      { id: "5", image: Coin, price: "200" },
      { id: "6", image: Coin, price: "200" },

    ],
    Diamonds: [
        { id: "1", image: Diamond, price: "100" },
        { id: "2", image: Diamond, price: "200" },
        { id: "3", image: Diamond, price: "200" },
        { id: "4", image: Diamond, price: "200" },
        { id: "5", image: Diamond, price: "200" },
        { id: "6", image: Diamond, price: "200" },
    ],
    Boosters: [
        { id: "1", image: Booster, price: "100" },
        { id: "2", image: Booster, price: "200" },
        { id: "3", image: Booster, price: "200" },
        { id: "4", image: Booster, price: "200" },
        { id: "5", image: Booster, price: "200" },
        { id: "6", image: Booster, price: "200" },
    ],
    Avatars: [
        { id: "1", image: Avatar, price: "100" },
        { id: "2", image: Avatar, price: "200" },
        { id: "3", image: Avatar, price: "200" },
        { id: "4", image: Avatar, price: "200" },
        { id: "5", image: Avatar, price: "200" },
        { id: "6", image: Avatar, price: "200" },
    ],
    Dice: [
        { id: "1", image: Dice, price: "100" },
        { id: "2", image: Dice, price: "200" },
        { id: "3", image: Dice, price: "200" },
        { id: "4", image: Dice, price: "200" },
        { id: "5", image: Dice, price: "200" },
        { id: "6", image: Dice, price: "200" },
    ],
    Frames: [
        { id: "1", image: Frame, price: "100" },
        { id: "2", image: Frame, price: "200" },
        { id: "3", image: Frame, price: "200" },
        { id: "4", image: Frame, price: "200" },
        { id: "5", image: Frame, price: "200" },
        { id: "6", image: Frame, price: "200" },
    ],
    Bounty: [ 
        { id: "1", image: Bounty, price: "100" },
        { id: "2", image: Bounty, price: "200" },
        { id: "3", image: Bounty, price: "200" },
        { id: "4", image: Bounty, price: "200" },
        { id: "5", image: Bounty, price: "200" },
        { id: "6", image: Bounty, price: "200" },
    ],
  };

  const sections = Object.keys(cardDataBySection);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav />

      <SoftBox mb={5}>
        {sections.map((section, index) => (
          <div key={index}>
            <SoftBox pt={2} px={2} position="relative">
              {/* Title */}
              <SoftBox mb={1}>
                <SoftTypography variant="button" fontWeight="regular" color="text">
                  {section}
                </SoftTypography>
              </SoftBox>

              {/* Upload Button */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <IconButton
                onClick={handleUpload}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "3rem",
                }}
              >
                <Upload />
              </IconButton>
            </SoftBox>

            {/* Slider */}
            <SoftBox p={2}>
              {cardDataBySection[section].length > 0 ? (
                <Slider {...settings}>
                  {cardDataBySection[section].map((card, index) => (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      xl={3}
                      key={index}
                      sx={{ padding: "10px" }}
                    >
                      <DefaultProjectCard
                        image={card.image}
                        price={card.price}
                        id={card.id}
                        flag={true} // Include the flag prop if it's needed
                      />
                    </Grid>
                  ))}
                </Slider>
              ) : (
                <SoftTypography variant="body2" color="text">
                  No items available in this category.
                </SoftTypography>
              )}
            </SoftBox>
          </div>
        ))}
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
