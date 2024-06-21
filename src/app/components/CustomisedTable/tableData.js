import Chip from "@mui/material/Chip";
import CheckIcon from "@mui/icons-material/Check";
import WarningIcon from "@mui/icons-material/Warning";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { GridActionsCellItem } from '@mui/x-data-grid';
export const columns = [

  {
    field: "name",
    headerName: "Name",
    width: 180,
    editable: true,
    headerClassName: "theme--header",
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
    headerClassName: "theme--header",
  },
  {
    field: "invited",
    headerName: "Invited",
    width: 180,
    renderCell: (params) => {
      const isRejected = params.value === "Rejected";
      return (
        <Chip
          icon={isRejected ? <WarningIcon /> : <CheckIcon />}
          label={params.value}
          variant={"outlined"}
          sx={{ padding: "5px", width: 130 }}
          color={isRejected ? "error" : "success"}
        />
      );
    },
    headerClassName: "theme--header",
  },

  {
    field: "updated",
    headerName: "Updated",
    width: 180,
    editable: true,
    headerClassName: "theme--header",
  },
  {
    field: "managers",
    headerName: "Managers",
    type: 'actions',
    width: 180,
    getActions: (params) => [
        <GridActionsCellItem
          icon={<CheckIcon />}
          label="Toggle Admin"
        //   onClick={toggleAdmin(params.id)}
          showInMenu
          me
        />,
        <GridActionsCellItem
          icon={<WarningIcon />}
          label="Delete User"
        //   onClick={duplicateUser(params.id)}
          showInMenu
        />,
      ],
    headerClassName: "theme--header",
  },

];

export const rows = [
  {
    id: 1,
    name: "John Doe ",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",

  },
  {
    id: 2,
    name: "Jane Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",

  },
  {
    id: 3,
    name: "Max Walter Doe",
    email: "john@sz.co.uk",
    invited: "Rejected",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 4,
    name: "Kevin Doe",
    email: "john@sz.co.uk",
    invited: "Rejected",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 5,
    name: "Alicia Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 6,
    name: "Tyler Doe",
    email: "john@sz.co.uk",
    invited: "Rejected",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 7,
    name: "Jane Marie Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",
  },

  {
    id: 8,
    name: "Alicia Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 9,
    name: "Tyler Doe",
    email: "john@sz.co.uk",
    invited: "Rejected",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 10,
    name: "Jane Marie Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",
  },

  {
    id: 11,
    name: "Alicia Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 12,
    name: "Tyler Doe",
    email: "john@sz.co.uk",
    invited: "Rejected",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 7,
    name: "Jane Marie Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",
  },

  {
    id: 5,
    name: "Alicia Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 6,
    name: "Tyler Doe",
    email: "john@sz.co.uk",
    invited: "Rejected",
    updated: "Cell",
    mangers: "",
  },
  {
    id: 7,
    name: "Jane Marie Doe",
    email: "john@sz.co.uk",
    invited: "Invited",
    updated: "Cell",
    mangers: "",
  },
];
