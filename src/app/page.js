"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { MenuDrawerList } from "./components/DrawerList/DrawerList";
import { TabsContainer as Tabs } from "./components/Tabs/Tabs";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1, h2, h3, p {
          color: #4D4B4B;
        }
      `,
    },
  },
});

export default function Home() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Button
          className={styles.drawerButton}
          onClick={toggleDrawer(true)}
          variant="contained"
        >
          Open drawer
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <MenuDrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
        <Tabs />

      </ThemeProvider>
    </main>
  );
}
