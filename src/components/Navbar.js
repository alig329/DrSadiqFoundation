import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isAboutOpen = Boolean(aboutAnchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleAboutOpen = (event) => setAboutAnchorEl(event.currentTarget);
  const handleAboutClose = () => setAboutAnchorEl(null);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Success Stories", to: "/stories" },
    { label: "Certificates", to: "/certificates" },
    { label: "Contact Us", to: "/contact" },
    { label: "Donate", to: "/donate", style: { backgroundColor: "#FFD15C", color: "#fff", borderRadius: "6px" } },
    { label: "Become a Volunteer", to: "/volunteer", style: { backgroundColor: "#FFAA5C", color: "#fff", borderRadius: "6px" } },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFFFFF", boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", px: { xs: 2, md: 6 } }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://i.ibb.co/fVFDBYsh/dsfLogo.webp"
              alt="Dr. Sadiq Foundation"
              style={{
                width: "200px",
                height: "50px",
                objectFit: "contain",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
          {menuItems.slice(0, 5).map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.to}
              sx={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
                px: "16px",
                py: "8px",
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                ...item.style,
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* About Us Dropdown */}
          <Button
            onMouseEnter={handleAboutOpen}
            sx={{
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "500",
              px: "16px",
              py: "8px",
              textTransform: "none",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            About Us
          </Button>
          <Menu anchorEl={aboutAnchorEl}
            open={isAboutOpen}
            onMouseLeave={handleAboutClose}
            MenuListProps={{
              onMouseLeave: handleAboutClose,
            }}>
            <MenuItem component={Link} to="/about" onClick={handleAboutClose}>Vision/Mission</MenuItem>
            <MenuItem component={Link} to="/history" onClick={handleAboutClose}>History</MenuItem>
            <MenuItem component={Link} to="/trustees" onClick={handleAboutClose}>Trustees</MenuItem>
            <MenuItem component={Link} to="/team" onClick={handleAboutClose}>Our Team</MenuItem>
          </Menu>

          {menuItems.slice(5).map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.to}
              sx={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
                px: "16px",
                py: "8px",
                textTransform: "none",
                ...item.style,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            edge="start"
            aria-label="menu"
            onMouseEnter={handleMenuOpen}
            sx={{ color: "#000" }} // Ensures visibility
          >
            <MenuIcon sx={{ fontSize: "28px" }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                component={Link}
                to={item.to}
                onClick={handleMenuClose}
                sx={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "500", ...item.style }}
              >
                {item.label}
              </MenuItem>
            ))}
            <MenuItem disabled sx={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "600" }}>About Us</MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleAboutClose}>Vision/Mission</MenuItem>
            <MenuItem component={Link} to="/history" onClick={handleMenuClose}>History</MenuItem>
            <MenuItem component={Link} to="/trustees" onClick={handleAboutClose}>Trustees</MenuItem>
            <MenuItem component={Link} to="/team" onClick={handleMenuClose}>Our Team</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;