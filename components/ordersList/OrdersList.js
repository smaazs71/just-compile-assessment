import styles from "./ordersList.module.css";
import { Box, Paper, Typography } from "@mui/material";
import Order from "./order/Order";

const orderList = [
  {
    orderNo: "907 - 00011",
    orderTitle: "HOTEL/TECH WORK SQUAD GFR",
    anchor: false,
    pinned: false,
    info: true,
    orderType: "RT",
    sector: "Services",
    date: "12 Jul 2019",
  },

  {
    orderNo: "907 - 00011",
    orderTitle: "HOTEL/TECH WORK SQUAD GFR",
    anchor: false,
    pinned: false,
    info: true,
    orderType: "RT",
    sector: "Services",
    date: "12 Jul 2019",
  },
  {
    orderNo: "",
    orderTitle: "",
    anchor: true,
    pinned: false,
    info: false,
    orderType: "",
    sector: "",
    date: "",
  },
  {
    orderNo: "902 - 10019",
    orderTitle: "HOTEL/TECH WORK SQUAD GFR",
    anchor: true,
    pinned: true,
    info: true,
    orderType: "RT",
    sector: "Services",
    date: "12 Jul 2019",
  },
  {
    orderNo: "307 - 03019",
    orderTitle: "HOTEL/TECH WORK SQUAD GFR",
    orderType: "RT",
    sector: "Services",
    date: "12 Jul 2019",
    anchor: true,
    pinned: false,
    info: true,
  },
];

const OrdersList = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.titleContainer}>
        <Typography sx={{ color: "green4.main" }} className={styles.title}>
          ORDERS
        </Typography>
        <Box
          sx={{ bgcolor: "gray3.main", color: "green2.main" }}
          className={styles.orderCount}
        >
          8
        </Box>
      </Box>
      <Box className={styles.orderList}>
        {orderList.map((order, i) => (
          <Order selected={i === 0} order={order} />
        ))}
      </Box>
    </Box>
  );
};

export default OrdersList;
