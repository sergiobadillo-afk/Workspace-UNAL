
import { Router } from "express"

const router = Router()

const hora = new Date().toLocaleTimeString('es-CO')

// Ruta principal (Home)
router.get("/", (req, res) => res.render("index.ejs", { etiqueta: 'Mi primer sitio web con nodeJS', hora: hora }))

// Ruta Sobre Nosotros
router.get("/sobre_nosotros", (req, res) => res.render("sobre_nosotros.ejs", { etiqueta: 'como conduzo' }))

// Ruta Contactos
router.get("/contactos", (req, res) => res.render("contactos.ejs", { etiqueta: 'Pagina de contactos empresariales' }))

// Ruta Menú
router.get("/menu", (req, res) => res.render("menu.ejs", { etiqueta: 'menu empresarial' }))

// Ruta GET Login
router.get("/login", (req, res) => {
    res.render("login.ejs", { etiqueta: 'Vista de inicio de sesión', mensaje: null })
})

// Ruta POST Login
router.post("/login", (req, res) => {
    const { usuario, contrasena } = req.body
    if (usuario === "admin" && contrasena === "1234") {
        return res.redirect("/menu")
    }
    return res.render("login.ejs", { etiqueta: 'Vista de inicio de sesión', mensaje: 'Usuario o contraseña incorrectos' })
})

// Botón crear usuario
router.get("/crear_usuario", (req, res) => {
    res.send("Aqui se mostrara el formulario para crear un nuevo usuario")
})

// Restablecer contraseña
router.get("/restablecer_contrasena", (req, res) => {
    res.send("Aqui vista para enviar el correo de recuperacion de contraseña")
})

export default router
