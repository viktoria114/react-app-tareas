import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActualTheme } from "../../services/theme";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/dashboard"); // Redirige al usuario al dashboard
    } else {
      setError("Credenciales incorrectas. Intenta nuevamente.");
    }
  };

  return (
    <ThemeProvider theme={ActualTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: ActualTheme.palette.primary.main,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: ActualTheme.palette.secondary.main,
            borderRadius: "10px",
            boxShadow: "7px 13px 37px rgb(78, 49, 69)",
            textAlign: "center",
            padding: 2,
            marginBottom: 2,
          }}
        >
          <Typography variant="h4" component="h1">
            To-do List App
          </Typography>
        </Box>

        <Container
          maxWidth="xs"
          sx={{
            backgroundColor: ActualTheme.palette.secondary.main,
            borderRadius: "10px",
            boxShadow: "7px 13px 37px rgb(78, 49, 69)",
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              justifySelf={"center"}
            >
              Inicio de sesión
            </Typography>
          </Box>
          <form>
            <TextField
              fullWidth
              label="Nombre de usuario"
              variant="standard"
              margin="normal"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="standard"
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2" mt={2}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, borderRadius: "25px", height: "50px" }}
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </form>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
