import { Box } from "@mui/system";
import AppHeader from "../AppHeader";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppHeader />
      {children}
    </Box>
  );
};

export default MainLayout;
