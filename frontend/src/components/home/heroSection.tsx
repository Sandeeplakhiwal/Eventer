import { Box, Button, Typography } from "@mui/material";

function HeroSection() {
  return (
    <Box
      height={"60vh"}
      maxWidth={"xl"}
      minWidth={"375px"}
      mx={"auto"}
      position={"relative"}
      textAlign={"center"}
      display={"flex"}
      justifyContent={"center"}
    >
      <img
        src="/images/heroSectionImg.jpg"
        alt=""
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
      />
      <Typography
        position={"absolute"}
        bottom={0}
        textTransform={"capitalize"}
        // variant={"h1"}
        fontSize={{ sm: "6rem", xs: "4rem" }}
        color={"white"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        You&apos;ve Got Plans
      </Typography>
      <Button
        variant={"contained"}
        sx={{
          position: "absolute",
          left: 20,
          bottom: { xs: 200, md: 20 },
          px: 3,
          py: 1,
          bgcolor: "orange",
          ":hover": {
            bgcolor: "orangered",
          },
          //   fontSize: "0.6rem",
        }}
        size="small"
      >
        Find your next event
      </Button>
    </Box>
  );
}

export default HeroSection;
