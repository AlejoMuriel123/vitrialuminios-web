import { Drawer, IconButton, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface MenuDrawerProps {
  open: boolean;
  toggleMenuDrawer: () => void;
}

export const MenuDrawer = ({ open, toggleMenuDrawer }: MenuDrawerProps) => {
  const { width } = document.body.getBoundingClientRect();

  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper
        sx={{
          backgroundColor: "rgb(31, 41, 55)",
          height: "100%",
          width: width / 1.5,
          borderRadius: 0,
        }}
      >
        <div className="items-start p-3">
          <IconButton onClick={toggleMenuDrawer}>
            <ArrowBackIcon className="text-white" />
          </IconButton>
        </div>
        <div className="flex flex-col items-center pl-16 pr-16">
          <a
            className="text-white hover:text-blue-600 text-xl m-6"
            href="#home"
          >
            Inicio
          </a>
          <a
            className="text-white hover:text-blue-600 text-xl m-6"
            href="#gallery"
          >
            Galería
          </a>
          <a
            className="text-white hover:text-blue-600 text-xl m-6"
            href="#about"
          >
            Nosotros
          </a>
        </div>
      </Paper>
    </Drawer>
  );
};
