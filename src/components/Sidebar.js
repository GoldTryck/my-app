import { Button, colors, List } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import { Drawer } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box className="sidebar">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: "white" }} />
      </Button>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: colors.purple[600],
            verticalAlign: "middle",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          },
        }}
      >
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon
              sx={{ display: "flex", alignItems: "center", minWidth: 40 }}
            >
              <HomeIcon
                sx={{ verticalAlign: "middle", color: colors.grey[50] }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{
                marginLeft: 1,
                lineHeight: "normal",
                color: colors.grey[50],
              }}
            />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/about"
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: 40,
                color: colors.grey[50],
              }}
            >
              <InfoIcon sx={{ verticalAlign: "middle" }} />
            </ListItemIcon>
            <ListItemText
              primary="About"
              sx={{
                marginLeft: 1,
                lineHeight: "normal",
                color: colors.grey[50],
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;