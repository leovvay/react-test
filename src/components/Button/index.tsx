import { Button } from "@mui/material";
import { MouseEventHandler } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SxProps, Theme } from "@mui/material/styles";

interface AppButtonProps {
  children: React.ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps<Theme>;
}

const AppButton = ({ sx=[], children, onClick }: AppButtonProps) => {
  return (
    <Button
      sx={[
        {
          backgroundColor: "#885FFF",
          color: "white",
          borderRadius: "10px",
          textTransform: "initial",
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '16px',
          lineHeight: '22px',
          fontWeight: 600,
          p: '8.5px 10.83px 9.5px 20px'
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      onClick={onClick}
    >
      {children}
      <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "white" }} />
    </Button>
  );
};

export default AppButton;
