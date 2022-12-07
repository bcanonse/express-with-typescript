# Express con Typescript

Creación de un Api usando la librería para aplicaciones web Express unido con el poderoso Typescript.

El fin de este proyecto es sobre aprender especificamente como usar Typescript, definiciones de tipos, aprendizaje de tipos estáticos y el uso de los ```enum class```

## Inicialización del proyecto usando Npm.

Cuando se utiliza NodeJs y Npm para proyectos puros con Javascript, únicamente usando el comando ```npm init -y ``` ya tenemos listo nuestro archivo para instalar las dependencias y correr nuestros scripts de ```.js```, ahora bien para usarlo con **Typescript** es necesario realizar unos pasos extras.

* En el archivo `.package.json` es neceario agregar la siguiente línea en el objeto de scripts -> ```"tsc": "tsc",``` esto lo que hará es poder convertir nuestros archivos escritos en **Typescript** a **Javascript**.

* Luego de configurar el archivo es neceario correr en CLI el siguiente comando ```npm run tsc -- --init``` esto lo que hará es crearnos un archivo de configuración para **Typescript** y aplicar restricciones y usabilidades especiales.


En Javascript y NodeJs para realizar hotreload en modo desarrollo es muy usual que se use **nodemon**. Ahora bien, con **Typescript** usamos la dependencia en desarrollo ```ts-node-dev```

Para formatear el código es usual que se use **eslint**, para **Typescript** usamos la dependencia en desarrollo ```ts-standard```, en el archivo ```package.json``` esta la configuración para poder usar este linter de código.

