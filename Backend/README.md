# Avanti | Backend | Guía para instalación local

> [!NOTE]
> Si simplemente quieres probar el proyecto como una demo rápida, tienes nuestro [despliegue online de este proyecto frontend](https://avanti-dpn0.onrender.com/)

<details>
  <summary>Instalación usando git clone 🔧</summary>

### Cómo clonar el proyecto

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

1. **Clonar el repositorio**    
    Ejecuta el siguiente comando en tu terminal, reemplazando `URL_DEL_PROYECTO` por el enlace del proyecto:

```sh
git clone URL_DEL_PROYECTO
```

2. **OPCIONAL - Cambiar de rama**   
    Ejecuta el siguiente comando en tu terminal, reemplazando `RAMA` por la rama a utilizar:

```sh
git checkout RAMA
```

### Cómo instalar las dependencias del proyecto

1. Ejecuta el siguiente comando en tu terminal:

```sh
npm install
```

_Nota: Puedes utilizar otro package manager si así lo deseas; procura revisar las `Tecnologías principales` y también las `Librerías` para comprobar que son compatibles primero_

### Crear archivo `.env`

1. En la raíz del proyecto, crea un archivo llamado **.env**. Este archivo almacenará las variables de entorno utilizadas en el proyecto.
   
2. A continuación, define las variables de entorno necesarias para el proyecto. 

#### Ejemplo de archivo `.env`

Acomodar cada URL y puertos acorde a la configuración que se haya hecho al levantar el backend

```sh
MONGO_URI = "URI-de-Mongo-DB"
PORT = 3000
SECRET_KEY = <Clave_secreta_para_MongoDB>

CLOUDINARY_API_KEY = <API_KEY_para_Cloudinary>
CLOUDINARY_API_SECRET = <Clave_secreta_para_Cloudinary>
CLOUDINARY_CLOUD_NAME = <Nombre_para_conectar_con_URI_de_MongoDB>
```

### Iniciar servidor (en modo `dev`)

```sh
npm run dev
```
</details>

<details>
  <summary>Instalación descargando comprimido ZIP 🔧</summary>

## Instalación descargando comprimido ZIP 🔧

### Cómo descargar el proyecto

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

1. **Descargar el proyecto en formato ZIP** 
    Ir a “code” > download ZIP

2. **Descomprimir el archivo**

3. **OPCIONAL - Cambiar de rama**   
    Ejecuta el siguiente comando en tu terminal, reemplazando `RAMA` por la rama a utilizar:

```sh
git checkout RAMA
```

### Cómo instalar las dependencias del proyecto

1. En la carpeta donde se encuentra “package.json” ejecutar en terminal:

```sh
npm install
```

_Nota: Puedes utilizar otro package manager si así lo deseas; procura revisar las `Tecnologías principales` y también las `Librerías` para comprobar que son compatibles primero_

### Crear archivo `.env`

1. En la raíz del proyecto, crea un archivo llamado **.env**. Este archivo almacenará las variables de entorno utilizadas en el proyecto.
   
2. A continuación, define las variables de entorno necesarias para el proyecto. 

#### Ejemplo de archivo `.env`

Acomodar cada URL y puertos acorde a la configuración que se haya hecho al levantar el backend

```sh
MONGO_URI = "URI-de-Mongo-DB"
PORT = 3000
SECRET_KEY = <Clave_secreta_para_MongoDB>

CLOUDINARY_API_KEY = <API_KEY_para_Cloudinary>
CLOUDINARY_API_SECRET = <Clave_secreta_para_Cloudinary>
CLOUDINARY_CLOUD_NAME = <Nombre_para_conectar_con_URI_de_MongoDB>
```

### Iniciar servidor (en modo `dev`)

```sh
npm run dev
```
</details>

<details open>
<summary>Documentación de la API REST 📜</summary>

## Información General
- **Versión:** 1.0.0  
- **Host:** `localhost:4000`  
- **Base Path:** `/`  
- **Esquema:** `http`  

---

## Endpoints

### **Rutas Generales**
#### `GET /`
- **Descripción:** Endpoint base de la API.
- **Respuestas:**
  - `200 OK`: Respuesta exitosa.

---

### **Usuarios**
#### `GET /user/`
- **Descripción:** Obtiene la lista de usuarios.
- **Respuestas:**
  - `200 OK`: Respuesta exitosa.

#### `POST /user/register`
- **Descripción:** Registra un nuevo usuario.
- **Parámetros:**
  - **Body (JSON):**
    ```json
    {
      "name": "any",
      "email": "any",
      "password": "any"
    }
    ```
- **Respuestas:**
  - `201 Created`: Usuario creado exitosamente.
  - `400 Bad Request`: Error en la solicitud.
  - `409 Conflict`: El usuario ya existe.
  - `500 Internal Server Error`: Error en el servidor.

#### `POST /user/login`
- **Descripción:** Inicia sesión de un usuario.
- **Parámetros:**
  - **Body (JSON):**
    ```json
    {
      "email": "any",
      "password": "any"
    }
    ```
- **Respuestas:**
  - `400 Bad Request`: Datos incorrectos.
  - `401 Unauthorized`: Credenciales inválidas.
  - `404 Not Found`: Usuario no encontrado.
  - `500 Internal Server Error`: Error en el servidor.

#### `GET /user/logout`
- **Descripción:** Cierra sesión del usuario.
- **Respuestas:**
  - `200 OK`: Sesión cerrada correctamente.
  - `500 Internal Server Error`: Error en el servidor.

#### `GET /user/userProfile/{id}`
- **Descripción:** Obtiene el perfil de un usuario.
- **Parámetros:**
  - **Path:**
    - `id` (string) - ID del usuario.
- **Respuestas:**
  - `200 OK`: Perfil obtenido correctamente.
  - `400 Bad Request`: Error en la solicitud.
  - `404 Not Found`: Usuario no encontrado.
  - `500 Internal Server Error`: Error en el servidor.

#### `POST /user/userUpdate/{id}`
- **Descripción:** Actualiza información de un usuario.
- **Parámetros:**
  - **Path:**
    - `id` (string) - ID del usuario.
- **Respuestas:**
  - `200 OK`: Usuario actualizado correctamente.
  - `400 Bad Request`: Error en la solicitud.
  - `404 Not Found`: Usuario no encontrado.
  - `500 Internal Server Error`: Error en el servidor.

#### `GET /user/userDelete/{id}`
- **Descripción:** Elimina un usuario.
- **Parámetros:**
  - **Path:**
    - `id` (string) - ID del usuario.
- **Respuestas:**
  - `200 OK`: Usuario eliminado correctamente.
  - `400 Bad Request`: Error en la solicitud.
  - `404 Not Found`: Usuario no encontrado.
  - `500 Internal Server Error`: Error en el servidor.

---

### **Proyectos**
#### `GET /project/`
- **Descripción:** Obtiene la lista de proyectos.
- **Respuestas:**
  - `200 OK`: Respuesta exitosa.
  - `500 Internal Server Error`: Error en el servidor.

#### `GET /project/{id}`
- **Descripción:** Obtiene información de un proyecto específico.
- **Parámetros:**
  - **Path:**
    - `id` (string) - ID del proyecto.
- **Respuestas:**
  - `200 OK`: Proyecto encontrado.
  - `400 Bad Request`: Error en la solicitud.
  - `404 Not Found`: Proyecto no encontrado.
  - `500 Internal Server Error`: Error en el servidor.

#### `POST /project/create`
- **Descripción:** Crea un nuevo proyecto.
- **Parámetros:**
  - **Header:**
    - `authorization` (string) - Token de autenticación.
  - **Body (JSON):**
    ```json
    {
      "title": "any",
      "description": "any",
      "category": "any"
    }
    ```
- **Respuestas:**
  - `201 Created`: Proyecto creado exitosamente.
  - `400 Bad Request`: Error en la solicitud.
  - `401 Unauthorized`: No autorizado.
  - `500 Internal Server Error`: Error en el servidor.

#### `GET /project/delete/{id}`
- **Descripción:** Elimina un proyecto.
- **Parámetros:**
  - **Path:**
    - `id` (string) - ID del proyecto.
- **Respuestas:**
  - `200 OK`: Proyecto eliminado correctamente.
  - `400 Bad Request`: Error en la solicitud.
  - `404 Not Found`: Proyecto no encontrado.
  - `500 Internal Server Error`: Error en el servidor.

#### `POST /project/update/{id}`
- **Descripción:** Actualiza información de un proyecto.
- **Parámetros:**
  - **Path:**
    - `id` (string) - ID del proyecto.
  - **Body (JSON):**
    ```json
    {
      "title": "any",
      "description": "any",
      "category": "any"
    }
    ```
- **Respuestas:**
  - `200 OK`: Proyecto actualizado correctamente.
  - `400 Bad Request`: Error en la solicitud.
  - `404 Not Found`: Proyecto no encontrado.
  - `500 Internal Server Error`: Error en el servidor.

---

### **Comentarios**
#### `POST /comments/`
- **Descripción:** Crea un comentario en un proyecto.
- **Parámetros:**
  - **Header:**
    - `authorization` (string) - Token de autenticación.
  - **Body (JSON):**
    ```json
    {
      "text": "any",
      "project": "any"
    }
    ```
- **Respuestas:**
  - `201 Created`: Comentario creado exitosamente.
  - `401 Unauthorized`: No autorizado.
  - `500 Internal Server Error`: Error en el servidor.

#### `GET /comments/project/{projectId}`
- **Descripción:** Obtiene comentarios de un proyecto.
- **Parámetros:**
  - **Path:**
    - `projectId` (string) - ID del proyecto.
  - **Query:**
    - `authorName` (string) - Nombre del autor (opcional).
- **Respuestas:**
  - `200 OK`: Comentarios obtenidos correctamente.
  - `500 Internal Server Error`: Error en el servidor.

#### `DELETE /comments/{commentId}`
- **Descripción:** Elimina un comentario.
- **Parámetros:**
  - **Path:**
    - `commentId` (string) - ID del comentario.
  - **Header:**
    - `authorization` (string) - Token de autenticación.
- **Respuestas:**
  - `200 OK`: Comentario eliminado correctamente.
  - `401 Unauthorized`: No autorizado.
  - `500 Internal Server Error`: Error en el servidor.

#### `PATCH /comments/{commentId}/update`
- **Descripción:** Actualiza un comentario.
- **Parámetros:**
  - **Path:**
    - `commentId` (string) - ID del comentario.
  - **Header:**
    - `authorization` (string) - Token de autenticación.
  - **Body (JSON):**
    ```json
    {
      "text": "any"
    }
    ```
- **Respuestas:**
  - `200 OK`: Comentario actualizado correctamente.
  - `401 Unauthorized`: No autorizado.
  - `500 Internal Server Error`: Error en el servidor.

---

### **Contribuciones**
#### `POST /contributions/`
- **Descripción:** Realiza una contribución a un proyecto.
- **Parámetros:**
  - **Body (JSON):**
    ```json
    {
      "donator": "any",
      "project": "any",
      "paymentMethod": "any",
      "paymentAmount": "any"
    }
    ```
- **Respuestas:**
  - `201 Created`: Contribución registrada.
  - `500 Internal Server Error`: Error en el servidor.

#### `GET /contributions/project/{projectId}`
- **Descripción:** Obtiene las contribuciones de un proyecto.
- **Parámetros:**
  - **Path:**
    - `projectId` (string) - ID del proyecto.
- **Respuestas:**
  - `200 OK`: Contribuciones obtenidas correctamente.
  - `500 Internal Server Error`: Error en el servidor.

</details>
