const {Router} = require('express')
const commentRoutes = Router()

commentRoutes.post("/", handlePostComment);
commentRoutes.get("/", handleGetComment); //todos los comentarios de toda la pagina
commentRoutes.get("/:id", handleGetComment); //comentarios de un solo usuario
commentRoutes.put("/update/:id", handleputComment);// actualizar un comentario o editarlo, caso de borrarlo se hace un borrado logico(mandando por body true o false para habilitar o deshabilitar)

module.exports = commentRoutes