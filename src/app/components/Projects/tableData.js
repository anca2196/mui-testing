import Chip from "@mui/material/Chip";
import CheckIcon from "@mui/icons-material/Check";
import WarningIcon from "@mui/icons-material/Warning";
export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "status",
    headerName: "Status",
    type: "status",
    width: 210,
    editable: false,
    renderCell: (params) => {
      const isRejected = params.value === "Rejected";
      return (
        <Chip
          icon={isRejected ? <WarningIcon /> : <CheckIcon />}
          label={params.value}
          variant={"outlined"}
          color={isRejected ? "error" : "success"}
        />
      );
    },
  },
];

export const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14, status: "Rejected" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 31,
    status: "Hired",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 31,
    status: "Rejected",
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11, status: "Hired" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 28,
    status: "Hired",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Ann",
    age: 150,
    status: "Rejected",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: "Hired",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    status: "Rejected",
  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, status: "Hired" },
];
