import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

export const OutOfServiceModal = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <p className="text-blue-700 font-bold text-2xl text-center">
          Nos encontramos actualmente fuera de servicio
        </p>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <p className="text-lg text-center">
            Por favor, ponte en contacto con el equipo de soporte.
          </p>
        </DialogContentText>
      </DialogContent>
      <div className="flex justify-center pb-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded-3xl"
          onClick={handleClose}
        >
          Cerrar
        </button>
      </div>
    </Dialog>
  );
};
