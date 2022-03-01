import * as React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/router";

const Splash: NextPage = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/home");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url(/assets/images/bg_splash.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={goToHome}
    >
      <Image
        src="/assets/images/title_land.svg"
        width={172}
        height={36}
        alt=""
      />
      <Typography
        variant="h4"
        component="h1"
        color="white"
        fontSize={15}
        mt={0.9375}
      >
        a web3 gateway to hidden experiences
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          marginBottom: 4.25,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          color="white"
          mb={2.625}
          fontSize={15}
        >
          powered by
        </Typography>
        <Image
          src="/assets/images/img_logo.svg"
          width={172}
          height={36}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default Splash;
