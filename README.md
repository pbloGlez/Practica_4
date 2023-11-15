# Practica_4
API REST (Express, Deno, TypeScript). Cuarta práctica de Arquitectura y Programación en sistemas de Internet
1. [Documentación API](#documentacion-api)
2. [Enunciado](#enunciado)
____________________________________________________________
## DOCUMENTACION API
Esta es una api de Dr.Who diseñada para gestión y almacenamiento de TARDIS. En esta api puedes registrar TARDIS con dimensiones, 
planetas, personas, el actual camuflaje de la TARDIS, el número de regeneración del Time Lord y el año en que se encuentra actualmente.
¡Espero que la disfrutes!

---------------------------------------------------
## Enunciado

Doctor Who cumple 60 años y los episodios especiales están a la vuelta de esquina, así que vamos a hacer un API REST para ayudar a la TARDIS (Time And Relative Dimension In Space) organizarse ante la nueva reiterada llegada de David Tennant.

La Tardis guarda los siguientes datos en sus memorias Gallifreyanas según lo que ha visitado en sus diferentes viajes.
- Dimensiones  --> Con los planetas visitados en la misma
- Planetas --> Con las personas relevantes a las experiencias en el mismo
- Personas
- Actual camuflaje de la TARDIS
- Número de regeneración del Time Lord que la use
- Año en el que se encuentra actualmente
- Las dimensiones, planetas y personas se deberán guardar en diferentes colecciones de mongo atlas y ser relacionadas por id's entre si llegando a una sola final en la que se guarde cada TARDIS.
- El api deberá de poseer llamadas para ver, crear y modificar TARDISs además de todos los elementos de su interior, cada llamada tendrá que ser del método requerido por su funcionalidad.


