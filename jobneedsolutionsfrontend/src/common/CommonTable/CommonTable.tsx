// import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CustomPagination from "../Pagination/Pagination";
import "./CommonTable.scss";
// import { ContentType } from "../../Types/types";

// type CommonTableProps = {
//   tableData: Array<ContentType>;
// };

type CommonTableProps<T> = {
  columns: GridColDef[];
  rows: T[];
  getRowId: (row: T) => string | number;
  totalPages: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};
export default function CommonTable<T>(props: CommonTableProps<T>) {
  return (
    <div
      className='common-table-container'
      style={{ height: 400, width: "100%" }}
    >
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        hideFooter
        disableColumnMenu
        getRowId={props.getRowId}
        initialState={
          {
            //   pagination: {
            //     paginationModel: { page: 0, pageSize: 5 },
            //   },
          }
        }
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
      <div className='common-table-pagination'>
        <CustomPagination
          count={props.totalPages}
          onChange={(e, value) => props.handlePageChange(e, value)}
          currentPage={props.currentPage}
        />
      </div>
    </div>
  );
}
