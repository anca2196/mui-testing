import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useState } from "react";
import Projects from "../Projects/Projects";
import Typography from '@mui/material/Typography';
import { CardsList } from "../CardsList/CardsList";
import Graph from "../Graph/Graph";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const TabsContainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Hiring" />
          <Tab label="Reskilling" />
          <Tab label="Talent review" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Projects/>
       <CardsList />
        <Graph />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h1>Reskilling</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <h1>Talent Review</h1>
      </CustomTabPanel>
    </Box>
  );
};
