// import AppLoader from "../components/layout/appLoader";

import { Box } from "@mui/material";
import CategorySection from "../components/home/categorySection";
import EdsSection from "../components/home/edsSection";
import HeroSection from "../components/home/heroSection";
import Header from "../components/layout/header";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CategorySection />
      <EdsSection />
      <Box height={"50vh"} />
    </>
  );
}

export default HomePage;
