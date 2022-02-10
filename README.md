*TODO:*

  **URGENTE**
    Agregar bcrypt al server y dehashear las contraseñas de la database

  *ROLES*: 

    4 Owner:
        > agregar/eliminar administradores.
    3 Administrador:
        > eliminar usuarios
        > buscar usuario por username y asignarle o quitarle el rango editor
        > eliminar películas
    2 Editor:
        > agregar/eliminar películas.
        > eliminar comentarios, reseñas y puntuaciones.
    1 Usuario:
        > crear comentarios, reseñas y puntuar películas.
        > editar sus reseñas, comentarios y puntuaciones.

  *Contexto global*:
    = username, rango, id
    > Dashboard dependiente del contexto (username para el botón, rango para el contenido)
    > Contenido asignado al id del usuario en el dashboard

  *Sistema de registro*

Hecho:
  Contexto para el usuario