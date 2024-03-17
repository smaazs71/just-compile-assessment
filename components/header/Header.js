"use client";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import styles from "./header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppsOutageRoundedIcon from "@mui/icons-material/AppsOutageRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
const Header = () => {
  return (
    <Box className={styles.header}>
      <Typography>Procurement</Typography>
      <Box className={styles.setting}>
        <Box className={styles.iconsContainer}>
          <IconButton className={styles.iconContainer}>
            <Box
              className={styles.searchIconContainer}
              sx={{ border: "1px solid", borderColor: "green2.main" }}
            >
              <SearchOutlinedIcon sx={{ height: "13px" }} />
            </Box>
          </IconButton>
          <IconButton className={styles.iconContainer}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton className={styles.iconContainer}>
            <AppsOutageRoundedIcon />
          </IconButton>
        </Box>
        <Box className={styles.porfile}>
          <Button
            variant="contained"
            color="white"
            startIcon={
              <AccountCircleIcon sx={{ height: "16px", width: "16px" }} />
            }
            endIcon={<ArrowDropDownRoundedIcon fontSize="large" />}
            className={styles.profileButton}
          >
            Daniel Rogers
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
