import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import indexRoutes from "./routes/index.js"
import authRoutes from "./routes/autenticacion.js"

const app = express()

// Ruta absoluta para la carpeta views
const __dirname = dirname(fileURLToPath(import.meta.url))

// Configuración del motor de plantillas EJS
app.set("views", join(__dirname, "views"))
app.set("view engine", "ejs")

// Middlewares para procesar formularios POST y archivos estáticos
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(join(__dirname, "public")))

// Rutas
app.use(indexRoutes)
app.use(authRoutes)

// Iniciar servidor
const PORT = 5000
app.listen(PORT, () => {
    console.log("El servidor esta escuchando en el puerto", PORT)
})
