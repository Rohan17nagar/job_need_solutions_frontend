import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type CustomPaginationProps = {
  count: number;
  currentPage: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const CustomPagination: React.FC<CustomPaginationProps> = (
  props: CustomPaginationProps
) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.count}
        onChange={(e, value) => props.onChange(e, value)}
        page={props.currentPage}
      />
    </Stack>
  );
};

export default CustomPagination;
