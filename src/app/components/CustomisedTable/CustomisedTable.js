import React from "react";
import Box from "@mui/material/Box";
import { columns, rows } from "./tableData";

import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
const PAGE_SIZE = 5;
import styles from "./CustomisedTable.module.scss";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const CustomisedTable = () => {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });
  return (
    <div>
      <Box
        sx={{
          height: 500,
          width: "100%",
          mt: "16px",
        }}
      >
        <DataGrid
          className={styles.container}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          paginationModel={paginationModel}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default CustomisedTable;
