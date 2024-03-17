"use client";
import styles from "./orderSearch.module.css";
import {
  Badge,
  Box,
  Button,
  Paper,
  TextField,
  inputLabelClasses,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const OrderSearch = () => {
  return (
    <Paper
      square={false}
      className={styles.container}
      sx={{ bgcolor: "tabsBackground.main" }}
    >
      <Box className={styles.section1}>
        <Box className={styles.inputs}>
          <Paper
            className={styles.searchbar}
            component="form"
            sx={{ bgcolor: "inputColor.main" }}
          >
            <IconButton
              sx={{
                height: "32px",
                width: "32px",
                borderRadius: "100px",
                gap: "10px",
              }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <InputBase
              className={styles.searchbarInput}
              sx={{
                "& ::placeholder": {
                  color: "green4.main",
                  opacity: "1 !important",
                },
              }}
              placeholder="My Responsibilities"
              // inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="button"
              sx={{ width: "48px", height: "28px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>

          <Paper
            className={styles.POSelect}
            component="form"
            sx={{ bgcolor: "inputColor.main" }}
          >
            <InputBase
              className={styles.searchbarInput}
              sx={{
                "& ::placeholder": {
                  color: "green4.main",
                  opacity: "1 !important",
                },
              }}
              placeholder="PO"
            />
            <IconButton
              type="button"
              sx={{ height: "28px" }}
              aria-label="search"
            >
              <KeyboardArrowDown />
            </IconButton>
          </Paper>
          <Badge
            sx={{
              "& .MuiBadge-badge": {
                color: "green4.main",
                backgroundColor: "visionGreen.main",
              },
            }}
            badgeContent={10}
          >
            <IconButton
              sx={{
                bgcolor: "green3.main",
                height: "31px",
                width: "31px",
                borderRadius: "200px",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TuneIcon
                sx={{
                  height: "17px",
                  width: "17px",
                  color: "visionGreen.main",
                }}
              />
            </IconButton>
          </Badge>
        </Box>
      </Box>
      <Box className={styles.section2}>
        <Box
          className={styles.coyInputContainer}
          sx={{ borderColor: "gray2.main" }}
        >
          <TextField
            className={styles.coyInput}
            variant="standard"
            label="Coy id"
            placeholder="Enter coy id"
            focused
            sx={{
              "& ::placeholder": {
                color: "green4.main !important",
                opacity: "1 !important",
              },
            }}
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              sx: {
                color: "gray2.main",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "gray2.main",
                },
              },
            }}
          ></TextField>
        </Box>
        <Box
          className={styles.coyInputContainer}
          sx={{ borderColor: "gray2.main" }}
        >
          <TextField
            className={styles.coyInput}
            variant="standard"
            label="Order no"
            placeholder="Enter order no"
            focused
            sx={{
              "& ::placeholder": {
                color: "green4.main !important",
                opacity: "1 !important",
              },
            }}
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              sx: {
                color: "gray2.main",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "gray2.main",
                },
              },
            }}
          ></TextField>
        </Box>
      </Box>
      <Box className={styles.section3}>
        <Box className={styles.selectButtonsContainer}>
          <Button
            color="green4"
            className={`${styles.capitalize} ${styles.button}`}
            variant="text"
            sx={{ justifyContent: "start" }}
            endIcon={
              <KeyboardArrowDownIcon sx={{ height: "16px", width: "16px" }} />
            }
          >
            Sort
          </Button>
          <Button
            color="green4"
            className={`${styles.capitalize} ${styles.button}`}
            variant="text"
            endIcon={
              <KeyboardArrowDownIcon sx={{ height: "16px", width: "16px" }} />
            }
          >
            Group By
          </Button>
        </Box>
        <Box className={styles.buttonsContainer}>
          <Button
            color="green4"
            className={`${styles.capitalize} ${styles.button}`}
            variant="text"
            sx={{ justifyContent: "end" }}
          >
            Clear
          </Button>
          <Button
            color="green4"
            className={`${styles.capitalize} ${styles.button}`}
            variant="text"
            sx={{ justifyContent: "end" }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default OrderSearch;
