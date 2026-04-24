# PracticaRouting

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Modulo: Galeria de Fotos Interactiva (Agencia Digital)
Se ha implementado una nueva funcionalidad de galeria dinamica para cumplir con los requerimientos de la agencia digital. Esta seccion demuestra el manejo de arreglos de objetos y persistencia de datos durante la sesion del usuario.

Caracteristicas de la Galeria:
Visualizacion en Grid: Estructura de cuadricula dinamica para la visualizacion de imagenes.

Gestion de Datos (CRUD): Formulario funcional para añadir nuevas fotografias mediante titulo y URL, con capacidad de eliminacion instantanea.

Interaccion Dinamica: Sistema de Me gusta (likes) individual por cada fotografia utilizando vinculacion de eventos.

Logica Acumulativa: Contador global que calcula en tiempo real el total de likes acumulados en toda la galeria.

Persistencia en Sesion: Gestion de estado local mediante arreglos de TypeScript sin necesidad de base de datos externa.

Componentes y Logica Utilizada:
Directivas: Uso de *ngFor para el renderizado de la lista y [(ngModel)] para el manejo de formularios reactivos.

Interfaces: Definicion de modelos de datos estrictos para asegurar la integridad de cada fotografia.

Estilos: Diseño responsivo con efectos visuales modernos para una experiencia de usuario profesional.

<img width="1231" height="1091" alt="image" src="https://github.com/user-attachments/assets/4f58eada-65df-4c78-8c0e-14c1bfcfe86f" />
