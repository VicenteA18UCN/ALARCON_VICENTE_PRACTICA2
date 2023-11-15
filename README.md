# Instalación Backend

Para la Instalación del proyecto se debe de tener instalado:

- [Composer](https://getcomposer.org/)
- [Xampp](https://www.apachefriends.org/es/index.html)
- [MySQL Workbench](https://dev.mysql.com/downloads/mysql/)

Primero clonar el repositorio con el comando:

```bash
    git clone https://github.com/VicenteA18UCN/ALARCON_VICENTE_PRACTICA2.git
```

**Importante:**
Abrir el proyecto en el Visual Studio Code, copiar el _".env.example"_ y pegarlo en el proyecto. Por último cambiarle el nombre a _".env"_.

Una vez hecho eso, proceder a abrir la consola y ejecutar los siguientes comandos en orden:

```bash
    cd backend
    composer install
    php artisan key:generate
```

# Bases de datos

Para hacer las migraciones correspondientes y además utilizar los seeders primero es muy importante cambiar los siguientes parametros en el .env:

```bash
    DB_DATABASE="nombre de la base de datos"
    DB_USERNAME=root
    DB_PASSWORD=contraseña"
```

Finalmente en la consola ejecutan el siguiente comando para migrar la base de datos junto con las semillas:

```bash
    php artisan migrate --seed
```

Y para ejectura el proyecto:

```bash
   php artisan serve
```

# Instalación Frontend

Para la instalación del proyecto se necesita:

- [Node.js](https://nodejs.org/es) (Versión recomendada en la página)

Abrir otra consola de comandos y ejecutar los siguientes comandos:

    ```bash
        cd frontend
        npm install
        npm start
    ```
