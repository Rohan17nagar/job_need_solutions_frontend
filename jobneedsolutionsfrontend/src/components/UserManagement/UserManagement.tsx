import React, { useState } from "react";
import Banner from "../../common/Banner/Banner";
import "./UserManagement.scss";
import CommonTable from "../../common/CommonTable/CommonTable";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllUsersListAdmin } from "../../redux/slice/adminSlice";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { ContentType } from "../../Types/types";
import Loader from "../../common/Loader/Loader";
const UserManagement: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const adminSliceData = useAppSelector((state) => state.adminSlice);

  console.log(adminSliceData);

  useEffect(() => {
    dispatch(getAllUsersListAdmin(0));
  }, []);

  const handleButtonClick = (userId: number) => {
    console.log(userId);
  };

  const columns: GridColDef[] = [
    { field: "userId", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "email",
      headerName: "Email Id",
      width: 160,
    },
    {
      field: "phone",
      headerName: "Mobile",
      width: 130,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 70,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) =>
        params.row.id === 1 ? (
          <Button
            variant='outlined'
            color='primary'
            onClick={() => handleButtonClick(params.row.id)}
          >
            Edit
          </Button>
        ) : params.row.id === 5 ? (
          <Button
            variant='outlined'
            color='primary'
            onClick={() => handleButtonClick(params.row.id)}
          >
            replace
          </Button>
        ) : (
          <div>No action required</div>
        ),
    },
  ];

  const [rows, setRows] = React.useState<ContentType[]>([]);

  useEffect(() => {
    const rows: ContentType[] = adminSliceData.adminAllUsers.content.map(
      (item) => ({
        userId: item.userId,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        phone: item.phone,
        gender: item.gender,
        resume: "",
      })
    );

    setRows(rows);
  }, [adminSliceData.adminAllUsers]);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    console.log(e, value);
    dispatch(getAllUsersListAdmin(value - 1));
    setCurrentPage(value);
  };

  return adminSliceData.loading === true ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className='user-management-container'>
      <Banner />

      <div className='user-management-table'>
        <CommonTable
          // tableData={adminSliceData.adminAllUsers.content}
          columns={columns}
          rows={rows}
          getRowId={(row: ContentType) => `${row.userId}-${row.email}`}
          handlePageChange={(e, value) => handlePageChange(e, value)}
          totalPages={adminSliceData.adminAllUsers.totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default UserManagement;
