import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} coderage.io
      </Typography>
    </Box>
  );
};

export default Footer;
