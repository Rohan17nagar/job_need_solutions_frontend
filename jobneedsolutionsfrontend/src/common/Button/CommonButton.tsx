import React from "react";
import Button from "@mui/material/Button";
type CommonButtonProps = {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CommonButton: React.FC<CommonButtonProps> = (props) => {
  return (
    <>
      <Button variant='contained' onClick={(e) => props.onClick(e)}>
        {props.name}
      </Button>
    </>
  );
};

export default CommonButton;
