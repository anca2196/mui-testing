import React, { useState } from "react";
import styles from "./Projects.module.scss";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from "./tableData";
import Drawer from "@mui/material/Drawer";
import { ProjectDrawerList } from "../DrawerList/DrawerList"

const Projects = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  return (
    <div>
      <div className={styles.titleWrapper}>
        <h1>H1 Projects</h1>
        <Button
          className={styles.drawerButton}
          onClick={toggleDrawer(true)}
          variant="contained"
        >
          + New Project
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          <ProjectDrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
      </div>
      <div>
      <Box sx={{ height: 400, width: '100%', mt: "16px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
      </div>
    </div>
  );
};

export default Projects;
