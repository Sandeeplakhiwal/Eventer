import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  useEffect(() => {
    document.title = "Signup - Eventer";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Signup to Eventer with your credentials to access exclusive event management services.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);
  return (
    <Container maxWidth={"xs"}>
      <Box textAlign={"center"} mt={2}>
        <img
          src="/images/eventerLogo.jfif"
          alt="login"
          style={{ height: 120, width: 120, borderRadius: 100 }}
        />
        <Typography
          variant="h5"
          gutterBottom
          textTransform={"uppercase"}
          //   fontWeight={"bold"}
          color={"blueviolet"}
          fontFamily={"serif"}
        >
          Signup to Eventer
        </Typography>
        <form>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
            required
            size={"small"}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
            size={"small"}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            required
            size={"small"}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            style={{ marginTop: "1rem" }}
          >
            Signup
          </Button>
        </form>
      </Box>
      <Typography variant={"subtitle2"} textAlign={"center"} marginTop={3}>
        Already have an account? <Link to={"/login"}>Login</Link> here
      </Typography>
    </Container>
  );
}

export default RegisterPage;
