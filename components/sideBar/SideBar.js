import { Box, Container } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { Pages } from "@mui/icons-material";
import styles from "./sidebar.module.css";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";

const SideBar = () => {
  return (
    <Box className={styles.sidebar} sx={{ bgcolor: "darkGreen.main" }}>
      <Box className={styles.menuFab}>
        <Box className={styles.menu}>
          <MenuIcon
            className={styles.menuIcon}
            sx={{ color: "foreground.main" }}
          />
        </Box>
        <Box className={styles.fab} bgcolor="secondaryGreen.main">
          <Box className={styles.fabIconContainer}>
            <AddIcon
              className={styles.fabIcon}
              sx={{ color: "visionGreen.main" }}
            />
          </Box>
        </Box>
      </Box>
      <Box className={styles.destination}>
        <Box
          sx={{ height: "32px !important", bgcolor: "green3.main" }}
          className={styles.segment}
        >
          <Box
            sx={{
              height: "32px !important",
              padding: "4px 16px 4px 16px !important",
            }}
            className={styles.iconContainer}
          >
            <Person4OutlinedIcon
              className={styles.segmentIcon}
              sx={{ color: "visionGreen.main" }}
            />
          </Box>
        </Box>

        <Box className={styles.segment}>
          <Box className={styles.iconContainer}>
            <Person4OutlinedIcon
              className={styles.segmentIcon}
              sx={{ color: "visionGreen.main" }}
            />
          </Box>
        </Box>
        <Box className={styles.segment}>
          <Box className={styles.iconContainer}>
            <Person4OutlinedIcon
              className={styles.segmentIcon}
              sx={{ color: "visionGreen.main" }}
            />
          </Box>
        </Box>
        <Box className={styles.segment}>
          <Box className={styles.iconContainer}>
            <Person4OutlinedIcon
              className={styles.segmentIcon}
              sx={{ color: "visionGreen.main" }}
            />
          </Box>
        </Box>
        <Box className={styles.segment}>
          <Box className={styles.iconContainer}>
            <Person4OutlinedIcon
              className={styles.segmentIcon}
              sx={{ color: "visionGreen.main" }}
            />
          </Box>
        </Box>
        <Box className={styles.segment}>
          <Box className={styles.iconContainer}>
            <Person4OutlinedIcon
              className={styles.segmentIcon}
              sx={{ color: "visionGreen.main" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
