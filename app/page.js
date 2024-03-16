import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Container, Typography } from "@mui/material";
import { OrderDetails, OrderSearch, OrdersList } from "@/components";

export default function Home() {
  return (
    <Container className={styles.container}>
      <Box className={styles.ordersSection}>
        <Box className={styles.orderSearchSection}>
          <OrderSearch />
        </Box>
        <Box className={styles.ordersListSection}>
          <OrdersList />
        </Box>
      </Box>
      <Box className={styles.orderDetailsSection}>
        <OrderDetails />
      </Box>
    </Container>
  );
}
