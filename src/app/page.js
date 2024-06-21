"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { MenuDrawerList } from "./components/DrawerList/DrawerList";
import { TabsContainer as Tabs } from "./components/Tabs/Tabs";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const szTheme = createTheme({
  palette: {
    primary: {
      main: "#006aff",
      dark: "#00204d",
      light: "#2196F3",
    },
    secondary: {
      main: "#ffd129",
      dark: "#e6bc25",
      light: "#ffda54",
    },
    success: {
      main: "#007a6a",
      dark: "#92d4c1",
      light: "#339d8f",
    },
    text: {
      primary: "#00204d",
      secondary: "#3392d6",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    h1: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 18,
      color: "#4D4B4B",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: "8px 25px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#2196F3",
          },
          "& label.Mui-focused": {
            color: "#2196F3",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#2196F3",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#2196F3",
            },
            "&:hover fieldset": {
              borderColor: "#2196F3",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2196F3",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2196F3",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#2196F3" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#2196F3" },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#3E68A8",
          },
          "& label.Mui-focused": {
            color: "#3E68A8",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#2196F3",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#2196F3",
            },
            "&:hover fieldset": {
              borderColor: '#2196F3',
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2196F3",
            },
          },
        },
      },
    },
  },
});
const muiTheme = createTheme({
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
  const [theme, setTheme] = useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme ? szTheme : muiTheme}>
        <CssBaseline />
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "16px" }}
        >
          <Button
            className={styles.drawerButton}
            onClick={toggleDrawer(true)}
            variant="contained"
            color="secondary"
          >
            Open drawer
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <Button onClick={() => {}} variant="contained" color="primary">
              Button
            </Button>
            <Button onClick={() => {}} variant="outlined" color="primary">
              Button
            </Button>
            <Button onClick={() => {}} variant="contained" color="secondary">
              Button
            </Button>
          </Box>

          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked onChange={toggleTheme} />}
              label={`Current theme: ${theme ? "SZ" : "MUI"}`}
            />
          </FormGroup>
        </Box>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          <MenuDrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
        <Tabs />
      </ThemeProvider>
    </main>
  );
}
