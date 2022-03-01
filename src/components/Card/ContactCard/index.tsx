import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SxProps, Theme } from "@mui/material/styles";
import Image from "next/image";
import randomColor from "randomcolor";
import { ContactUser } from "../../../types/userTypes";

interface ContactCardProps {
  sx?: SxProps<Theme>;
  contacts: ContactUser[];
}

interface UserAvatarProps {
  avatarUrl?: string;
  sx?: SxProps<Theme>;
}

const UserAvatar = ({ sx = [], avatarUrl }: UserAvatarProps) => (
  <Box
    sx={[
      {
        width: 38,
        height: 38,
        borderRadius: "255px",
        // border: "2px solid #EAEFFF",
        overflow: "hidden",
        display: 'inline-block',
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    <Image src={avatarUrl || ""} width={38} height={38} alt="" />
  </Box>
);

const ContactCard = ({ sx = [], contacts }: ContactCardProps) => {
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
        <Typography fontSize="16px" lineHeight="22px">
          Contacts
        </Typography>
        <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "#6F6E73" }} />
      </Box>
      <Box
        sx={{
          m: "13px 0 17px 13px",
          overflow: "hidden",
          height: '38px'
        }}
      >
        {contacts.map((contact, i) => (
          <UserAvatar
            key={contact.id}
            avatarUrl={contact.avatar}
            sx={{
              ml: i === 0 ? 0 : "-6px",
              backgroundColor: randomColor(),
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ContactCard;
