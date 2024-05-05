# Rest Project + TypeScript

Este es un gestor de proyectos construido con TypeScript y Node.js, que sigue los principios de arquitectura limpia, Domain Driven Design (DDD) y el patrón Repository. Permite a los usuarios administrar proyectos, agregar tareas, cambiar el estado de cada tarea, llevar un registro de cambios, agregar notas, gestionar colaboradores e implementar medidas de seguridad como tokens y autenticación con hash de una sola vía. Además, incluye funcionalidades como el envío de correos electrónicos para notificaciones.

## Instalación

1. Clonar .env.template a .env y configurar las variables de entorno
2. Ejecutar `npm install` para instalar las dependencias
3. En caso de necesitar base de datos, configurar el docker-compose.yml y ejecutar `docker-compose up -d` para levantar los servicios deseados o por el contrario usar la conexión de mongo atlas.
4. Ejecutar `npm run dev` para levantar el proyecto en modo desarrollo

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit de ellos (git commit -am 'Añadir nueva funcionalidad').
4. Haz push de tu rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con el equipo de desarrollo en correo electrónico.
