import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const AppHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 71,
        backgroundColor: "#F5F5F5",
        position: "sticky",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 8,
        }}
      >
        <Link href="/home">
          <a>
            <Image
              src="/assets/images/ic_logo.svg"
              width={20}
              height={22}
              alt=""
            />
          </a>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid #DFDFE0",
          borderRadius: 30,
          overflow: "hidden",
          padding: "10px 8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #33373B",
            borderRadius: 30,
            overflow: "hidden",
            width: 30,
            height: 30,
          }}
        >
          <Image
            src="/assets/images/ic_avatar_1.svg"
            width={22}
            height={22}
            alt=""
          />
        </Box>
        <Typography
          ml={0.625}
          mr={0.9375}
          fontSize={14}
          lineHeight="19.12px"
          letterSpacing="-0.15px"
        >
          Johndoe.near
        </Typography>
        <ArrowDropDownIcon sx={{ color: "#C4C4C4", mr: "6px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 0.5,
          position: "absolute",
          right: 8,
        }}
      >
        <Link href="#">
          <a>
            <Image
              src="/assets/images/ic_notification.svg"
              width={26}
              height={26}
              alt=""
            />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Image
              src="/assets/images/ic_settings.svg"
              width={26}
              height={26}
              alt=""
            />
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default AppHeader;
