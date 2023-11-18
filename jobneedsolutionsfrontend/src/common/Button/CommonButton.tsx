import React from "react";
import Button from "@mui/material/Button";
import "./CommonButton.scss";
type CommonButtonProps = {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CommonButton: React.FC<CommonButtonProps> = (props) => {
  return (
    <>
      <Button
        variant='contained'
        className='common-button'
        onClick={(e) => props.onClick(e)}
      >
        {props.name}
      </Button>
    </>
  );
};

export default CommonButton;
