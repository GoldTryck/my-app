import { AppBar, Toolbar, IconButton, colors } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
      <AppBar position="static" sx={{ backgroundColor: colors.purple[600] }}>
        {/*Uso de space-between para enviar los elementos a los bordes*/}
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Sidebar*/}
          <Sidebar />

          {/* Boton de busqueda*/}
          <IconButton edge="start">
            <SearchIcon style={{color:"white"}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
    }

export default Navbar;