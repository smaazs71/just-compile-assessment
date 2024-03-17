import styles from "./order.module.css";
import { Box, Paper, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { Anchor, Info, PinOutlined } from "@mui/icons-material";

const Order = ({ order, selected }) => {
  return (
    <Paper
      sx={{
        bgcolor: "tabsBackground.main",
        border: `${selected ? "1px solid #052e2b" : 0}`,
      }}
      className={styles.orderContainer}
    >
      <Box className={styles.leftSection}>
        <Box className={styles.orderBasicDetials}>
          <Typography className={styles.orderNo}>
            {order.orderNo || ""}
          </Typography>
          <Typography className={styles.orderName}>
            {order.orderTitle || ""}
          </Typography>
        </Box>
        <Box className={styles.orderInputChipContainer}>
          <Box className={styles.orderInputChip}>
            <TuneIcon className={styles.inputChipIcon} />
            <Typography className={styles.Lorem}>Lorem ipsum</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.rightSection}>
        <Box className={styles.iconsContainer}>
          {order.anchor && (
            <Box className={styles.iconContainer}>
              <Anchor className={styles.icon} />
            </Box>
          )}
          {order.pinned && (
            <Box className={styles.iconContainer}>
              <PinOutlined className={styles.icon} />
            </Box>
          )}
          {order.info && (
            <Box className={styles.iconContainer}>
              <Info className={styles.icon} />
            </Box>
          )}

          <Box className={styles.iconContainer}>
            <Box className={styles.textSymbol}>{order.orderType || "RT"}</Box>
          </Box>
        </Box>
        <Box className={styles.textSection}>
          <Typography className={styles.textTitle}>
            {order.sector || ""}
          </Typography>
          <Typography className={styles.textDate}>
            {order.date || ""}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Order;
