import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { Card } from "@mui/material";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        minHeight: "100vh",
      }}
    >
      <SoftBox>

      </SoftBox>
      <SoftBox
        component="form"
        role="form"
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <SoftTypography display="flex" justifyContent="center" alignItems="center" variant="h4" fontWeight="bold">
          Welcome Back
        </SoftTypography>
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

        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={handleLogin}>
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="secondary " fontWeight="regular"
            sx={{ cursor: "pointer" }}
            textGradient
            onClick={() => navigate("/authentication/Reset-Password")}>

            Forget Password?{" "}
              {/* <SoftTypography >
                Click Here
              </SoftTypography> */}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>

  );
}

export default SignIn;
