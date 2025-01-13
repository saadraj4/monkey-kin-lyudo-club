import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const styles = {
        container: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9f9f9",
            color: "#333",
            textAlign: "center",
        },
        heading: {
            fontSize: "5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
        },
        message: {
            fontSize: "1.5rem",
            marginBottom: "2rem",
        },
        button: {
            padding: "12px 24px",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#00bc69",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "background 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#008c53",
        },
    };

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.message}>
                Oops! The page you are looking for does not exist.
            </p>
            <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
                onClick={handleGoHome}
            >
                Go Back Home
            </button>
        </div>
    );
};

export default NotFound;
