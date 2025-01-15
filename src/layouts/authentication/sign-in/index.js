import { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { Card } from "@mui/material";

function SignIn() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    else if (email.toLowerCase() === "admin@gmail.com" && password === "admin") {
      navigate("/authentication/otp-verification");
    }
    else {
      alert("Invalid email or password");
    }
    setEmail("");
    setPassword("");
  };

  return (



    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",  // Ensures the container takes full viewport height
      }}
    >
      <SoftBox>
        <SoftTypography>
          Welcome Back
        </SoftTypography>
      </SoftBox>
      <SoftBox
        component="form"
        role="form"
        sx={{
          width: "100%",
          maxWidth: "400px",  // Max width to control form size
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",  // Adding shadow to make it prominent
        }}
      >
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography variant="button" fontWeight="regular" onClick={handleSetRememberMe} sx={{ cursor: "pointer", userSelect: "none" }}>
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={handleLogin}>
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Forget Password?{" "}
            <SoftTypography variant="button" sx={{ cursor: "pointer" }} color="info" fontWeight="medium" textGradient onClick={() => navigate("/authentication/Reset-Password")}>
              Click Here
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>

  );
}

export default SignIn;
