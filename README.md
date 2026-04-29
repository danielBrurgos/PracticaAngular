Manual de Proyecto: Practica de Enrutamiento y Componentes en Angular
Este proyecto fue generado con Angular CLI version 21.2.7.

Servidor de Desarrollo
Para iniciar el servidor local, ejecuta:

Bash
npx ng serve
Una vez que el servidor este corriendo, abre tu navegador en http://localhost:4200/. La aplicacion se recargara automaticamente cada vez que modifiques los archivos fuente.

Detalle de Practicas Realizadas
1. Sistema de Rutas y Navegacion (SPA)
Se implemento una Single Page Application (SPA) utilizando Angular Router. Esto permite la navegacion instantanea entre las secciones de Inicio, Servicios, Contacto y Nosotros sin recargar el navegador.

2. Componentes Reutilizables (Tarjetas de Presentacion)
Se desarrollo un componente modular llamado Tarjeta.

Decorador @Input: Permite recibir datos de forma dinamica (nombre y edad) desde un componente padre.

Manejo de Eventos: Cada tarjeta posee su propio contador de likes independiente mediante vinculacion de eventos (Event Binding).

Estilos Profesionales: Se aplico un diseño moderno con efectos de sombra y transiciones de escala al interactuar.

<img width="1203" height="734" alt="image" src="https://github.com/user-attachments/assets/127472d1-cb59-4ad1-b590-2cb076be2ed5" />



3. Galeria de Fotos Interactiva (Ultima Practica)
Como requerimiento para una agencia digital, se añadio una seccion de galeria dinamica que permite la interaccion avanzada con el usuario.

Funcionalidades implementadas:

Visualizacion en Grid: Diseno organizado en cuadricula responsiva para las imagenes.

Formulario de Registro: Capacidad de agregar nuevas fotos en tiempo real mediante URL y titulo usando ngModel.

Sistema de Likes: Funcion interactiva para dar Me gusta a cada fotografia individualmente.

Eliminacion de Registros: Opcion para borrar fotos del arreglo de forma instantanea.

Contador Global: Logica programada para mostrar la suma total de todos los likes recibidos en la galeria completa.

Persistencia en Sesion: Los datos se mantienen activos durante la navegacion mediante el manejo de arreglos en memoria de TypeScript.


<img width="1237" height="798" alt="image" src="https://github.com/user-attachments/assets/4c722dd9-ef02-4808-aab2-42242c82e8f7" />


Instrucciones de Ejecucion
Instalar dependencias: ```bash
npm install

Correr aplicacion: ```bash
npx ng serve
