import { useState } from "react";
import { Snackbar, Alert, Slide, SlideProps } from "@mui/material";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export const OutOfServiceModal = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={7000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      TransitionComponent={SlideTransition}
    >
      <Alert
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          borderRadius: 10,
          padding: 20,
        }}
        onClose={handleClose}
        severity="info"
        sx={{ width: "100%" }}
      >
        <p className="text-center text-2xl text-blue-700">
          Nos encontramos actualmente fuera de servicio. Por favor, ponte en
          contacto con el equipo de soporte.
        </p>
      </Alert>
    </Snackbar>
  );
};
