/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = () => {
    
    if(email === "") {
      alert("Please fill in all fields");
      return;
    }
    
    else {
      alert("Reset Link has been sent");
      navigate("/")
    }


  };

  return (
    <CoverLayout
      title="Forgot Password? Reset It Here"
      description="Enter your email to receive instructions on setting a new password."
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" value = {email} onChange={handleEmailChange}/>
        </SoftBox>

        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
            Send Reset Link
          </SoftButton>
        </SoftBox>
        
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
