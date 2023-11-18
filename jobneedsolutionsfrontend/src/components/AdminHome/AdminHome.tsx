import React from "react";
import PermanentDrawerLeft from "../../common/PermanentDrawer/PermanentDrawer";
import "./AdminHome.scss";
import UserManagement from "../UserManagement/UserManagement";
import { allImages } from "../../assets/images/allImages";
import { useState, useEffect } from "react";
import { DrawerOptionType } from "../../Types/types";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import EmployerManagement from "../EmployerManagement/EmployerManagement";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddEmployer from "../AddEmployer/AddEmployer";

const AdminHome: React.FC = () => {
  const [activeDrawerItem, setActiveDrawerItem] = useState(2);

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/user-management");
  }, []);

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
    item: DrawerOptionType
  ) => {
    console.log(e, item);
    setActiveDrawerItem(item.id);
    if (item.id === 1) {
      navigate("/admin/admin-dashboard");
    } else if (item.id === 2) {
      navigate("/admin/user-management");
    } else if (item.id === 3) {
      navigate("/admin/employer-management");
    }
  };

  const handleAddEmployerClick = () => {
    navigate("/admin/employer-management/addEmployer");
  };

  useEffect(() => {}, []);

  return (
    <div className='admin-home-container'>
      <div className='admin-home-left'>
        <PermanentDrawerLeft
          drawerOptions={drawerOptions}
          onClick={(e, item) => handleDrawerItemClick(e, item)}
          activeItem={activeDrawerItem}
        />
      </div>

      <div className='admin-home-right'>
        <Routes>
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/user-management' element={<UserManagement />} />
          <Route
            path='/employer-management'
            element={
              <EmployerManagement
                handleAddEmployerClick={() => handleAddEmployerClick()}
              />
            }
          />
          <Route
            path='/employer-management/addEmployer'
            element={<AddEmployer />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminHome;

{
  /* <div className='admin-home-right'>
  {activeDrawerItem === 1 ? (
    <AdminDashboard />
  ) : activeDrawerItem === 2 ? (
    <UserManagement />
  ) : (
    <EmployerManagement />
  )}
</div> */
}
