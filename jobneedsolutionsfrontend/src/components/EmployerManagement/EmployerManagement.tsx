import React from "react";
import Loader from "../../common/Loader/Loader";
import Banner from "../../common/Banner/Banner";
import CommonButton from "../../common/Button/CommonButton";

type EmployerManagementProps = {
  handleAddEmployerClick: React.MouseEventHandler<HTMLButtonElement>;
};

const EmployerManagement: React.FC<EmployerManagementProps> = (
  props: EmployerManagementProps
) => {
  return false ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className='user-management-container'>
      <Banner />
      <div>
        <CommonButton
          name='Add Employer'
          onClick={(e) => props.handleAddEmployerClick(e)}
        />
      </div>

      {/* <div className='user-management-table'>
        <CommonTable
          columns={columns}
          rows={rows}
          getRowId={(row: ContentType) => `${row.userId}-${row.email}`}
          handlePageChange={(e, value) => handlePageChange(e, value)}
          totalPages={adminSliceData.adminAllUsers.totalPages}
          currentPage={currentPage}
        />
      </div> */}
    </div>
  );
};

export default EmployerManagement;
