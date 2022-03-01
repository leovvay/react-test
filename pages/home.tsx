import * as React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import MainLayout from "../src/containers/MainLayout";
import ConnectionCard from "../src/components/Card/ConnectionCard";
import ContactCard from "../src/components/Card/ContactCard";
import { ContactUser } from "../src/types/userTypes";
import AppButton from "../src/components/Button";
import TabContainer from "../src/containers/TabContainer";

const Home: NextPage = () => {
  const [contacts] = React.useState<ContactUser[]>([
    {
      id: 1,
      name: "a",
      avatar: "/assets/images/avatar_sample_1.png",
    },
    {
      id: 2,
      name: "b",
      avatar: "/assets/images/avatar_sample_1.png",
    },
    {
      id: 3,
      name: "c",
      avatar: "/assets/images/avatar_sample_1.png",
    },
    {
      id: 4,
      name: "c",
      avatar: "/assets/images/avatar_sample_1.png",
    },
    {
      id: 5,
      name: "c",
      avatar: "/assets/images/avatar_sample_1.png",
    },
    {
      id: 6,
      name: "c",
      avatar: "/assets/images/avatar_sample_1.png",
    },
    {
      id: 7,
      name: "c",
      avatar: "/assets/images/avatar_sample_1.png",
    },
    {
      id: 8,
      name: "c",
      avatar: "/assets/images/avatar_sample_1.png",
    },
  ]);

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
          marginX: "10px",
          marginTop: "10px",
        }}
      >
        <ContactCard sx={{ flex: "1 0 45%" }} contacts={contacts} />
        <ConnectionCard sx={{ flex: "1 0 45%" }} />
        <Box
          sx={{
            backgroundColor: "#F7E9FF",
            position: "relative",
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
            p: "13px 0 16px 12px",
          }}
        >
          <Box width="148px">
            <Typography
              sx={{
                fontSize: 22,
                lineHeight: "30px",
                letterSpacing: "-0.04em",
                mx: "5.5px",
                fontWeight: 600,
              }}
            >
              Start Creating your NFT Today
            </Typography>
            <AppButton sx={{ display: "block", mt: "15px" }}>
              Create NFT
            </AppButton>
          </Box>
          <Box sx={{ position: "absolute", right: 0, bottom: 0 }}>
            <Image
              src="/assets/images/img_nft_xxx.svg"
              width={203}
              height={167}
              alt=""
            />
          </Box>
        </Box>
      </Box>

      <TabContainer
        data={[
          {
            title: "Collectibles",
            content: () => <></>,
          },
          {
            title: "Transactions",
            content: () => <></>,
          },
        ]}
      />
    </MainLayout>
  );
};

export default Home;
