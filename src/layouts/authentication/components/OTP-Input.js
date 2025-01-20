import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isActive, setIsActive] = useState(false);  // Track if the button should be active
  const navigate = useNavigate();

  const styles = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#fff",
    },
    container: {
      background: "#fff",
      padding: "30px 65px",
      borderRadius: "12px",
      rowGap: "20px",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      height: "65px",
      width: "65px",
      background: "#2175ff",
      color: "#fff",
      fontSize: "2.5rem",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    h4: {
      fontSize: "1.25rem",
      color: "#333",
      fontWeight: "500",
    },
    inputField: {
      display: "flex",
      flexDirection: "row",
      columnGap: "10px",
    },
    input: {
      height: "45px",
      width: "42px",
      borderRadius: "6px",
      outline: "none",
      fontSize: "1.125rem",
      textAlign: "center",
      border: "1px solid #ddd",
    },
    button: {
      marginTop: "25px",
      width: "100%",
      color: "#fff",
      fontSize: "1rem",
      border: "none",
      padding: "9px 0",
      cursor: "pointer",
      borderRadius: "6px",
      transition: "all 0.2s ease",
    },
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    let newOtp = [...otp];

    if (value.length > 1) {
      newOtp[index] = "";
      return;
    }

    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    if (e.key === "Backspace" && index > 0 && value === "") {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }

    // Check if all fields are filled
    setIsActive(newOtp.every(val => val !== ""));  // Update button status
  };

  useEffect(() => {
    document.getElementById("otp-input-0").focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue === "123456") {
      navigate("/dashboard");
    } else {
      toast.error("Invalid OTP", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setOtp(["", "", "", "", "", ""]);
    }
  };

  return (
    <>
      <ToastContainer />
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <header style={styles.header}>
            <i className="bx bxs-check-shield"></i>
          </header>

          <h4 style={styles.h4}>Enter OTP Code</h4>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputField}>
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={value}
                  style={styles.input}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyUp={(e) => handleInputChange(e, index)}
                  disabled={index > 0 && otp[index - 1] === ""}
                />
              ))}
            </div>

            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={handleSubmit}
                type="submit"
                style={styles.button}
                disabled={!isActive}  // Disable button if not all fields are filled
              >
                Verify OTP
              </SoftButton>
            </SoftBox>
          </form>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
