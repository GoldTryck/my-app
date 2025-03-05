import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ background: '#f8ebf7', color: 'black' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Menú hamburguesa */}
                <IconButton edge="start" color="inherit">
                    <MenuIcon />
                </IconButton>

                {/* Espacio vacío que empuja los elementos hacia la derecha */}
                <div style={{ flexGrow: 1 }} />

                {/* Menú de acceso con texto y flecha */}
                <Button
                    color="inherit"
                    onClick={handleMenu}
                    endIcon={<ExpandMoreIcon />}
                    sx={{ textTransform: 'none', fontSize: '1rem' }}
                >
                    Acceso
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
                </Menu>

                {/* Botón de búsqueda */}
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

