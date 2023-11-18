import React from "react";
import PermanentDrawerLeft from "../../common/PermanentDrawer/PermanentDrawer";
import "./AdminHome.scss";
import UserManagement from "../UserManagement/UserManagement";

const AdminHome: React.FC = () => {
  return (
    <div className='admin-home-container'>
      <div className='admin-home-left'>
        <PermanentDrawerLeft />
      </div>
      <div className='admin-home-right'>
        {/* <AdminDashboard /> */}
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminHome;
