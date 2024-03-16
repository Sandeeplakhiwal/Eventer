import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

function AppLoader() {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDotCount((prevCount) => (prevCount < 3 ? prevCount + 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Function to generate loading text with dynamic dots
  const generateLoadingText = () => {
    const dots = ".".repeat(dotCount);
    return `Eventer${dots}`;
  };

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        backgroundColor: "#040714",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/images/eventerLogo.jfif"
        alt="Eventer-Logo"
        style={{
          borderRadius: "100%",
          height: 250,
          width: 250,
        }}
      />
      <Typography
        color={"white"}
        fontWeight={"bold"}
        mt={2}
        variant="h3"
        textAlign={"center"}
      >
        {generateLoadingText()}
      </Typography>
    </Container>
  );
}

export default AppLoader;
