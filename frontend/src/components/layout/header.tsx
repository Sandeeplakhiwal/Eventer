import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import * as PageRoutes from "../../constants/routes";

function Header() {
  return (
    <Box
      sx={{ bgcolor: "white" }}
      boxShadow={`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}
      maxWidth={"xl"}
      mx={"auto"}
      height={100}
      display={"flex"}
      alignItems={"center"}
      position={"relative"}
      flexDirection={"column"}
      justifyContent={"center"}
      minWidth={"375px"}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          marginRight={2}
        >
          <img
            src="/images/eventerLogo.jfif"
            alt="Eventer-logo"
            style={{ height: 50, width: 50, borderRadius: "100%" }}
          />
          <Typography
            variant={"h5"}
            fontFamily={"fantasy"}
            color={"orange"}
            fontWeight={500}
            fontSize={"2rem"}
            display={{ xs: "none", md: "block" }}
          >
            Eventer
          </Typography>
        </Typography>
        <Box
          height={"50%"}
          width={{ md: "30%", sm: "70%" }}
          mx={"auto"}
          display={{ xs: "none", md: "flex" }}
          alignItems={"center"}
          borderRadius={10}
          border={"1px solid GrayText"}
          px={2}
          sx={{
            ":hover": {
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            },
          }}
          flex={1}
        >
          <SearchIcon />
          <input
            type="text"
            name="Search"
            id="search"
            style={{
              height: "90%",
              width: "60%",
              borderRadius: "40px",
              padding: "0 10px",
              outline: "none",
              border: "none",
              fontWeight: "500",
              fontSize: "16px",
            }}
            placeholder="Search"
          />
          <Box
            width={"40%"}
            height={"95%"}
            borderLeft={"1px solid gray"}
            display={"flex"}
            alignItems={"center"}
            paddingLeft={2}
          >
            <LocationOnIcon sx={{ color: "gray" }} />
            <Typography variant={"subtitle2"} color={"GrayText"}>
              Jaipur
            </Typography>
          </Box>
        </Box>
        <Box display={{ md: "none", xs: "flex" }} flexDirection={"row"}>
          <Button
            sx={{
              textTransform: "capitalize",
              borderRadius: 5,
              px: 2,
              py: 1,
              color: "black",
            }}
          >
            Find events
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
              borderRadius: 5,
              px: 2,
              py: 1,
              color: "black",
            }}
          >
            My events
          </Button>
        </Box>
        <Box display={{ xs: "none", md: "flex" }}>
          <Button
            sx={{
              textTransform: "capitalize",
              borderRadius: 5,
              px: 2,
              py: 1,
              color: "black",
            }}
          >
            Find events
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
              borderRadius: 5,
              px: 2,
              py: 1,
              color: "black",
            }}
          >
            Create events
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
              borderRadius: 5,
              px: 2,
              py: 1,
              color: "black",
            }}
            endIcon={<KeyboardArrowDownIcon />}
            size={"small"}
          >
            Help center
          </Button>
          <Link to={PageRoutes.LOGIN}>
            <Button
              sx={{
                textTransform: "capitalize",
                borderRadius: 5,
                px: 2,
                py: 1,
                color: "black",
              }}
            >
              Log In
            </Button>
          </Link>
          <Link to={PageRoutes.REGISTER}>
            <Button
              sx={{
                textTransform: "capitalize",
                borderRadius: 5,
                px: 2,
                py: 1,
                color: "black",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Box>
        <IconButton sx={{ display: { md: "none", sm: "block" } }}>
          <MenuIcon fontSize="medium" />
        </IconButton>
      </Container>
    </Box>
  );
}

export default Header;
