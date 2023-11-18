import React from "react";
import PermanentDrawerLeft from "../../common/PermanentDrawer/PermanentDrawer";
import "./AdminHome.scss";
import UserManagement from "../UserManagement/UserManagement";
import { allImages } from "../../assets/images/allImages";

const AdminHome: React.FC = () => {
  const drawerOptions = [
    {
      id: 1,
      name: "Admin Dashboard",
      icon: allImages.AdminDashboardIcon,
      enabled: false,
    },
    {
      id: 2,
      name: "User Management",
      icon: allImages.UserManagementIcon,
      enabled: true,
    },

    {
      id: 3,
      name: "Employer Management",
      icon: allImages.EmployerManegementIcon,
      enabled: true,
    },
  ];

  const handleDrawerItemClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: object
  ) => {
    console.log(e, item);
  };

  return (
    <div className='admin-home-container'>
      <div className='admin-home-left'>
        <PermanentDrawerLeft
          drawerOptions={drawerOptions}
          onClick={(e, item) => handleDrawerItemClick(e, item)}
        />
      </div>
      <div className='admin-home-right'>
        {/* <AdminDashboard /> */}
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminHome;
