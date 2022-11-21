import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { List } from "@mui/material";
import ListTable from "./datacharts/ListTable";

function SidePage() {
  return (
    <>
      <ListTable />
    </>
  );
}

export default SidePage;
