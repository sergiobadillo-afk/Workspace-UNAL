
import { Router } from "express";
const router = Router()

// Ruta POST para procesar el login
router.post("/api/login", (req, res) => {
    const { usuario, contrasena } = req.body;
    console.log("Usuario recibido:", usuario);
    console.log("Contraseña recibida:", contrasena);

    if (usuario === "admin" && contrasena === "12345") {
        res.redirect("/contactos"); // Redirige si las credenciales son correctas
    } else {
        res.send("Usuario y contrasena incorrectos"); // Mensaje de error
    }
});

export default router;
