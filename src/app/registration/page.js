"use client"; // ✅ DataGrid client component hai
import { fontSize, style } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { React } from "react";
import { PiX } from "react-icons/pi";

export default function StudentsTable() {
  // Dummy data
  const rows = [
    { id: 1, name: "Rahul", age: 20, course: "BCA", attandence: "true" },
    { id: 2, name: "Priya", age: 22, course: "MCA", attandence: "false" },
    { id: 3, name: "Amit", age: 21, course: "B.Tech", attandence: "true" },
    { id: 4, name: "Sneha", age: 23, course: "MBA", attandence: "false" },
    { id: 5, name: "Rahul", age: 20, course: "BCA", attandence: "true" },
    { id: 6, name: "Priya", age: 22, course: "MCA", attandence: "false" },
    { id: 7, name: "Amit", age: 21, course: "B.Tech", attandence: "true" },
    { id: 8, name: "Sneha", age: 23, course: "MBA", attandence: "false" },
  ];

  // Columns definition
  const columns = [
    { field: "id", headerName: "ID", width: 90},
    { field: "name", headerName: "Name", width: 150 },
    { field: "age", headerName: "Age", type: "number", width: 120 },
    { field: "course", headerName: "Course", width: 150 },
    {
      field: "attandence", headerName: "Attandence", width: 150,
      renderCell: (params) => (
        <span style={{ color: params.value === "true" ? "green" : "red", fontWeight: "600" }}>
          {params.value === "true" ? "Present" : "Absent"}
        </span>
      )
    },
  ];

  return (
    <div className="student_table_ul" style={{ height: 600, width: "100%" }}>
      <h1 className="text-xl  font-bold mb-4">Students Table</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}              // ✅ Pagination
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection          // ✅ Multi select
        disableSelectionOnClick    // ✅ Row click se select disable
      />
    </div>
  );
}
