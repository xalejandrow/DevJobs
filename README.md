Sección 28: devJobs - Plataforma para Encontrar y publicar trabajos para desarrolladores

Para iniciar el Proyecto:

    npm init
    npm install --save express express-handlebars
    
Para no tener que reiniciar el servidor y se reinicie solo para tomar los cambios
    npm install --save-dev nodemon

Sección 31: devJobs - Configurando la Base de Datos

    Creamos una cuenta en Mongo Atlas y creamos una BD mongo en un Cluster
    https://www.mongodb.com/es/cloud/atlas

Instalamos las dependencias para trabajar en el proyecto

    npm install --save dotenv connect-mongo mongoose shortid express-session cookie-parse slug

Capítulo 121 Agregar editor WYSIWYG
    Trix:
    https://github.com/basecamp/trix

Capítulo 123 Agregar Webpack a la Aplicación

    npm install --save-dev @babel/core @babel/preset-env babel-loader webpack webpack-cli
    npm install --save concurrently

Capítulo 156 Detectando cuando el Usuario presiona el botón eliminar

    npm install --save axios sweetalert2


Sección 40: devJobs - Subir Imagenes de Perfil

Capítulo 159. Introducción a Multer

    npm install --save multer
    
Sección 42: devJobs - Agregar funcionalidad a Olvide mi Password y Enviar Email 

Capítulo 174. Configurando NodeMailer

    npm install --save nodemailer nodemailer-express-handlebars
    Servicio de Email:
    https://mailtrap.io
    
Sección 43: Últimos Ajustes y Deployment

Capítulo 179 Manejo de Errores

    npm install --save http-errors
    lista de errores y uso:
    https://www.npmjs.com/package/http-errors


Capítulo 181 Deployment del Proyecto en Heroku

    heroku create --remote production
    heroku config:set DATABASE="mongodb+srv://root:<PASSWORD>@cluster0.xsl8t.mongodb.net/devjobs"
    heroku config:set SECRETO=<clave_secreto>
    heroku config:set KEY=<llave_secreta>

    Subir a Heroku:
    git push production master

    url en heroku:
    https://whispering-hamlet-82809.herokuapp.com/


NOTA:

        // Dejar que Heroku asigne el puerto
        const host = '0.0.0.0';
        const port = process.env.PORT;

        // Para localhost poner esta línea en index.js
        app.listen(process.env.PUERTO);

        // Para Heroku poner esta línea en index.js
        // app.listen(port, host, () => {
        //     console.log('El servidor esta funcionando');
        // });
