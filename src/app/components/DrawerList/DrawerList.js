import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import styles from "./DraweList.module.scss";
import Avatar from "@mui/material/Avatar";
import { SZ_LOGO } from "@/app/constants/constants";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

export const MenuDrawerList = ({ toggleDrawer }) => (
  <Box
    sx={{ width: 250, padding: 2, height: "100%" }}
    role="presentation"
    onClick={toggleDrawer(false)}
  >
    <img className={styles.logo} src={SZ_LOGO} alt={"Spotted Zebra"} />

    <div className={styles.avatarWrapper}>
      <Avatar
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1715329499545-f57d711c8209?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        sx={{ width: 36, height: 36 }}
      />
      <span> User name</span>
    </div>
    <Box
      sx={{
        height: "calc(100% - 160px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <MenuList>
        <MenuItem sx={{ fontSize: 18 }}>Projects</MenuItem>
        <MenuItem sx={{ fontSize: 18 }}>Interviews</MenuItem>
      </MenuList>

      <MenuList className={styles.bottomMenuWrapper}>
        <MenuItem sx={{ fontSize: 18 }}>Help</MenuItem>
        <MenuItem sx={{ fontSize: 18 }}>Feedback</MenuItem>
      </MenuList>
    </Box>
  </Box>
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const ProjectDrawerList = () => {
  const [personName, setPersonName] = useState([]);
  const [checkbox, setCheckbox] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleCheckboxChange = (event) => {
    setCheckbox({
      ...checkbox,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box
      sx={{ width: 800, padding: 2, height: "100%" }}
      role="presentation"
      onClick={() => {}}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <h1>H1 Header</h1>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "16px" }}
        >
          {" "}
          <Button onClick={() => {}} variant="outlined">
            Secondary
          </Button>
          <Button onClick={() => {}} variant="contained">
            Primary
          </Button>
        </Box>
      </Box>
      <p>Helper Text</p>
      <div>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} color="secondary" />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </FormControl>
        <FormControl sx={{ ml: 1 }}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Toggle label"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <TextField
            id="outlined-basic"
            label="First name"
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ m: 1, mt: 3, width: "100%" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            <h4>H4. Radio button group</h4>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Radio 1"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Radio 2"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Radio 3"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ m: 1, mt: 3, width: "100%" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            <h4>H4. Checkbox group</h4>
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox.gilad}
                onChange={handleCheckboxChange}
                name="gilad"
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox.jason}
                onChange={handleCheckboxChange}
                name="jason"
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox.antoine}
                onChange={handleCheckboxChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormControl>
      </div>
    </Box>
  );
};
