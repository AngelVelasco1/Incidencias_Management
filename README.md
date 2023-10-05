# Incidencias Managment

Este proyecto tiene como objetivo desarrollar un sistema de administración de un zoologico usando temas tales como:

- Consultas MongoDb 
- Autenticacion a traves de Discord
-Sesion de usuarios
- Validacion de colecciones
- Validacion con DTO
-CRUD Funcional
- Context, Props, etc... en React
- Diseño responsive
- Animaciones y transiciones con framer motion
- Y mas

## Diagrama MER
![](./src/assets/diagram.png)

## Funcionalidades principales
1. Sistemas de autenticacion con discord
    - Autenticar al usuario mediante la API de Discord para obtener información del perfil del usuario.
    - Guardar los datos obtenidos por el sistema de autenticación (token, id_usuario).
    - Si el usuario no existe en el servidor se creara dentro del mismo
2. Gestion de Incidencias
    -   **Añadir Incidencias:** Permite a los usuarios añadir incidencias dinamicamente
    - **Eliminar Incidencias:** Elimina una incidencia seleccionada por el usuario
    - **Actualizar Incidencias** Actualiza las propiedades de una incidencia seleccionada por el usuario
    - **Filtrar Incidencias** Podras filtrar incidencias por el lugar, realzaciando una busqueda mas facil

    

## Tecnologías utilizadas

El proyecto  utilizará las siguientes tecnologías:

- Lenguaje de programación: [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- Framework Backend: [Node.js](https://nodejs.org/)
- Framewor Frontend: [React](https://react.dev/)
- Motor de Estilos: [Next Ui](https://nextui.org)
- Animaciones: [Framer Motion](https://www.framer.com/motion/)
- Base de datos: [MongoDB](https://www.mongodb.com/es)
- Framework: [Express.js](https://expressjs.com/)

## Instalacion


1. Clona este repositorio en tu máquina en tu carpeta referente dentro del cluster
   ```shell
   git clone https://github.com/AngelVelasco1/Incidencias_Management.git
   ```

2. Instala dependencias

   ```shell
    npm i
   ```

3. Convierte el archivo .env.example a .env
    ```shell
    mv .env.example .env
   ```
2. Inicia el servidor mediante el comando `npm run start`.
 
3. Inicia el servidor frontend mediante el comando `npm run dev`

4. Una vez ambos servidores esten en funcionamiento, la aplicacion funcionara en el puerto que vite especifique :)

