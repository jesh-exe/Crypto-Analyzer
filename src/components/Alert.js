import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useGlobalContext } from "../Context";
import React from "react";
const Alert = () => {
    const { alert, setAlert } = useGlobalContext();
  
    const handleCloseAlert = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setAlert({ open: false });
    };
  
    return (
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <MuiAlert
          onClose={handleCloseAlert}
          elevation={10}
          variant="filled"
          severity={alert.type}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    );
  };
  
  export default Alert;