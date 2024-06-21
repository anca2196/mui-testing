import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

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
  "Carl Carlson",
  "Barney Gumble",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Multiselect = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box sx={{ mt: 2, mb: 4, display: "flex", alignItems: "center", gap: 5 }}>
      <FormControl sx={{ m: 1, width: 450 }}>
        <InputLabel id="demo-multiple-chip-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          label="Name"
          value={personName}
          onChange={handleChange}
          color="primary"
          sx={{ position: "relative" }}
          fullWidth
          input={<OutlinedInput id="select-multiple-chip" label="Name" />}
          endAdornment={
            <CloseIcon
              sx={{
                cursor: "pointer",
                color: theme.palette.grey[600],
                position: "absolute",
                right: "30px",
              }}
              onClick={() => setPersonName([])}
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value, index) => (
                <Chip key={index} label={value} color="secondary" />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          <MenuItem
            sx={{ padding: 0 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <Button
              fullWidth
              onClick={(e) => {
                e.stopPropagation();
                setCount((prev) => prev + 1);
              }}
            >
              + Invite a new user to the company
            </Button>
          </MenuItem>
          {names
            .sort((a, b) => {
              const aSel = personName.includes(a);
              const bSel = personName.includes(b);

              if (aSel && !bSel) return -1;
              if (!aSel && bSel) return 1;
              return 0;
            })
            .map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#FFF", //Set the highlight color to white on the first menu item when the menu opens
                  },
                }}
              >
                {personName.includes(name) && (
                  <CheckIcon color="secondary" sx={{ mr: 1 }} />
                )}
                {name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <p>
        Invite button clicked: <b>{count} times.</b>
      </p>
    </Box>
  );
};

export default Multiselect;
