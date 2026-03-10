Proyecto CERO de practicas en CORNER ESTUDIOS

mentoria - TUTOR JACK
nombre de proyecto - Taskflow2 o Tienda Orkshop

Contenidos - 
Construye una aplicación de tareas llamada TaskFlow que permita crear, completar, eliminar y filtrar tareas. La aplicación debe guardar los datos en LocalStorage, mostrar estadísticas básicas y funcionar correctamente en móvil y escritorio. Configura el proyecto con Git y GitHub, crea la interfaz con HTML y CSS, implementa la lógica con JavaScript, mejora el diseño con Tailwind y publica la aplicación en Vercel siguiendo los pasos indicados.

Paso a paso
1
Configurar el entorno de desarrollo
Instala VS Code y Git en tu ordenador
Configura Git con tu user.name y user.email
Crea una cuenta en GitHub si aún no la tienes
Crea un repositorio privado llamado bootcamp-project
Clona el repositorio en tu máquina local
Crea un archivo README.md con una breve descripción del proyecto
Realiza tu primer commit y súbelo a GitHub
Añade como colaboradores a @corner-estudios y @elbaronjack
Instala extensiones útiles en VS Code (Prettier, ESLint, Live Server)
Crea un archivo .gitignore para Node, el sistema operativo y el editor
Practica el flujo de Git creando una rama feature/setup, haciendo un cambio y fusionándola con main

2
Planificar la aplicación
Diseña la interfaz de TaskFlow antes de programar
Haz un pequeño wireframe en papel o en una herramienta como Figma o Excalidraw
Define las secciones principales de la aplicación: cabecera, lista de tareas, formulario y panel de estadísticas
Define qué acciones podrá hacer el usuario: añadir tareas, marcar completadas, eliminar tareas y ver estadísticas
Guarda una captura o imagen del diseño en docs/design dentro del repositorio
Escribe en el README una breve explicación del diseño de la app

3
Crear la estructura HTML
Crea el archivo index.html
Define la estructura usando HTML semántico (header, main, aside, footer)
Añade un título principal de la aplicación
Crea un formulario para añadir nuevas tareas
Añade una lista donde se mostrarán las tareas
Crea un panel lateral para mostrar estadísticas (total, completadas y pendientes)
Define una plantilla (template) o estructura base para cada tarea
Asegúrate de que el formulario tenga etiquetas label correctamente asociadas
Comprueba que solo existe un h1 y que los encabezados siguen un orden lógico
Valida el HTML usando el validador del W3C

4
Diseñar el layout con CSS
Crea el archivo style.css
Define variables CSS en :root para colores, tipografía y espaciado
Aplica un reset CSS básico
Diseña la cabecera de la aplicación
Crea el layout principal usando Flexbox
Define un panel lateral con ancho fijo para las estadísticas
Diseña las tarjetas de tareas con borde, padding y sombra
Asegúrate de que la tipografía sea legible (mínimo 16px en inputs)
Añade estados hover y focus a botones e inputs

5
Hacer la aplicación responsive
Añade media queries para pantallas pequeñas
Haz que el layout cambie correctamente en móvil
Mueve el panel de estadísticas debajo del contenido principal en pantallas pequeñas
Haz que el formulario se adapte bien a pantallas estrechas
Prueba la aplicación en diferentes tamaños de pantalla usando las herramientas de desarrollo del navegador

6
Implementar la lógica con JavaScript
Crea el archivo app.js
Define la estructura de una tarea como un objeto con id, title, completed y createdAt
Implementa la funcionalidad para añadir nuevas tareas
Renderiza las tareas en el DOM
Permite marcar tareas como completadas
Permite eliminar tareas
Actualiza las estadísticas cuando cambien las tareas
Evita repetir código creando funciones reutilizables

7
Persistir datos con LocalStorage
Guarda las tareas en LocalStorage usando JSON.stringify
Recupera las tareas cuando se carga la página usando JSON.parse
Maneja correctamente el caso en que no haya datos guardados
Asegúrate de que los cambios en las tareas se guarden automáticamente
Comprueba que al recargar la página los datos siguen ahí

8
Añadir funcionalidades extra
Implementa un filtro para ver tareas: todas, pendientes y completadas
Añade una búsqueda por texto en las tareas
Permite editar el título de una tarea existente
Añade un botón para marcar todas las tareas como completadas
Añade un botón para borrar todas las tareas completadas

9
Migrar estilos a Tailwind
Instala Tailwind CSS mediante CDN o CLI
Configura el archivo tailwind.config.js si usas CLI
Sustituye gradualmente el CSS personalizado por clases de Tailwind
Implementa modo oscuro usando clases dark:
Añade un botón que permita activar o desactivar el modo oscuro
Guarda la preferencia del usuario en LocalStorage

10
Testing manual de la aplicación
Prueba la app con la lista vacía
Intenta añadir una tarea sin título
Añade una tarea con un título muy largo
Marca varias tareas como completadas
Elimina varias tareas
Recarga la página para comprobar que los datos persisten
Documenta los resultados de las pruebas en el README

11
Accesibilidad básica
Comprueba que toda la aplicación se puede usar con teclado
Asegúrate de que los botones tengan texto o aria-label
Comprueba el contraste de colores
Verifica que el foco sea visible al navegar con Tab

12
Desplegar la aplicación
Conecta el repositorio de GitHub con Vercel
Importa el proyecto desde Vercel
Comprueba que la aplicación funciona correctamente en producción
Haz un cambio en el proyecto y súbelo a GitHub
Comprueba que Vercel redespliega automáticamente
Añade la URL pública de la aplicación en el README
