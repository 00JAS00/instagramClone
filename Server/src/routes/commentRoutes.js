const {Router} = require('express')
const commentRoutes = Router()

commentRoutes.post("/", postCommentRoutes);
commentRoutes.get("/", getCommentRoutes); //todos los comentarios de toda la pagina
commentRoutes.get("/:id", getCommentByIdRoutes); //comentarios de un solo usuario
commentRoutes.put("/update/:id", putCommentRoutes);// actualizar un comentario o editarlo, caso de borrarlo se hace un borrado logico(mandando por body true o false para habilitar o deshabilitar)

module.exports = commentRoutes