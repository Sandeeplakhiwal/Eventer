import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function EdsSection() {
  return (
    <Box
      maxWidth={"xl"}
      minWidth={"375px"}
      mx={"auto"}
      display={"flex"}
      px={2}
      alignItems={"center"}
    >
      <Typography variant={"h5"} fontWeight={"bold"} color={"GrayText"}>
        Browsing Events in{" "}
      </Typography>
      <IconButton color="primary">
        <KeyboardArrowDownIcon />
      </IconButton>
      <Typography fontWeight={"bold"} variant={"subtitle1"} color={"primary"}>
        Jaipur
      </Typography>
    </Box>
  );
}

export default EdsSection;
