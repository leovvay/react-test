import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SxProps, Theme } from "@mui/material/styles";

interface ConnectionCardProps {
  sx?: SxProps<Theme>;
}

const ConnectionCard = ({ sx = [] }: ConnectionCardProps) => {
  return (
    <Box
      sx={[
        {
          backgroundColor: "#EAEFFF",
          overflow: "hidden",
          borderRadius: "6px",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "13px",
          mt: "9px",
        }}
      >
        <Typography fontSize="16px" lineHeight="22px" color="white">
          web3 Apps
        </Typography>
        <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "white" }} />
      </Box>
      <Typography
        sx={{
          backgroundColor: "#18D7A9",
          p: "2px 7px",
          ml: "13px",
          mt: "8px",
          display: "inline-block",
          borderRadius: "6px",
          fontSize: "12px",
          lineHeight: "16px",
          color: "white",
        }}
      >
        12 Connected
      </Typography>
    </Box>
  );
};

export default ConnectionCard;
