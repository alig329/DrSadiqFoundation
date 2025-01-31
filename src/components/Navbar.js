import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "History", to: "/history" },
    { label: "Projects", to: "/projects" },
    { label: "Success Stories", to: "/stories" },
    { label: "Certificates", to: "/certificates" },
    { label: "Contact Us", to: "/contact" },
    { label: "Donate", to: "/donate", style: { backgroundColor: "#FFD15C" } },
    { label: "Become a Volunteer", to: "/volunteer", style: { backgroundColor: "#FFAA5C" } },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Typography variant="h6">
          <a href="/">
            <img src="/dsfLogo.JPG" alt="Company Logo" height="56.78px" />
          </a>
        </Typography>

        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 0,
            alignItems: "center",
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.to}
              sx={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                padding: "10px 20px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: item.style?.backgroundColor || "transparent",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(45deg, #027D40, #FFD15C)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: 1,
                },
                "&:hover::before": {
                  opacity: 0.2,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#027D40",
                  transition: "all 0.3s ease",
                  transform: "translateX(-50%)",
                },
                "&:hover::after": {
                  width: "100%",
                },
                ...item.style,
              }}
            >
              <span style={{ position: "relative", zIndex: 2 }}>{item.label}</span>
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            edge="start"
            color="#000000"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                component={Link}
                to={item.to}
                onClick={handleMenuClose}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: "500",
                  ...item.style,
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;