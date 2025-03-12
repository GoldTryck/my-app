import { Box } from "@mui/material";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (
      <>
        <Box className="container">
          <Navbar />
          <Box className="content" sx={{ margin: 2, padding: 2, flex: 1 }}>
            {children}
          </Box>
        </Box>
        <Box className="footer" sx={{ color: "gray", textAlign: "center", padding: 1 }}>
          <p>&copy; 2025 React</p>
        </Box>
      </>
    );
};

export default Layout;