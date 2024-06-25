import { Drawer, IconButton, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface MenuDrawerProps {
  open: boolean;
  toggleMenuDrawer: () => void;
}

export const MenuDrawer = ({ open, toggleMenuDrawer }: MenuDrawerProps) => {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper sx={{ backgroundColor: "black", height: "100%", borderRadius: 0 }}>
        <div className="items-start p-3">
          <IconButton onClick={toggleMenuDrawer}>
            <ArrowBackIcon className="text-white" />
          </IconButton>
        </div>
        <div className="flex flex-col items-center pl-16 pr-16">
          <a className="text-white hover:text-red-700 text-xl m-6" href="#home">
            Inicio
          </a>
          <a
            className="text-white hover:text-red-700 text-xl m-6"
            href="#about"
          >
            Nosotros
          </a>
          <a
            className="text-white hover:text-red-700 text-xl m-6"
            href="#products"
          >
            Productos
          </a>
        </div>
      </Paper>
    </Drawer>
  );
};
