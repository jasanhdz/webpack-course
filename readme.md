# Curso de Webpack

## Tabla de Contenido
- [Introducción](#introduction)
- [Instalación del entorno](#instalación-de-entorno)
- [Empezar Proyecto](#iniciar-nuestro-proyecto)
- [Usando npm](#usando-npm)
- [webpack](#webpack)
  - [creando bundle](#creando-el-primer-bundle)
  - [creando webpack.config](#creando-un-webpack-config)
  - [configuración de rutas relativas](#cargando-configuración-de-rutas-relativas)
- [Loaders](#loaders)
- [Plugins](#plugins)
- [Iniciar un Servidor de Desarrollo](#iniciar-un-servidor-de-desarrollo)
- [Soporta a ECMASCRIPT](#soporte-a-ecmascript)
- [Utilizando JS moderno en nuestro código](#utilizando-js-moderno-en-nuestro-código)
- [Soporte de Imagenes](#soporte-de-imagenes)
- [Soporte de Videos](#soporte-de-videos)
- [Soporte de fuentes](#soporte-de-fuentes-en-webpack)
  - [¿Porque agregar otro loader si ya existe uno igual?](#porque-agregamos-un-nuevo-loader-si-ya-teniamos-uno-igual)
- [Soportando Archivos JSON](#soportando-archivos-json)
- [Configuración para React](#configuración-para-reactjs)
- [Soporte a Sass](#estilos-con-sass-sass-loader)
- [Soporte a Stylus](#soporte-a-stylus-stylus-loader)
- [Soporte a Less](#estilos-con-less-less-loader)
- [Soporten a PostCSS](#estilos-con-postcss)
  - [Configuración de Plugin para PostCSS](#configuración-de-plugin-para-postcss)
- [Prevenir Código Duplicado](#prevenir-código-duplicado)
- [Eligiendo dependencias comunes](#eligiendo-dependencias-comunes)
- [Optimizando el paquete de dependencias comunes](#optimizando-el-paquete-de-dependencias-comunes)
- [Enlazando un Dynamic Link Library (DLL)](#enlazando-un-dynamic-link-library-dll)
- [Cargando módulos de forma Asincrona](#cargando-módulos-de-forma-asincrona)
- [Llevando un proyecto real a Webpack - preparación del entorno](#llevando-un-proyecto-real-a-webpack-preparación-del-entorno)
  - [Configurando webpack.config del proyecto](#configurando-webpackconfig-del-proyecto)
  - [Configuración para entornos de Producción.](#configuración-para-entornos-de-producción)

---
## Introduction 

Solo parte de un archivo JavaScript por página y en ella empieza a importar todos los modulos de tu aplicación, que tal si quieres escribir el código más limpio usando lo último de de JavaScript y también babel para darle soporte a todos los navegadores y ya entrados en gastos, porque no usar: Sass, Less, Styluss o PostCSS para generar nuestra hoja de estilos, por supuesto que puedes hacerlo con webpack, que tal si quieres hacer que se recargue el navegador al mismo tiempo cuando recargues tu código, con webpack es posible, y que tál si cuando estés listo para enviar tus cambios a producción, Comprimimos todo estó al máximo para que nuestra aplicación cargue como el rayo, nuestros usuarios estarán felices con el resultado y tú estarás orgulloso de todo el proceso, webpack es sin duda la herramienta con la que desarrollaras tu experiencia como desarrollador.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Instalación de Entorno

Ya se que tu quieres empezar a empaquetar tus modulos y utilizar webpack en forma, pero primero tenemos que instalar el entorno y lo principal o lo que corre cualquier cosa echa en JavaScript en el Servidor en esté caso es Node.js. Porque tenemos que instalar algo dentro de nuestro computador en el cuál vamos a utilizar webpack, entonces está será nuestra dependecia principal, tenemos que instalar Node dentro de nuestro sistema, en lo cual vamos a tener instalado npm y gracias a npm, vamos a poder descargar otros modulos como: jQuery, React, Viue, etc. 

Tenemos 2 opciones de descarga:
La versión: LTS que es la producción listo para ser utilizado en cualquier entorno.
La versión: Current es la versión de la gente que vive al limite que tiene los nuevos features que es la versión actual.

Las dos funcionan bien y el curso lo pueden seguir con cualquiera de las 2 versiones.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Iniciar nuestro proyecto

Una vez instalado node también se instalará npm el cual será nuestro gestor de paquetes. Ahora lo que tenemos que hacer es posicionarnos en la carpeta donde vamos a iniciar nuestro proyecto.

Ahora aquí vamos a iniciar un proyecto de JavaScript gracias a Npm:
para ello lo indicaremos en la terminal con el comando ``npm init``

- Primero tenemos que ponerle un nombre a nuestro proyecto de JavaScript
- version
- descrición
- entry point(index.js) por defecto se lo dejaremos por ahora.
- test command
- git repository
- repositorio
- keywords
- author
- lisence MIT
- Confirmamos con Enter y terminamos nuestra configuración.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Usando npm

Ahora procedemos a instalar webpack, para ello ocuparemos npm, y ¿como hacemos la instalación con Npm? Lo hacemos de la siguiente manera desde la terminal:
``npm install nombreDelPaqueteAInstalar``

version especifica del paquete:
``npm install nombreDelPaqueteAInstalar@versiondelPaquete``

Configuración extra
``npm install webpack --save-dev``

Primero --save nos va a ayudar a guardar esté paquete y que se guarde dentro de nuestro package.json, el siguiente flag: -dev hara que se guarde esa dependencia pero como una dependecia de desarrollo porque webpack si bien nos va a ayudar a lo largo de todo esté curso solo nos va empaquetar nuestro archivo para desarrollo no va a ser una dependecia que vamos a utilizar está dependicia que vamos a utilizar dentro de producción como por ejemplo react, viue, agular, etc.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Webpack

Esté webpack va a tener 2 cosas, primero va a tener 1 cliente que va a ser la forma de utilizar webpack desde nuestra terminal con el comando webpack, y despues va a tener esté empaquetador que nos va a ayudar dentro del proceso, es decir un cliente que vamos a utilizar desde la terminal y un software que va a correr interno desde nuestro sistema operativo que nos va ayudar a hacer nuestros empaquetados.

si notros probamos el comando webpack vamos que no reconoce el comando, y es porque wepack no está instalado en mi computador de manera global, solo está instalado dentro de mi proyecto que es la carpeta webpack para esté curso.

Entonces para ver el comando que yo he instalado solo para la carpeta de esté curso tenemos otra forma de verloy es con:
``npm list wepack`` el cual nos va a decir que versión de webpack tenemos instalado.

Ahora si que tenemos webapack instalado podemos empezar con nuestro primer bunddle.

### Creando el primer bundle 

Ya tenemos instalado Node que nos instalo a su vez npm y con npm iniciamos nuestro proyecto de javascript y en el instalamos webpack, ahora si procedemos a utilizarlo. 

Webpack recordemos un poco los sligs necesitaba 2 cosas principales:
- Un entrypoint
- Un ouput

Así que lo que necesitamos primero hacer es crearnos un entrypoint ¿Qué es un entrypoint? es un archivo de Javascript.

Creemos un archivo el cual podemos ponerle index.js que tiene que quedar dentro de nuestro proyecto y esté sin más podría ser nuestro entrypoint, pero vamos a hacerle algó más divertido, vamos a hacerle un console.log
```javascript
console.log("Hola Mundo, desde Webpack!");
```
Aquí tenemos código JavaScript donde eventualmente van a empezar las cosas divertidas, cargando más modulos haciendo más nuestro código pero por ahora estó está bien, simplemente tenemos un archivo sencillo con algó de Javascript y ahora si vamos a pasar a procesarlo con webpack, lo que tenemos que hacer es simplemente utilizar un comando.

Esté recibe 2 párametros sencillos, primero el entrypoint y luego como quiero que se llamé esté archivo que vamos a generar que sería mi ouput. En dos palabras mi **Entry** y mi **Ouput** esto es lo más sencillo de configurar y hacer algo con webpack.
``webpack index.js --output bundle.js --mode development``

Pero recordemos que hace rato esté comando no estaba funcionando. Me va a pasar exactamente lo mismo aca porque nostros tenemos está dependencia esté webpack solo instalado en mi proyecto, así que para llamarlo, invocarlo y que esté comando si se ejecute bien tenemos que configurarlo dentro de nuestro packages y **así vamos a aprender a hacer Scripts para nuestro package.json** 

Asi que aca donde tenemos scripts tenemos uno que se llamá test, recordemos que cuando npm nos pregunto si teniamos test le dijimos que no. pero que tal si configuramos una nueva tarea aquí donde vamos a poner nuestro webpack y acá vamos a ponerle que la tarea se va a llamar **build** así que sin más guardamos por aquí y si ahora vamos a nuestra terminal podemos ejecutar esté comando pero ¿como ejecuto los comandos que están dentro de mi package.json? Lo ejecuto con:
``npm run nombreDelComando``

Ahora podemos revisar un poco que es lo que trae nuestro archivo, aca tenemos un bundle.js aue trae un poquito de la configuración de webpack que trae lo minimo y lo necesario para poder interacturar con nuestro código pero en la parte de abajo tenemos nuestro Hola Mundo!

En este momento no hace mucho sentido que estemos utilizando webpack porque tenemos un código muy sencillo, pero eventualmente esté codigo va a tener images, va a cargar tu libraría o tu framework de JavaScript favorito y va a tener todo el sentido de que estemos utilizando webpack y manipulemos desde aquí todos los archivos.

Así que sin más aprendimos a usar nuestro primer bundle, cargarlo desde nuestro packages.json y ejecutarlo desde la consola.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


### Creando un Webpack Config

Ya hicimos nuestro primer Hola mundo dentró de Webpack ahora que tal si empezamos a configurarlo más, extenderlo poner este JavaScript dentro de un archivo HTML, eso si ver los efectos de lo que estamos haciendo y empezar con la parte dura del curso. Esto quiere decir que ahora si viene lo bueno.

Ahora vamos a crear un nuevo archivo, este nuevo archivo recibe un nombre muy especial se tiene que llamar "webpack.config.js" ojito con la extensión debe ser una extensión Javascript pues vamos a configurar nuestro archivo de webpack haciendo javascript, es decir que podemos programar aquí adentro.

Ahora lo más básico que tengo que configurar en estó es un entrypoint y un output, vamos a mandar está configuración a modo de objeto.
```javascript
{ 
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  }
}
```
Lo siguiente que tenemos que hacer dentro de esté archivo, y muy importante es que aca tenemos un JSON o algo muy parecido a un JSON, pero tenemos que hacer que javascript lo entienda más bien node, webpack entiendan esté archivo y que se pueda exportar, así que tenemos que exportarlo como un modulo de **common.js** y se exportan de la siguiente manera:
```javascript
module.exports = { 
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  }
}
```
Así que estamos exportando esté archivo JSON por aca y con estó tendriamos nuestra tarea lista, ahora tenemos que conpilar este archivo.

Vamos a ver como configurarlo desde nuestro package.json, para ello haremos una nueva tarea. 
``"build:local:": "webpack"``
Recordemos que el archivo de json no puede tener comas en los ultimos key de ese objeto, esto va a darme un error, el último siempre tiene que estar sin coma porque está en JSON extricto. 

En el comando solo llamaremos a webpack porque por defecto cuando llamamos a webpack, lo que hace es buscarme dentro del mismo directorio donde estamos corriendo el comando, el archivo webpack.config.js por eso es tan importante esté nombre, pero si nosotros quisieramos ponerle otro nombre también se puede configurar no hay nigun problema y lo veremos más adelante.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Cargando Configuración de rutas relativas.

Otra cosa que puedes hacer dentro de webpack es no simplemente buscar el archivo por defecto del webpack.config con el comando webpack si no que puedes cargarlo desde cualquier ruta, buscandolo de una manera de ruta absoluta o relativa dentro de tu computadora en esté caso que tal si aprendemos a hacer esto.

Para esto primero vamos a crearnos otra configuración dentro de otro archivo así que el webpack.config y el index.js lo vamos a poner dentro de una nueva carpeta en esté caso se llamará external donde vamos a llamar a esos 2 archivos.

Ahora quiero que con el comando webpack el archivo de webpack.config que está en la carpeta de external y no el archivo que esta en la raíz. Para ello le vamos a cambiar un par de cositas al archivo que está adentro y también vamos a ponerle su comando correspondiente, primero vamos a configurar nuestro package.json, para llamar al comando correcto el cual lo añadiremos a un script llamado "build:external" que llamé a otra ruta y no simplemente va a ser "webpack" si no que ahora webpack necesita de un flag adicional para buscar ese archivo dentro de la carpeta external que se llamá "--config" y luego tengo que pasarle la ruta que yo quiero utilizar para que se compile mi archivo "./" que es de donde estoy corriendo mi comando, luego entrar a la carpeta external y dentro de esta carpeta buscar "webpack.config.js" ahora si que vamos a a empezar a abuscar nuestro archivo de webpack, ya con esto puedo correr el comando build:external

Pero otra cosa adicional que vamos a hacer. Si corremos el conmando de webpack:external podremos ver que no está nuestro build adentro de la carpeta external, así que vamos a poner nuestro archivo build dentro de nuestra carpeta external, para esto vamos a configurar nuestro webpack.config. En está ocación vamos a aprender a obtener rutas absolutas y relativas dentro de tu computador con un modulo de Node.

Esté **modulo de Node** se llamá **path** y tenemos que importar esté modulo de node para poder utilizarlo dentro de nuestro archivo, así que vamos a crer una constante path y vamos a requerir path, y de está manera es que vamos a importar modulos dentró de common.js dentro de lo que es Node.js así que son importantes los modulos, ahora que ya tenemos path que tal si lo utilizamos para obtener rutas relativas de mis archivos.

Ya no necesitamos tener el contenido del objeto dentro de comillas normales pues ahora lo haremos con path:
```javascript
const path = require('path'):
{
  mode: 'development',
  entry: './index.js',
  output: {
    filename: path.resolve(__dirname);
  }
}
```

lo que le digo es que me da la ruta de donde yo estoy ubicado, y donde estamos ubicados? pues dentro de la carpeta external, y que dentro de esto busque a mi archivo de bundle en esté caso a mi index.js el cual vamos configurarlo para mi index también
```javascript
const path = require('path'):
{
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: path.resolve(__dirname);
  }
}
```
Ya no necesitamos ponerle el './' porque estoy haciendo el mismo trabajo con el "__dirname" y como segundo párametro le digo que busque a mi archivo 'index.js'.

Y ahora otra cosa que puedo configurar dentro de mi output es un key que se llama 'path' que es para decirle donde voy a dejar mi archivo compilado. ¿Y donde lo quiero dejar?

Pues será dentro de mi ruta de la carpeta para que esté más ordenado para que mi bundle no esté a la par de mi archivon 'index.js' si no que esté dentro de otra carpeta y la carpeta se llamará 'dist' de distribuition que es como la forma para esta clase de archivos compilados.
Nuestro archivo se llamará 'bundle.js', así que con esto deberíamos tener nuestra configuracíon completa para que me corra el comando desde este webpack.config

Con esto deberíamos tener nuestra configuración completa para que me corra el comando desde webpack.config y que me genere el bundle.js dentro de la carpeta external, así que sin más carguemos el comando.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Loaders

Que tal si ahora aprendemos a cargar otros tipos de archivos dentro de nuestro archivo javascript, dentro de nuestro archivo que estamos compilando dentro de nuestro *entrypoint* y que tál si aprendemos a leer un poquito de CSS, así que sin más aprenderemos a utilizar los loaders de webpack. Para esto vamos a ir mi carpeta de external y la vamos a copiar y la vamos a pegar pero con el nombre de "css-style-loader", ya veremos porque le ponemos esté nombre, pues así se llaman los loader que vamos a ocupar en está sesión. Así que sin más vamos a ir a nuestro webpack.config de la carpeta que acabamos de renombrar.

Vamos a continuar nuestro archivo de loaders y los loaders se cargan dentro de un key de nuestro archivo de configuración que se llama **module** y dentro de module otro key: que se llamá **rules** y dentro de rules **va a recibir un array** que sería un lista con los loader que vamos a utilizar. ejemplo:
```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Aquí van a ir los loaders.
      test: 'que tipo de quiero reconocer',
      use:  'que loader se va a encargar del archivo'
    ]
  }
}
```
A los loader tengo que pasarle 2 párametros básicos, primero uno que se llamá **test**, donde le digo: que tipo de archivo quiero reconocer, y el segundo key que es **use** que va a recibir dentro de un array o un texto donde le vamos a decir: que loader se va encargar del archivo 

Ahora empecemos a configurarlo, primero test: que se configura como si fuera una expresion regular; Así que vamos a configurar nuestra extesion regular donde le vamos a decir que solo lea los archivos con extension '.css', porque recuerden que queremos leer archivos css. ejemplo: ``test: /\.css$/`` No hace falta que sean expertos en expresiones regulares, simplemente acá le estoy diciendo que me lea los archivos con extension css sin más. 

Ahora el segundo comando, use: y acá le voy a decir que loader quiero utilizar son css-loader y style-loader ahora vamos a ver porque. Pero estos loaders no vienen precargados con webpack, tenemos que instalarlos porque hay multiples o cientos de loaders para cualquier cosa. Empecemos a configurar estó, para ello vamos a ir a la terminal y vamos a descargar esos loaders con los comandos:
``npm install style-loader css-loader`` recuerden que tenemos que guardarlo como depencia de desarrollo **--save-dev** 

Una vez instalados revisemos nuestro packages.json y veremos que tenemos instalados los loaders. Ahora ya podremos utilizarlos, en el key use: si queremos usar un loader podemos hacerlo con un string pero si queremos utilizar más de uno tendremos que hacerlo con un array. 
```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Aquí van nuestros loaders
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
}
```
Veamos el primero que se llama **css-loader**: gracias a css loader, vamos a poder cargar archivos css he interpretarlos dentro de javascript, dentro de nuestro archivo html como por ejemplo:
```javascript
import './estilos.css'
// Para ello tenemos que crearlo.
```
Vamos a hacer unos estilos simples para nuestro archivo:

```css
body {
  background-color: lightblue;
}
```
Guardamos nuestro archivo y lo cargamos, ahora que tal si ejecutamos nuestro loader, pero antes vamos a crear una tarea para estó, donde vamos a ir a nuestro package.json, ahora creemosle una tarea a esté ejercicio.

Ahora que tal si creamos un archivo HTML para que se vean nuestros estilos, para que se vea nuestro color de fondo, creemos este archivo index.html algo sencillo. Ahora yo tengo que cargar mi bundle.js, para que el hagá su trabajo nuestro console.log y que nos imprima los estilos.

Ahora si cargamos nuestro html dentro del navegador vamos a ver que tenemos, si vemos no está el color de fondo que le pusimos a los estilos y lo siguiente que tenemos es que efectivamente nuestro console.log si está ejecutado, lo que tenemos de segunda tarea en nuestro index.html.

Pero no te preocupes, que no se hallan impreso los estilos dentro de nuestro html es porque no hemos utilizado nuestro **segundo loader** que es el **style-loader** porque **css-loader: lo único que hace es entender archivos css**, ahora imprimirlos de alguna forma dentro del navegador, lo tiene que hacer un **segundo loader que es style-loader** 

Así que si ahora aplicamos css-loader y luego style-loader estó va a funcionar. Es muy importante el orden:
```javascript
module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }
```
Primero se ejecuta css-loader y luego style-loader solo que los key los lee del último al primero. Primero se entiende el archivo CSS y luego se imprime en pantalla. Así que si todo está bien y volvemos a correr nuestro comando build:css ya podremos ver los estilos de nuestro archivo css.

La manera en como style-lodaer interpreta nuestros estilos es por medio de una etiqueta style en el head. Ahora algo que te estaras preguntando es como haora entiendo mis estilos pero creo un archivo de estilos .css que yo pueda cargar como mi archivo de build, que tal si yo puedo externalizar mis archivos en vez de inyactarlos simplemente como un style. Esto también se puede hacer y lo haremos con nuestro **plugin** de **estilos**.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


### Plugins

Ya entendimos un nuevo tipo de archivos .css y aparte de eso los imprimimos en pantalla pero la forma de imprimirse era que se ponía una etiqueta style dentro de nuestro header realmente se estaban inyectando dentro del navegador, porque javascript estaba llamando a estos estilos y los estaba poniendo dentro de un style en el head. 

Ahora la pregunta es: ¿Como puedo tomar estos estilos y sacarlos de lo que estás haciendo dentro del bundle y mandarlos a un archivo externo?

Y esto lo hacemos con un plugin que se llama **extract-text-plugin** y otra vez como los loaders son algo que tenemos que instalar porque es un plus que le damos a webpack para poder hacer una tarea en especifico, así que sin más vamos a instalarla.
``npm install --save-dev extract-text-webpack-plugin``

Lo siguiente que tenemos que hacer es crear nuestra carpeta para esté ejercicio para esto voy a copiarme la anterior de css-style-loader y vamos a poner una nueva aquí que se va a llamar "plugin-extract-text" lo siguiente que tengo que hacer es agregar la tarea a nuestro package.json.

Ahora configuremos nuestro primer plugin dentro de nuestro webpack.config. ¿Y como ponemos un plugin? Pues sería un nuevo key dentro de nuestra configuración, luego de los modules puedo poner los plugins, el cual será un array de plugins

```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    // Aquí van los plugins
  ]
}
```

Aquí necesito utilizar nuestro extract-text-plugin, pero para esto tenemos que importarlo tal cual como lo hicimos como con path, no va a ser igual como los loaders que simplemente le ponemos el nombre y eso funciona. Si no que tenemos que importarlo como un modulo de Node.
``const ExtractTextPlugin = require(extract-text-webpack-plugin)``
Y Ahora tengo que utilizarla dentro de mis plugins 
```javascript
module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    // Aquí van los plugins
    new ExtractTextPlugin("css/styles.css")
  ]
```
Vamos a indicarle que extraiga todos los archivos de css y que los ponga en algun lugar en la carpeta css y le pondremos un nombre como en el ejemplo. Y ahora le tengo que decir es donde se van a ubicar mis archivos que se están extrayendo pero no le he dicho que se extraigan esos archivos de css. 

¿Como hago eso?
Simplemente dentro de nuestro loader de css tengo que configurarlo, donde dice use: tengo que englobarlo todo esto de acá y ponerlo aquí.
```javascript
module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader"
          use: "css-loader"
        })
      }
    ]
  },
```
El cual recibe por párametros dentro de llavecitas los loaders que se van a ejecutar y luego se van a extraer. Lo que vamos a utilizar es otro key que será 
``use: "css-loader"`` porque ya no necesitamos el style loader aunque también podemos configurarlo como fallback que también es una como de klas configuraciones extras que tiene, aunque en esté caso no sería completamente necesario, puedo dejarlo o ponerlo pero lo que realmente necesito es el css-loader, el cual me va a interpretar los archivos css y el Objeto EXtractTextPlugin lo va a extraer 

**Importante**: Para aquellos que tienen problemas con ExtractTextWebpack con Webpack 4

ExtractTextWebpack para Webpack >= 4.0.0 ``npm i -D extract-text-webpack-plugin@next``

Cuando compilemos nuestro archivo y deseemos ver nuetro html notaremos que no se ha interpretado como la página de ccs loader. Lo que podemos hacer es cargarlo desde un link en el head para que se carguen los estilos que generamos desde dist.

Lo interesante de esto es que también podemos es ponerle otro nombre a los archivos de estilos, porque acá en mi webpack.config le pusimos que los archivos extraidos siempre se llamén styles.css, pero que tal si nosotros tenemos multiples archivos de css y tiene nombres diferentes, entonces yo puedo aplicarle un comodin para el nombre y en vez de ponerle siempre que se llamen styles.css podemos ponerle "css/[name].css" que pondra siempre dentro de la carpeta de css un archivo con la extensión css que se llamé como se llamaba su **inpout**. Si lo compilamos obtendremos el archivo **main** que es el archivo de mi **entrypoint** y si yo solo tengo un entrypoint es el archivo principal, entonces es el nombre que recibe por defecto.

Ya vamos a aprender como modificar y como crear multiples entrypoints y ponerles nombres custom y con ello personalizar como se llamarían nuestros nombres dinámicos de archivos cuando los exportamos.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Multiples EntryPoints

En este momento solo hemos estado empaquetando un solo entry point que es nuestro index.js, pero que tal si yo qusiera tener un proyecto que tiene multiples páginas, el home, el contacto, los precios, la misión y la visión, etc. Entonces tiene multiples entry points archivos, multiples archivos de javascript que se van a cargar según la página en la que estemos ubicados, para esto webpack está preparado, tendríamos que cambiar la configuración por esos entry points que queremos, para ello lo que hacemos en el **entry: es poner un objeto** ``entry: {}``, en esté objeto vamos a colocar nuestros entry points, pero en esté caso ya tenemos que ponerle un nombre, recordemos que en nuestra clase pasada nuestra carpeta external quedo con un archivo main.css
```javascript
module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'main.js'),
    index: path.resolve(__dirname, 'index.js'),
    home: path.resolve(__dirname, 'home.js'),
    precios: path.resolve(__dirname, 'precios.js'),
    contacto: path.resolve(__dirname, 'contacto.js'),
  }
```
Pero si nostros queremos cambiarle el nombre tambien lo podemos hacer.

Ahora nosotros tenemos que crear esos archivos que no existen, vamos a ordenar estos archivos fuentes y los vamos a colocar en la carpeta src, una vez hecho esto también debemos modificar la ruta de los archivos en el wepack.config ya que nuestros archivos ya no estará ubicados en el directorio raíz, si no que ahora estaran en src/js ``main: path.resolve(__dirname, '`src/js/main.js')`` 

Ahora que ya tenemos multiples entry points vamos a pasar a exportarlos y ahora pasará algo muy divertido, para ello vamos a hacer esa tarea que va a hacer esa compilación
``"build:multi": "webpack --config ./multiples-entry-points/webpack.config.js"``
Vamos a ejecutar esto y vamos a ver si no tenemos nigun error por acá.

Ahora la compilación marca un error, primeramente que no encuentra los estilos, que no los puede resolver, que están ya en otra ruta y segundo que los archivos que estamos enviando los estamos poniendo todos con el mismo nombre, bundle.js en todos los archivos. Resolvamos un problema a la vez, primero nuestros archivos css ya no están en la misma ruta, para eso vamos a ordenar los archivos en una carpeta css.

Primero nos salimos de nuestro archivo js y luego entramos a la carpeta css
``import '../css/estilos.css';``

Ahora si compilamos una vez ya no tendremos el error de css. Pero ahora el único error que nos aparece que nuestro chunk home, y chunk contacto, nuestro archivos compilados, todos se quieren llamar: bundle.js. Esto no está permitido porque si queremos tener multiples entry points necesitamos tener multiples bundles, entonces tenemos que configurar nuestra salida, nuestro **Output:** porque acá unicamente teniamos bundle.js y ese es nuestro problema. 

Qué tal si ahora nosotros le podemos poner un nombre dinámico y ya aprendimos a hacer esto: ``("css/[name].css")``.
Aplicaremos lo mismo para que no solo dentro de dist no solamente tiramos nuestros archivos javascript si no que los ponemos dentro de una carpeta que se llamé js.
```javascript
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  }
```
Con esto tendríamos practicamente el ejericio listo, lo corremos y efectivamente tenemos una carpeta css y aca si que me ha puesto mis builds, con el nombre dinámico que le pusimos. y en css de dist tambien tenemos una archivo de css por cada entry point que hemos creado, así que yo simplemente puedo ir y crear archivos HTML para cargar cada uno de esos entry points, hagamos esto para acompletar nuestro ejercicio y aprender nuevas cosas de webpack.

## Iniciar un Servidor de Desarrollo.

Hasta esté momento cada vez que hacemos un cambio a cualquiera de nuestros modulos nos toca irnos a la terminal y volver a compilar nuestro archivo de webpack, que tal si arreglamos eso, cada vez que haiga un cambio se actualice el archivo automaticamente, y que podamos ver los cambios inmediatamente en el navegador, para eso tenemos 2 cosas, hacerle un watch a nuestra tarea de webpack o crear un Servidor de desarrollo que también haga este watch pero al mismo tiempo que actualice el navegador sin que tengamos que darle F5.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Soporte a EcmaScript

Hasta el momento ya sabemos configurar webpack con loaders, pluguins y ponerles algunas configuraciones especiales. Ahora vamos a empezar a reforzar todos esos conocimientos con más loaders. Para ello utilizaremos babel, como lo especifica su website es un Javascript compiler, lo que hace es compilar nuestro codigo javascript para que cualquier navegador lo entienda. En el Javascript moderno lo que ocurre es que nosotros tenemos una sintaxis más amigable con el desarrollador, recuerda que webpack = developer experience. Y no lo vamos a quitar de escribir nuestor código gracias a babel que también es developer experience.

Esto es posible gracias **babel-loader**. Pero el loader no viene solo porque el loader nos va a dar el soporte para los archivos de javascript que vamos a importar dentro de nuestro entrypoint o dentro de otros modulos, sino que también necesitamos el core de babel, que sería como babel va a trabajar sobre esos archivos y como los va transpilar para que sea código que lo entienda el navegador, y luego tenemos que decirle que especificaciones de Ecmascript vamos a soportar, por ejemplo queremos soportar EcamaScript2015, EcmaScript2017 o queremos soportar las caracterisiticas que estan completamente en desarrollo. Todo eso se puede configurar y lo hacemos con babel.

Para ello continuaremos trabajando como en los ejercicios anteriores y vamos a crear una nueva carpeta 'babel-loader'. Una vez creada iremos a nuestro editor y lo primero que tenemos que hacer desde ahora es primero configurar la tarea dentro de el package.json que se llamara build:babel

Ahora tenemos que añadir los paquetes y las nuevas dependencias para configurar nuestro webpack.config, primero instalemos las nuevas dependencias:

``npm install -D babel-loader @babel/core @babel/preset-env``

Hasta el día de hoy 24 de Mayo del 2019 ya no funciona si queremos instalar ecmascript con versiones anteriores como ejemplo: ``npm install -D babel-loader babel-preset-es2015...``

- El único paquete que funciona con webpack 4 es @babel/preset-env

- ES2015 ya no funciona con la nueva versión de webpack y npm ahora se usa @babel/preset-env

```javascript
rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          // fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
```
<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Utilizando Js moderno en nuestro código

Está es una clase especial donde no necesariamente vamos a aprender a hacer algo nuevo con webpack, si no que vamos a darle sentido a porque utilizamos babel, dentro de nuestra configuración de webpack porque queremos soportar JS moderno y cual va a ser el output que nos  a dar webpack junto con babel. Aquí vamos a escribir un poquito de javascript

- Al diá de hoy Mayo 2019, no se pueden mezclar imports con exports.
reemplazar import por require.

```javascript
const renderToDOM = require('./render-to-dom.js');
const makeMessage = require('./make-message').default;

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(()=> {
    todoOk('Han pasado 3 segundos, omg');
    todoMal('Ha ocurrido un error');
  }, 3000)
});

module.exports = {
  firstMessage: 'Hola Mundo desde un Modulo',
  delayedMessage: async ()=> {
    const message = await waitTime;
    console.log(message);
    // const element = document.createElement('p');
    // element.textContent = message;
    renderToDOM(makeMessage(message));
  },
}
```
Babel 6 ha cambiado un poco la forma en como se exporta por defecto

un código así

```javascript
function makeMessage(msg) {
  const element = document.createElement("p");
  element.textContent = msg;
  return element;
}

export default makeMessage;
```
se exporta así:

```javascript
const makeMessage = require("./makeMessage").default;
```
<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Soporte de imagenes 

hasta esté momento ya soportamos css, javascript y ahora vamos a seguir añadiendole soporte a más assets que seguramente vas a necesitar dentro tu proyecto que tal si le damos soporte a imagenes en este momento.

Para soportar imágenes requerimos un nuevo loader, para efectos del curso usaremos el url-loader.
Este loader es especial porque es soportado por los creadores de Webpack.

install 
``npm install url-loader --save-dev``

Ahora vamos a configurar nuestra carpeta, vamos a copiar la carpeta de 'babel-loader' y le vamos a poner 'url-loader-images' 

Una vez listo esto, tenemos que configurar nuestra tarea de npm, nuestro comando para que corra nuestro ejercicio. que sería:
``"build:images": "webpack --config ./url-loader-images/webpack.config.js"``

Ahora si que puedo correr esté proyecto y esté loader pero no sin más con configurarlo, para ello vamos a ir a la carpeta de url-loader-images y a nuestro webpack.config.

Ahora vamos a configurar nuestro loader. ¿Como se configuran los loader?

- Se configuran dentro de module: { rules: [ {} ] } acá vamos a poder configurar nuestro nuevo loader

**Recordemos que: los loaders no hace falta que los importemos solo los tenemos que cargar dentro del key de rules: de nuestro webpack.config** y reciben **2 keys** importantes; el de **test** y el de **use** en el de use: le vamos a decir que tipo de loader vamos a utilizar y en el de test le vamos a decir que tipos de archivos van a usar ese loader: aquí va nuestra expresión regular.

Qué tal si no solo soportamos archivos de jpg sino que soportamos más tipos archivos, pero en esté caso podemos poner los diferentes tipos de imagenes que van a utilizar esté loader, para eso en use: tenemos que colocar nuestro loader no simplemente con: url-loader, si no que requiere una configuración especial y ya aprendimos que configurando babel-loader, las configuraciones especiales que requiera nuestro loader se van a poner otra vez entre llaves y adentro de esto vamos a poder poner nuestras configuraciones

```javascript
{
  test: /\.(jpg|png|gif)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 100000,
    }
  }
}
```
Si queremos soportamos más tipos de archivos como por ejemplo png o gif. Para ello nosotros podemos colocar todos los tipos de imagenes seperados por el simbolo de paip '|'.

La opción más importante que tiene nuestro loader es una que se llama **limit**, que es decirle hhasta que limite de peso de archivo va a ser una transformación. Porque si vamos a la página de url-loader nos explica que lo que va a hacer url-loader es convertir nuestros archivos a `base64`. 

¿Qué quiere decir estó?
que no va a transportar las imagenes de lado a lado y nos va a dar una nueva ruta sino que lo que va a hacer por defecto es convertir las imagenes a base64. Lo que significa es que las convierte totalmente a código y las pondra junto con nuestros archivos javascript y lo a hacer solo con la condición de que no peseen más del limite que coloquemos en el key ``limit:`` **El limite es en Bytes** 

Para probar usaremos una imagen de 99kb y el limite lo estableceremos de 100kb. Si la imagen pasará del limite que establecimos lo que hará url-loader será exportar la imagen los assets externos a la carpeta en esté caso de dist, y ahí colocará la imagen pero sin ``base64``.

Ahora iremos a nuestro index.js para importar nuestra imagen y vamos a ver que tan bien funciona estó

Otra cosa adicional y para terminar esté ejercicio podemos cargar también las imagenes desde un css obviamente nuestros estilos.css y desde acá podemos importar nuestra imagen y cambiarle por ejemplo el background. Por supuesto que lo podemos hacer porque ahora ya soportamos los archivos de imagen. Solo basta con cargar la imagen desde ruta absoluta.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Soporte de fuentes en webpack

Otro de los assets valisos que vas a utilizar en todos tus proyectos es personalizar las fuentes porque quieres una fuente en todos tus textos diferente o porque quieres añadir algunos nuevos iconos para que se vean bien dentro del navegador. Para eso te voy a presentar [FontSquirrel](https://www.fontsquirrel.com). Qué es un repositorio de fuentes gratuitos que los puedes utilizar incluso hasta para uso comercial. 

En esté ejemplo buscaremos openSans que es con la que probaremos esté ejemplo, de igual maner apuedes elegir la de tu agrado. Cuando lo busques podemos encontrarnos TTF para descargarlo en el sistema y si le damos click a la fuente encontraremos algo mucho más divertido que es poder barja el **Webfont kit** que es la forma de soportar esa fuente pero en el navegador y evitar que tus usuarios la tengan netamente instalada. Asi que vamos a darle check a todos los formatos(Porque son todos los formatos que van a funcionar en cualquier navegador). Y vamos a descargar nuestro paquete de fuentes.

Si abrimos nuestro archivo veremos que tenemos una carpeta por cada peso de está fuente. En esté caso vamos a utilizar solo la regular. Y vemos que adentro tenemos las fuentes y adentro tenemos una hoja de estilos. Está hoja de estilos es la que nos interesa así que vamos a abrirla para copiar todo su **@font-face{}** y lo vamos a pegar en nuestra hoja de estilos.

Ahora iremos a nuestra carpeta del proyecto y vamos a duplicar nuestra carpeta de url-loader-images y ahora crearemos una con el nombre de url-loader-fonts. Ahora vamos a abrir nuestro package.json, lo primero que tenemos que hacer es crear nuestra tarea para que nos haga el bunddle. 

Bien lo siguiente que tenemos que hacer es configurar nuestro webpack.config, Para dar soporte a nuestros tipos de fuentes no tenemos que hacer algo especial con el url-loader ya que como es un archivo normal así como binario lo podemos cargar como una url, podemos darle soporte en está misma linea. Ejemplo
```javascript
{
  test:/\.(jpg|png|gif|woff|eot|ttf|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 100000,
    }
  }
}
```
Lo siguiente que tenemos que hacer es utilizar nuestras fuentes así que vamos a ir a nuestra hoja de estilos.css y es ahi donde tenemos que copiar el font-face y especificar la ruta de los archivos de fuente que vamos a utilizar, también debemos usarlos para probar que se carguen correctamente.

<h3 style='color:red;'>Importante</h3>

__Si sus fuentes pesan más de lo que tienen especificado en el url-loader tienen que instalar file-loader y listo. Más adelante vamos a aprender a usarlos en conjunto con un par de configuraciones extra.__

## Soporte de Videos

Seguimos reforzando nuestro conocimiento con url-loaders soportando más tipos de archivos y en esté caso vamos a traer a la mesa los videos. Para esot simplemente vamos a seguir con nuestro proyecto. Vamos a duplicar la carpeta que teniamos de url-loader-fonts y la vamos a llamar url.loader-video. Para este ejemplo usaremos 2 videos uno en mp4 y otro webm. Vamos a colocar los videos dentro de nuestros src en una carpeta videos.

Ahora tenemos que darle soporte dentro de nuestro archivo de webpack.config.
Procedamos a realizar lo que hacemos con todos los loader en nuestro editor de código.

1. Primero Generar la tarea para este ejercicio. 
``"build:video": "webpack --config ./url-loader-video/webpack.config.js"``
2. Procedemos a editar nuestro webpack.config de esta carpeta de video.

En esté caso vamos a hacer un nuevo loader muy parecido a loader que teniamos.

```javascript
{
  test: /\.(mp4|webm)$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 100000,
      name: 'videos/[name].[hash].[ext]'
    }
  }
}
```
<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### ¿Porque agregamos un nuevo loader si ya teniamos uno igual?

Bien la respuesta es muy simple, apesar de que estamos utilizando el mismo loader, nosotros queremos guardar algún tipo de archivo en especial en una dirección especifica, entonces lo más recomendable es modularizar la ruta de mis archivos compilados usando la propiedad de *name*, Si queremos modularizar nuestro proyecto poniendo distintos tipos de archivos en lugares diferentes podemos agregar multiples loaders unicamente cambiando el tipo de archivo y la ruta donde deseamos guardarlos.

Adicionalmente ocupamos 2 nuevos flags. que son [hash] y [ext]. 
[hash]: Nos ayuda a agregarle un valor random despues del nombre del archivo para que cada vez que compilemos nuestros archivos el hash cambie y de ese modo eliminamos el cache del navegador, pero si no lo queremos eliminar podemos no ponerselo.
[ext]: Con esto me va a exportar el archivo con la extensión que tiene por defecto.

Ahora lo único que nos falta para terminar el ejercico es utilizar nuestros videos, para ello vamos a importar nuestros videos a nuestro index.js y los vamos a hacer un render a nuestro DOM.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Soportando archivos JSON

En la nueva version de WP (webpack >= v4.0.0) ya no hace falta usar el json-loader, ya que webpack lee los archivos json por defecto.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


### Configuración para React.js

Practicamente todos nuestros proyectos hechos con javascript moderno están hecho bajo una librería o framework principal que te guste utilizar en tus proyectos, en esté caso a mi me gusta utilizar React, entonces tenemos que darle soporte a JSX que es el lenguaje raro que utiliza react para hacer sus cosas.

Esto lo podemos también configurar como un preset de babel, recordemos que interpretamos Ecmascript 2016 o 2015 con babel, también podemos hacer lo mismo para react, si vamos a la documentación de [babel.js](https://babeljs.io/docs/en/plugins/) podemos ver que además de tener configuraciones para es2015, es2016, es2017, tenemos la configuración para react así es como nostros podemos simplmente instalarla, poner esa configuración, ese preset y empezar a escribir react.js   

install react
``
npm install --save-dev @babel/preset-react
``
babel-preset-react … al igual que las usadas hasta el momento en el curso, es una dependencia de desarrollo, por eso se instala con –save-dev o -D … esto le dice a npm que al momento de generar el paquete final no las incluya como parte de los archivos de distribución.

Esté es el preset para react, cuando npm haga su trabajo estaremos listos para empezar a trabajr con react.
Ya le dimos el soporte para react para que se entienda el lenguaje en el cual están escritas algunas cosas en react.jsx. **Pero ahora que vamos a hacer una pequeña aplicación con react y react-dom para imprimirlos en pantalla.** De los cuales son también 2 dependencias pero a diferencia de las anteriores y practicamente todas las que hemos instalado a lo largo del curso, no van a ser dependencias de desarrollo, si no que van a ser dependencias para nuestro codigo, dependecias normales.

install react-dom
``
npm install react react-dom --save
``
react y react-dom … a diferencia de las dependencias usadas hasta el momento en el curso, se instala sólo con –save o -S para indicar a npm que al momento de generar el paquete final deberá incluirlas como parte de los archivos de distribución. Ya que el código de nuestro programa las usará durante la ejecución en producción.

Ahora que ya tenemos react instalado, iremos a nuestro package.json para agregar nuestra tarea la cual será: 
``
"build:react": "webpack --config ./react/webpack.config.js"
``
Como lo hemos echo en los ejercicios anteriores vamos a crear una nueva carpeta nombre react, la cual es una copia de la carpeta json-loader pero ahora le agregaaremos el preset de react.

Solo tengo que configurar esté nuevo preset ya que donde vamos a hacer archivos javascript, solo vamos a agregarle otro preset para que interprete los archivos en react.js o por lo menos el lenguaje que está dentro de react que es JSX. simplemente agregamos 'react', no hace falta poner preset-react ni nada por el estilo.

```javascript
{
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ["@babel/preset-env", "@babel/react"]
    }
  }
}
```
Ahora ya podemos empezar a crear nuestra aplicación con react.js. Empecemos:
Primero en nuestro index.js vamos a importar react y react-dom, pero vamos a importar solo la funcion render de react-dom, y ahora ya podemos empezar a crear un componente.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Estilos con Sass (sass-loader)

En todos los proyectos que están hechos con html, css y javascript, al final del día ese css que le da todo el color y la forma a tus proyectos puede venir generado desde otroa herramienta llamados preprocesadores o postprocesadores como por ejemplo: Sass, Stylus, Less, PostCss. 

En esta parte nos toca darle soporte a Sass, para ello tenemos que instalar el loader de sass

instalación:
``
npm install css-loader --save-dev
``
Una vez instalado y como lo venimos haciendo: 
1. Crearemos una nueva carpeta llamada sass-loader generada con la copia del ejercicio anterior que es react.
2. Despues tenemos que generar la tarea en el package.json 
``
"build:sass": "webpack --config ./sass-loader/webpack.config.js"
``
3. Ahora tenemos que agregar el loader en el webpack.config
```javascript
{
  test: /\.scss$/,
  exclude: /(node_modules|bower_components)/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"]
  })
}
```
4. Además de agregar el loader y de haber instalado Sass. Sass debe ser compilado en nuestro sistema, es decir tenemos el soporte de archivos sass, pero esos archivos no los puede leer el navegador y para ello debemos de transformar esos archivos a css para que el navegador los pueda entender. Para ello tenemos que instalar el Core de Sass, y esto se hace muy sencillo

instalación del Core de Sass:
``
npm install node-sass -D
``
Una vez instalado ya podemos compilar nuestros archivos y se debería de ejecutar correctamente.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Soporte a Stylus (stylus-loader)

En está clase vamos a darle soporte a stylus.

1. Primero tenemos que instalar nuestro loader que es 'stylus-loader', junto con su core, el cual convierte o compila el lenguaje stylus a css

La dependencia core simplemente es stylus.
instalacion de stylus:
``
npm install --save-dev stylus-loader stylus
``
2. Tenemos que agregar nuestra tarea al package.json 
``
"build:stylus": "webpack --config ./stylus-loader/webpack.config.js"
``
3. Ahora crearemos una nueva carpeta llamada stylus-loader para este ejercicio, la cual fue duplicada de sass-loader. 

4. Aquí vamos a agregar nuestro loader a nuestro webpack.config

Aparte de darle soporte a stylus y darle soporte a cualquier tipo de preprocesador, podemos configurarlos e ir un poquito más allá de eso, podemos añadirle opciones a estas configuraciones, en el caso de stylus también podemos hacerlo. Para ello vamos a ir nuestro loader de stylus donde vamos a aprender a extender los poderes de stylus gracias a otras cosas y ponerle una configuración extra, no solamente darle lo básico de stylus.

Para esto vamos a cortar el loader de sass y vamos a cambiar el texto por un objeto, primero vamos a tener el loader de css-loader, y luego vamos a tener otro loader, donde el objeto loader va a tener opciones como ya lo habiamos echo antes pero un poco diferente. Vamos a tener un key que será nuestro loader del preprocesador y como segundo key pondremos las options.

Una de sus opciones es poder traer modulos externos que apoyen a stylus mixeds como le llaman dentro de los preprocesadores y estos mixeds los podemos traer de proyectos externos con que ya hallan compartido en github, o los podemos crear nosotros mismos. En esté caso vamos a traer 2 mixeds que ya son muy populares dentro de la comunidad de stylus. Uno se llama **nib** y otro **rupture**

Lo que va a realizar **nip** es un conjunto de mixeds que va ayudar para que algunos prefijos de cosas que no entiendan navegadores viejos funcionen bien y lo que va a realizar **rupture** es darnos mixends para que podamos utilizar y demos soporte a mediaquerys con una sintaxis mucho más sencilla.
```javascript
{
  test: /\.styl$/,
  exclude: /(node_modules|bower_components)/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      "css-loader", 
      {
        loader: "stylus-loader",
        options: {
          use: [
            require('nib'),
            require('rupture')
          ]
        }
      }
    ]
  })
}

```
Otra cosa aparte de utilizarlos así nadamas es que los podemos autoimportar dentro de nuestro proyecto y para hacer eso, es una segunda option de nuestro loader de stylus que se llamá **import**,
el import también puede ser una lista o ser nadamas uno.

```javascript
{
  test: /\.styl$/,
  exclude: /(node_modules|bower_components)/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      "css-loader", 
      {
        loader: "stylus-loader",
        options: {
          use: [
            require('nib'),
            require('rupture')
          ],
          import: [
            '~nib/lib/nib/index.styl',
            '~rupture/rupture/index.styl'
          ]
        }
      }
    ]
  })
}
```
Acá tenemos que ponerle esas rutas de donde están ubicados los archivos que quiero autoimportar dentro de mis estilos y para esto tengon utilizar un simbolo '~', esté simbolo es un alias para entrar a la carpeta de node_modules donde estamos instalando todo.

Ahora que las importamos procedemos a instalar los mixeds que acabamos de configurar.
``
npm install nib rupture --save-dev
``

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Estilos con Less (less-loader)

Como todos los demás loader tenemos que instalar less-loader para poder entender los archivos de less y también tenemos que instalar el core de less para que transpile nuestro código de less a css.

instalación de less:
``
npm install less-loader less --save-dev
``
2. Ahora procedemos a crear nuestra tarea en nuestro package.json 
``
 "build:less": "webpack --config ./less-loader/webpack.config.js"
``
3. Ahora crearemos nuestra carpeta de esté ejercicio llamada less-loader
4. Agregaremos nuestro loader para soportar archivos less con una pequeña configuración extra:
```javascript
{
  test: /\.less$/,
  exclude: /(node_modules|bower_components)/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", {
      loader: "less-loader",
      options: {
        noIeCompat: true,
      }
    }]
  })
}
```
5. Ahora procedemos a crear nuestros archivos less e importarlo a nuestro index.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Estilos con PostCSS

PostCss es nuestra última alternativa para transformar estilos, popular en el mercado, con la cual podemos procesar nuestros estilos. Y de hecho PostCSS es la manera mas moderna de hacerlo, si arrancará un proyecto hoy lo haría con PostCSS.

Como en anteriores clases lo que tenemos que hacer es instalar el core de postcss y el loader de postcss y luego crear algunas configuraciones extras de post. Post tiene algo particular, donde tu configuras como funciona tu postprocesador, pero estás configuraciones son como pequeños modulos que tu le agregas a post y esos pequeños modulos también tenemos que instalarlos.

Tenemos un core de css que va a manejar estos modulos, pero no también tenemos que instalarlos, imaginemos esto como si fuera un mini-webpack pero solo dedicado a los estilos. Ahora si pasemoslo a nuestro proyecto.

Pasos:
1. Copiemos la carpeta del proyecto anterior y renombremos la copia de este con el nombre de nuestro ejercicio 'postCss-loader'.
2. Crear nuestra tarea en npm en nuestro packages.json
``
"build:postcss": "webpack --config ./postcss-loader/webpack.config.js"
``
3. Tenemos que instalar el core de post y el loader de postcss 
instalación:
``
npm install -D postcss postcss-loader 
``
4. Configuramos nuestro loader de postcss en nuestro webpack.config junto con el css-loader
```javascript
{
  test: /\.css$/,
  exclude: /(node_modules|bower_components)/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1
        }
      },
      'postcss-loader'
    ]
  })
},
```

Si haz trabajado con postcss sabras que los formatos de postcss o porque es tan popular es porque quiere asemejarce más a lo que es css en vez de alejarse y a hacer un nuevo lenguaje quiere asemjarce a como css haría las cosas pero aún así agregarle algunos features como las variables, los prefijos y todo estó que ya haciamos antes. 

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


### Configuración de plugin para PostCSS

Algo que siempre tenemos que tener cuando vamos a manejar un proyecto con postcss es un archivo de configuración, recuerdan que postcss es como un mini-webpack pero solo para css, entonces requiere su archivo de configuración donde le vamos a decir que pluguins va a adquirir, que features, para darle poderes a css le vamos a incluir, y ese archivo de configuración lo ponemos a la misma altura donde estamos importando nuestros archivos de css.

En la carpeta css vamos a añadir un nuevo archivo y este archivo se tiene que llamar 'postcss.config.js', y acá tenemos que configurarlo similar como con nuestro webpack.config, dentro de esto tenemos que poner que configuración.

```javascript
module.exports = {
  plugins: {
    'poscss-cssnext': {}
  }
}
```
Pero en la configuración colocamos un plugin, esto quiere decir que también tenemos que instalarlo y lo hacemos de la siguiente manera:

instalación:
``npm install postcss-cssnext``

Una vez hecho estó nuestro loader ya podra leer los archivos css con postcss.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Prevenir código duplicado

Uno de los temas más importantes dentro de optimización, tanto para el desarrollador como para nuestros usuarios, es esto de que nuestros bunddles no sean super gigantes y que no esten llenos de basura y para esto tenemos que eliminar el código duplicado tengamos dentro de nuestros paquetes y para este tenemos una opción que nos provee previamente webpack, empecemos a hacer esté ejercicio.

Para ello vamos a crear un nueva carpeta duplicada del ejercicio anterior y en este ejercicio la carpeta se llamará 'prevent-duplication'.
Vamos a crear nuestra tarea dentro de nuestro package.json 

¿Cuando va a ocurrir el código duplicado dentro de nuestros proyectos?

Porque en un caso de la vida real cuando tu tengas que manejar multiples entrypoints y quizas tu stack esté en vue, angular o react. Vas a ver que vas a importar react en el entrypoint1, en el entrypoint2, etc. Y vas a tenerlo duplicado en todos estos y si vas a hacer un bundle de cada uno de esos, entonces react se va a duplicar, o angular, etc. Aquí lo solucionaremos.

Vamos a entrar a nuestro ejercicio, vamos a ir a nuestro webpack.config, primero crearemos multiples entrypoints.
Una vez creados nuestros entrypoints, notamos que todos está importando react y esa es la dependecia, la libraría más pesada que tenemos en nuestro proyecto por ahora, en los 3 archivos estamos importando practicamente todo.

Ahora tenemos que decirle a webpack que si tiene alguna dependecia duplicada que me genere otro archivo unicamente con esas dependencias duplicadas y cargarlo como un segundo script dentro de nuestro html. Esto es muy sencillo, para esto lo que tenemos que hacer es importar a webpack, porque webpack ya viene incluido con está caracteristica. Lo siguiente que tenemos que hacer es jalarnos un plugin que ya viene incluido en webpack. 
```javascript
plugins: [
  // Aquí van los plugins:
  new ExtractTextPlugin("css/[name].css"),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common'
  })
]
```
Cada modulo que nosotros tenemos dentro de webpack es un Chunk(un pedacito), entonces esto lo que va a hacer es encontrar esos pedacitos comunes, como por ejemplo react o react-dom, y meterlos en un solo lugar, y podemos ponerle un nombre al archivo que se va a generar porque vamos a tener nuestros entrypoints y un archivo extra, y este archivo extra cargarlo con su output correspondiente, en este caso le vamos a poner 'common' o cualquier otra cosa.

Ahora podemos cargar nuestra tarea de npm y una vez generado que webpack detecte el código duplicado me creará este nuevo archivo llamado common. Lo único que tenemos que hacer es agregar este archivo common a los archivos que ocupan esté código que se duplica.

Esto nos va ayudar muchisimo cuando tengamos un proyecto muy grande con multiples entrypoints, porque vamos a tener un código que vamos a poder reutilizar en multiples páginas y tener el código especial de cada página que creamos como desarrolladores.

**Importante**

Webpack 4 acaba de salir hace unos días y mató a CommonsChunkPlugin ahora hay otra alternativa.

En resumen esto se hizo porqué Webpack 4 le dio con todo a la optimización (ahora es hasta un 98% más rápido).

Ahora el código que debería de usar para lograr lo mismo que Leonidas en el video:
```javascript
plugins: [
    // aquí van los plugins
    new ExtractTextPlugin("css/[name].css"),
    /* new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }) */
],
optimization: {
    splitChunks: {
        name: "common",
        chunks: "initial"
    }
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Eligiendo dependencias comunes 
Ya aparendimos a empaquetar todas las dependencias comunes dentro el proyecto de javascript, dentro de los multiples entrypoints ahora que tal si tu quieres elegir cual es ese código comun, cuales son esas librerías comunes, esos framewroks que instalaste y los quieres empaquetar pero tu estas decidiendo cuales es que son, yo quiero empaquetar jquery y anderscore, o react y react-dom. Esto lo podemos hacer y de eso se trata esta clase, primero voy a duplicar mi carpeta de prevent-duplaction y ponerle de nombre vendor. 

Vendor es una palabra bien común dentro de los proyectos en programación y más común dentro del munod de javascript para definiri como le ponemos a nuestro código común, antes lo que haciamos en la aplicaciones cuando las enviabamos a producción en el pasado era agarrar todas nuestras librerías jquery, todos lo plugins, jquery sus 100 plugins agarrabamos y los metiamos a un minificador, los poniamos juntos y eso nos entregaba un solo archivo es decir haciamos lo que hace webpack pero a mano así de doloroso era y lo llamabamos vendor a ese archivo generado te lo cuento como anecdota.

Entonces en nuestro vendor vamos a elegir que dependencias queremos empaquetar, lo que tenemos que hacer además de tener nuestra carpetita lista es hacer nuestra tarea de npm. 

``"build:vendor": "webpack --config ./vendor/webpack.config.js"``

Ahora empecemos a trabajar dentro de la carpeta de este proyecto en el webpack.config y tenemos que utilizar la misma dependecia de webpack para optimizar dentro de la optimización puedo ponerle más configuración como una que se llama 'minChunks', algo divertido de los vendors ya que vamos a elegir cuantos es los que vamos a incluir por defecto es que me ponga más de dos vendors es que recien se va a generar esto, pero gracias a esté parametro de configuración yo puedo hacer un paquete de vendors que solo tenga un vendor que es lo mismo que hacer nada, lo mismo que cargarlo como si fuera un archivo aparte pero claramente podemos.

```javascript
plugins: [
  // Aquí van los plugins:
  new ExtractTextPlugin("css/[name].css"),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
  })
]
```
Lo que hago con minChunks es que no importa el número de paquetes, el numero de modulos, el numero de chunks generame mi paquete de vendors y para configurar cuales son nuestros paquetes que vamos dentro de un vendor.js lo hacemos dentro de nuestro entrypoints. Asi que vamos a generar un nuevo key que se va a llamar vendor y acá le vamos a decir dentro de corchetes cuales son esas librería o frameworks que hemos instalado que queremos empaquetar, en nuestro caso tenemos 2 significativas; react y react-dom. que son las que utilizamos en nuestro proyecto, asi que podemos empaquetar y dejar todo el resto de código que nosotros hemos hecho dentro del proyecto que le queda a home y contacto. Como tiene el mismo código seguramente va a ser lo mismo, van a pesar igual ambos entrypoits cuando se generen, pero en un proyecto real seguramente tendrias diversos tamaños, pero si te ahorrarias el peso de react y react-dom.
```javascript 
entry: {
    vendor: [
      'react',
      'react-dom'
    ],
    index: ['babel-polyfill', path.resolve(__dirname, 'src/js/index.js')],
    home: ['babel-polyfill', path.resolve(__dirname, 'src/js/home.js')],
    contacto: ['babel-polyfill', path.resolve(__dirname, 'src/js/contact.js')]
  }
```
Ahora si podemos correr nuestro comando vendor.

En webpack 4 la nueva actualización mató al plugin chunks, ahora lo hace por defecto con una key llamada 'optimization' y para que tome la configuración debemos configurarlo así.
```javascript
optimization: {
    splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            chunks: "initial",
            test: 'vendor',
            enforce: true
          }
        }
    }
  }
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Optimizando el paquete de dependencias comunes

Muy probablemente te hallas dado cuenta de algo hasta esta clase y es que estamos actualizando esté paquete de dependencias comunes, pero ese paquete de dependencias comunes se esta creando cada vez que nosotros hacemos un build. Está bien ya que estamos optimizando para el cliente pero no estamos optimizando para los desarrolladores para que nuestro build sea más rápido. Para eso es este modulo y es mi forma favorita para empaquetar dependencias, los vendors, gracias al 'dllPlugin' de webpack que también es otro plugin que nos trae webpack incorporado, Dllplugin o Dinamic link Library, nos va a ayudar a generar esté paquete de vendors de archivos comunes de nuestras dependencias que debemos empaquetar en un archivo de confiuguración externo y luego un archivo de configuración que tiene nuestros entrypoints principales va a hacer la referencia a este archivo de dependencias comunes y no las va a volver a compilar y va a ser un enlace entre esos 2 archivos para que trabajen en sinergia, pero el de dependencias comunes solo tenemos que compilarlo 1 vez. Porque el react no cambia almenos que actualicemos la versión, el react-dom también, cualquiera de estas dependencias no van a actulizarse almenos de que las actualicemos dentro de nuestro package.json mientras que eln otro código es el que si vamos a estar cambiando cada vez que hagamos un nuevo deploy en nuestro proyecto, para esto nos sirve Dinamik link Library plugin.

Empecemos a agregarlo al proyecto, recuerdan que:
1. empezamos creando una carpeta para el ejercicio.
La carpeta será dll, no les ha pasado ha ustedes que de repente están windows estos archivos dll mágicos que si tus lo guardabas ya no funcionaba nada en windows, pues vamos a hacer lo mismo pues buena vamos a hacer lo mismo que harían esos archivos dentro de tu sistema que son enlases a otros programas para que funcionen muchisimo mejor. 
2. Bien vamos a ir a nuestro editor, vamos a crear nuestra tarea en nuestro package.json.
Aquí tenemos que generar 2 archivos de configuración:
- Uno que es el que ya tenemos y vamos a editar y otro que es el que va a generar solo el dll, así que no tenemos que duplicar esto solo una vez si no 2 veces.
- Vamos a hacer un paquete que nos va a hacer nuestros dll y va a hacer nuestro archivo webpack.dll.config.js, esté nos va a generar el archivo de paquetes comunes que solo vamos a transpilar o compilar 1 sola vez. 
- El segundo es el que no va servir a nuestra configuración y que vamos a compilar las veces que sean necesarias cada vez que actualicemos nuestro código  
``
"build:dll": "webpack --config ./dll/webpack.dll.config.js",
"build:dll:src": "webpack --config ./dll/webpack.config.js"
``
Los nombres que utilizamos para nuestras tareas o archivos son opcionales, no son estrictos y eso quiere decir que pueden llamarse como gusten.

3. Lo siguiente es hacer nuestro archivo de configuración, así que vamos a ir a crear ese archivo y lo que le vamos a poner de configuración es algo parecido a nuestro webpack.config.js así que vamos a copiar su configuración y aquí vamos a crear la propia configuración del dll.

Ahora si viene lo chido y es que vamos a utilizar el plugin de dll y la documentación de webpack nos dice que tenemos 2 partes: "DllPlugin" y "DllReferencePlugin".
- DllPlugin: nos va a servir para generar nuestro archivo o bundle de dependencias comunes y luego darle cierta configuración que va a entender el archivo principal. Y este archivo principal va a exportarme un archivo JSON que va a ocupar el archivo principal con DllReferencePlugin
- DllReferencePlugin: Aquí es donde tomará el archivo principal. 

Algo que vamos a querer hacer dentro del dll es: poner que lobrarias queremos empaquetar, pero estas librerias ya tienen como su modo compilado en código que entiende el navegador, así que no hace falta que tengamos algun tipo de loader, al menos que tenga código que si tenga que interpretar pero probablemente eso no sea necesario: en el caso de react y react-dom esto no va ha ocurrir, así que _podemos suplir la parte de todos nuestros loaders y lo que si nos va a servir es la parte de nuestros plugins donde vamos a configurar nuestro Dll_
```javascript
plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ],
```
Así que en esté archivo vamos a quitar los plugins que no ocuparemos y dejaremos nuestro pluginDll es cúal es un plugin que viene de webpack, así que desde acá vamos a poner la configuración. Y DllPlugin va a recibir un parametro importante que se llamá **path:** en esté párametro le vamos a decir donde vamos a exportar el archivo JSON que le va a servir a mi archivo de configuración inicial para que entienda cuales son esas rutas que tiene mis dependecias comunes un archivo JSON, 

Cuando usamos join estamos uniendo rutas donde el primer párametro es la ruta actual de nuestro directorio que le anexa el nombre del archivo que queremos leer, como el archivo se crea dinámicamente usamos el comodin de "[name]-manifest.js", donde le estamos diciendo que el nombre del archivo que es heredado por el key name: [name] que es el mismo archivo que estamos generando al compilar. Este archivo nos va a servir para configurar otra cosa por eso es recomendable que se llame **[name]-manifest.js**.

También recibe otro párametro que es **name:** esté name es que nombres vamos a exportar para que puedan ser utilizados en el otro lado como referencias entonces es muy importante esto y vamos a exportar [name].

Lo que tenemos que hacer adicionalmente ya que vamos crear un paquete que va a recibir cierto nombre y va a tener ciertas dependencias, es configurar nuestras dependencias, entonces en los entry ya no necesitamos poner los multiples entrypoints que tenía, de lo contrario también las generaría en nuestra carpeta dist. 
También podemos ponerle un nombre a como se va a llamar nuestra dependencia final que va a tener esté paquete, hasta la clase anterior se llamabá 'vendor' pero que tal si ahora le cambiamos el nombre a modules. Otra cosa muy importante que tenemos que hacer ya que vamos a liberar un archivo es archivo lo tiene que entender el navegador y tiene que estar con una referencia global para que para que lo pueda entender el segundo archivo que va a interpretar el código.

**¿Y como lo hacemos?** Lo hacemos **_con un párametro en output_** que se llama **'library:'** y esté párametro de library va a recibir el nombre de **'[name]'** también para que sea dinámico. _¿Entonces que quiere decir esto?_ que nuestro library se va a llamar **modules** porque recordemos que el filename: recibe el nombre de los nombres dinamicos que tenemos por acá, entonces library recibiría el nombre dinámico que es modules...

Así quedaría la configuración final del DllPlugin:
```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    modules: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ],
}
```
En lo que tiene que ver con nuestro archivo dll creó que ya estamos perfectos, entonces sin más guardamos por acá y toca exportar nuestro archivo de Dll corriendo el comando ``npm run build:dll``

Una vez compilada nuestra tarea nos genera un archivo modules.js y ese archivo está dentro de 'dist/js/modules.js' el cúal peso 903kb ahí tenemos todo nuestro código de react y react-dom. Y lo siguiente que ha generado es un archivo JSON, nuestro manifest donde le está diciendo donde esta ubicada todas las cosas que necesita la librería para enlazarse con nuestro código, realmente no necesitamos entender que está ocurriendo por acá, simplemente son referencias a rutas.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Enlazando un Dynamic Link Library (DLL)

Ya tenemos nuestro paquete de dependencias comunes, nuestro dll o dinámic link library, y ahora tenemos que enlazarlos con nuestros entrypoints originales con nuestro home, contact, y todos los que tengamos para que lo consuman, y esto lo hacemos desde nuestro webpack.config.js y dentro de estó vamos a consumirlo utilizando originalmente el plugin, recuerdan que viene de webpack y está es la segunda parte del plugin.

Vamos a quitarle la parte de la optimización en webpack 4 o  el plugin: chunks si es webpack 3 que es la técnica que aprendimos en las clases anteriores.
```javascript
plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]
```
Esté plugin como su nombre lo dice va a hacer una referencia a un archivo dll y está referencia es el archivo que generamos acá: 'modules-manifest.json', y ese archivo lo vamos a llamar desde acá porque uno de sus keys principal es **'manifest:'** aquí le tenemos que decir donde está ese archivo y que lo importe al proyecto y lo importamos con require.

Ahora que ya tenemos la configuración del dllreferenceplugin tenemos que probar esto dentro del navegador y ver si realmente se están enlazando mis archivos. También **es importante quitar la parte de los vendors** para evitar que se vuelvan a compilar o evitar que marque un error.

Veremos que nuestros outputs generados de home, index y contacto pesan muy poco a comparacion de lo que pesaban antes de empaquetar los archivos comunes, y ahora el proceso es mucho más veloz ya que los archivos comunes solo se compilan 1 vez y lo único que estamos compilando son los archivos que nosotros creamos.

Nos hemos ahorrado tiempo y rendimiento para nuestros usuarios porque estás librearías ya que no van a cambiar se pueden cachar dentro del navegador y el usuario ya no necesita cargarlas constantemente cada vez que hagamos un deploy. Cuando hagamos un deploy ellos van a recargar el código del home, el contact, etc. Pero no van a volver a cargar el código de los modulos, el código del dll, porque ya el navegador hace cache de eso. 

Veamos aquí que para que se enlase este archivo de modulos con nuestro archivo de home tiene que hacerlo de alguna manera dentro del navegador porque tiene que juntarse el archivo 'modules.js' de nuestras dependencias comunes junto con el archivo output es decir que nuestro código hace invocaciones a codigo que esta en el archivo 'module'.

**¿Y como lo hace?** La única manera de hacerlo es que esté archivo tenga alguna variable global dentro del navegador, así que cual es esa variable global dentro del navegador: _Es el nombre que le pusimos y como estamos externalizando esté proyecto_ y se llamá **'modules'**. 
En la configuracíon del webpack.dll.config.js en el output con el key **'library:'** le estaba diciendo a nuestro paquete que exporte una variable global que se llamé como el nombre que tiene esté entrypoint y nuestro entrypoint se llama 'modules'. Y es por eso que en el navegador tenemos una variable global que se llama modules y de esa forma home tiene manera de hacer referencia a nuestro dll que al final del día se llama 'modules.js'

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

---
## Cargando módulos de forma Asincrona.
---

###<span style="color:blue;">¿Porque queremos hacer esto?</span>

A pesar de comprimir nuestros modulos hay librerias que no se pueden omitir de la primera carga del navegador. Pero que tal si vas a navegar a una nueva página, si quieres cargar modulos recien cuando hagas la navegación o cuando hagas determinada acción o por lo menos cargar algún polyfil con cierta condición del navegador por ejemplo: el navegador no soporta cierta cantidad de alguna librería que estamos utilizando como internalización con el modulo intel, y si no lo soporta queremos cargar una librería pero no quiero sumarle ese peso a el bundle de archivos comunes ni al bundle de los entrypoints normales sino quiero cargarla si y solo sí se cumple esa condición porque no queremos cargarle ese peso a los clientes que si tienen un navegador decente y si soportan esa api del navegador. Para esto tenemos los imports dinamicos asincronos y la parte donde vemos que ya no solo es un paquete con todo incluido sino que ya podemos ir cargando cosas en demanda por eso webpack es increible.

1. Primero cargaremos crearemos una carpeta dll para el hacer el ejercicio 'dynamic-imports'
2. Configuraremos nuestra tarea en webpack ``"build:dynamic": "webpack --config ./dynamic-imports/webpack.config.js"``
3. vamos a editar nuestro index.js donde vamos a tratar de cargar un modulo cada vez que el usuario haga algo, en esté vamos a hacer que el modulo se cargue cuando el usuario oprima un botón, en esté caso va importar un modulo que contiene una función la cual dispara un alerta al navegador.
```javascript
const $button = document.getElementById('dynamic-import');
$button.addEventListener('click', async (event) => {
  console.log('Haz hecho un click');
  const { default: alerta } = await import('./alerta.js');
  alerta();
});
```
El modulo alerta:
```javascript
function alerta() {
  alert('He cargado mágicamente');
}
export default alerta;
```
Si nosotros compilamos de está manera tal cual nos marcará un error porque esta sintaxis ya la tenia recervada nuestro loader de babel para interpretar nuestro código javascript y ya tenia reservada esta palabra para el mismo, está forma de importar para el mismo, para esto tenemos que importar un plugin más de babel para darle soporte a los imports dentro de código javascript.

Plugin: @babel/plugin-syntax-dynamic-import

instalación:
``npm install --save-dev @babel/plugin-syntax-dynamic-import``

Se recomienda crear un nuevo archivo llamado babelrc desde donde se encuentra la configuración de webpack.config.js para que de ese modo le agregemos todos los plugins de babel a ese archivo. También podemos omitirlo y agregar la configuración de los plugins directamente a nuestro babel-loader.

babelrc:
```json
{
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```
Si no lo queremos hacer así podemos agregar un nuevo key a el loader y agregar el plugin:
```javascript
{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      }
```
Cuando compilemos nuestro archivo notaremos que se crea un archivo 0.js esté archivo contiene el código de nuestro modulo que exportamos aparte porque es un chunk unico que se va a exportar cuando yo le de click al boton.

Aunque ya compilo los archivos no podemos cargar nuestro modulo ya que tenemos un problema ya que tenemos que configurar donde es que estas estos archivos y como se tienen que cargar.

<span style="color:blue;">¿Como configuramos esto?</span>
Ya lo habiamos hecho en clases pasadas, que sería en el output: donde tenemos que ponerle nuestro publicPath: que sería donde va a ubicar nuestros archivos de javascript, como no lo teniamos configurado fue que lo intento buscar en el archivo raíz. Otra cosa que podemos configurar con los dynamic-imports es como se van a exportar estos pedacitos de código cuando yo haga el bundle y esa es otra configuracion que yo puedo configurar el el output y se llamá chunkFilename: y aquí le vamos a decir que nombre va a recibir esos archivos que estamos exportando porque ahora decia 0.js.

```javascript
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: path.resolve(__dirname, 'dist')+'/',
    chunkFilename: 'js/[id].[chunkhash].js',
  }
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Llevando un proyecto real a Webpack - preparación del entorno
---
Ahora ya sabes todo lo que necesitas para llebar tus proyectos a webpack que tal si empezamos con un ejercicio y vamos a llebar un proyecto real que hicimos en el curso de animaciones que se llama invie, donde hicimos un proyecto que si teclamos a invie este se empieza a animar, el cual esta construido con react.

Como se hizo con rect y lo que se pretendía enseñar eran las animaciones hicimos todo el bundlerplay y toda la configuracion de webpack para que compilen los archivos Ecmascript6, etc. **Lo hicimos con un proyecto que se llama create-react-app**, con estó podemos empezar con un boilerplay **para empezar nuestra apliacion con react** y sin tener que estar configurando tantas cosas y para ser más especificos **sin tener que estar lideando con webpack**.

Asi que vamos a extraer este proyecto y lo vamos a hacer nosotros desde 0 haciendo las configuraciones de webpack.

1. Primero debemos crear un area de trabajo para el proyecto es decir un archivo.
2. Posicionados en el archivo debemos iniciar un nuevo proyecto de NPM
``npm init``
3. Le damos las configuraciones necesarias para crear nuestro archivo JSON.
4. Debemos copiar las dependencias de nuestro proyecto anterior en el JSON que acabamos de crear.
```json
"dependencies": {
    "cheet.js": "0.3.3",
    "react": "16.7.0",
    "react-dom": "16.7.0",
    "react-redux": "6.0.0",
    "react-scripts": "2.1.3",
    "react-transition-group": "1.2.1",
    "redux": "4.0.1"
  },
```
No vamos a profundizar en estas dependencias, en este caso son las necesarias para que nuestro proyecto pueda funcionar.
5. Instalamos las depencias haciendo ``npm install`` .
6. Copiamos nuestros código funente y todo nuestros assets al proyecto.
7. Ahora tenemos que configurar Webpack, para ello debemos saber que loader y plugins vamos a ocupar ya que esto es neceario para que carguen los archivos que tenemos.
En esté proyecto las dependicias de desarrollo que ocupamos fueron las siguientes:
```json
"devDependencies": {
    "@babel/core": "7.0.0",
    "@babel/plugin-proposal-object-rest-spread": "7.4.4",
    "@babel/polyfill": "7.0.0",
    "@babel/preset-env": "7.4.5",
    "@babel/preset-react": "7.0.0",
    "babel-loader": "8.0.6",
    "css-loader": "2.1.1",
    "extract-text-webpack-plugin": "4.0.0-beta.0",
    "file-loader": "3.0.1",
    "url-loader": "1.1.2",
    "webpack": "4.32.2",
    "webpack-cli": "3.3.2",
    "webpack-dev-server": "3.5.1"
  }
```
En esta configuración estamos soportando
1. El core de babel necesario es como el motor de javascript 
2. Plugin para soportar spread operator de javascript
3. Babel polyfill necesario para crear nuestros entrypoints
4. Loader para soportar las actualizaciones de código de Ecmascript recientes.
5. PresetReact: Necesario para usar código de react.
6. babelLoader: loader necesario para compilar nuestro js.
7. css-loader: para soportar archivos css si agregamos configuracion especial soporta postcss
9. webpack: Motor de webpack que se encargara de leer nuestros loaders y plugins.
10. webpack-cli: Neceario para soportar algunas configuraciones de webpack.
11. webpack-dev-server: Este es un Servidor de archivos estáticos el cual nos va ayudar mucho en el desarrollo ya que renderiza al instante nuestros archivos con solo darle ctrl-s

### Configurando webpack.config del proyecto

Ahora que ya instalamos nuestras dependencias y esta todo listo procedemos a configurar nuestros plugins y loaders:

1. Creamos nuestro archivo 'webpack.dev.config.js' Esté archivo puede tener cualquier nombre aunque es recomendable que sea un nombre especifico con su funcion, en este caso decidimos ponerle así porque es un archivo de configuración para el desarrollo.

configuración:

```javascript
module.exports = {
  mode: 'development',
  entry: {
    invie: ['babel-polyfill', path.resolve(__dirname, 'src/invie.js')],
    index: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 9000,
    publicPath: path.resolve(__dirname, '/'),
    contentBase: path.join(__dirname, '/dist/'),
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-object-rest-spread"]
        }
      },
      // Solo para desarrollo
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      // usar para produccion.
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      {
        test: /\.(jpg|png|gif|svg)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
  ]
}
```

Expliquemos brevemente los keys:

1. Primeramente tenemos que exportar nuestra configuración por eso ocupamos nuestro **module.exports = {}**
2. El primer key: '*mode'* que es obligatorio ya que de ese modo le estamos diciendo a webpack que es una configuración de desarrollo.
3. *Entry:* Aquí vamos a agregar la configuración de los archivo que queremos convertir, es decir nuestros archivos fuente que luego webpack se encargará de transpilar.
4. *Output:* Son archivos de salida, aquí recibe la configuración necesaria para saber en donde podra los archivos compilados y el nombre que va a recibir, también otras configuraciones como variables de entorno.
5. *DevServer*: este key solo es necesario si estamos ocupando webpack-dev-config ya que esta es la configuración de nuestro servidor de estáticos, la configuración es muy basica aunque la más importante de entender es el ``contentBase: path.join(__dirname, '/dist/'),`` que es donde va a hacer watch de los archivos que estan cambiando. en este caso ponemos dist porque ahi quiero que actualice si escucha cambios. Otro importante es ``publicPath: path.resolve(__dirname, '/'),`` que lo que hace es saber en que directorio deseamos correr el servidor.
6. *Module:* este key es un objeto que recibira reglas o **rules** y adentro de rules pondremos todos nuestros loaders que vallamos a querer agregar.
7. Por último sería *Plugins*: es la parte donde vamos a agregar plugins espaciales de webpack.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Configuración para entornos de Producción.

Ya tenemos nuestra configuración lista para que al momento de escribir código lo hagamos de una manera muy rápida ahora que tal si queremos llevar esta rapidez pero al navegador, que el navegador entienda nuestra aplicación muy rápido y que nuestros usuarios carguen la aplicación de esa misma manera, para esto tenemos nuestra configuración de producción.

Vamos a heredar lo que tenemos de nuestra configuración de desarrollo en un archivo al cual le llamaremos 'webpack.config.js'

En producción no queremos que nuestro css se imprima y se ponga solo en tiempo de ejecución es decir cuando cargue nuestro archivo javascript principal, no queremos que lo ponga en la etiqueta style. Queremos que se genere un archivo css y ese también cargue en el navegador, para ello tenemos que modificar nuestro loader de css y usar algunos plugins. 

configuración de producción:
```javascript
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  let plugins = [
    new ExtractTextPlugin("css/[name][hash].css"),
  ]
  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {
    mode: 'production',
    entry: {
      invie: ['babel-polyfill', path.resolve(__dirname, 'src/invie.js')],
      index: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: path.resolve(__dirname, 'dist')+'/',
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
      publicPath: path.resolve(__dirname, '/'),
      contentBase: path.join(__dirname, '/dist/'),
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        },
        // usar para produccion.
        {
          test: /\.css$/,
          exclude: /(node_modules|bower_components)/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                // options: {
                //   minimize: true,
                //   modules: true
                // }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[hash].[ext]'
            }
          }
        }
      ]
    },
    plugins
  }
}
```

Package.json

```json
{
  "name": "invie-webpack",
  "version": "1.0.0",
  "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:dev:server": "webpack-dev-server --config ./webpack.dev.config.js",
    "build:dev": "webpack --config ./webpack.dev.config.js",
    "build": "webpack",
    "build:local": "webpack --env.NODE_ENV=local",
    "build:prod": "webpack --env.NODE_ENV=production"
  },
  "author": "Jasan Hernández <jasan814@gmail.com> (https://twitter.com/jasan_azael)",
  "dependencies": {
    "@babel/plugin-transform-runtime": "7.4.4",
    "babel-preset-stage-2": "^6.24.1",
    "cheet.js": "0.3.3",
    "react": "16.7.0",
    "react-dom": "16.7.0",
    "react-redux": "6.0.0",
    "react-scripts": "2.1.3",
    "react-transition-group": "1.2.1",
    "redux": "4.0.1"
  },
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "7.0.0",
    "@babel/plugin-proposal-object-rest-spread": "^7.4.4",
    "@babel/plugin-proposal-pipeline-operator": "7.3.2",
    "@babel/plugin-transform-spread": "^7.2.2",
    "@babel/polyfill": "7.0.0",
    "@babel/preset-env": "7.4.5",
    "@babel/preset-react": "7.0.0",
    "babel-loader": "8.0.6",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "clean-webpack-plugin": "^0.1.17",
    "css-loader": "2.1.1",
    "extract-text-webpack-plugin": "4.0.0-beta.0",
    "file-loader": "3.0.1",
    "url-loader": "1.1.2",
    "webpack": "4.32.2",
    "webpack-cli": "3.3.2",
    "webpack-dev-server": "3.5.1"
  }
}

```

Es importante tener en cuanta que demos usar el "clean-webpack-plugin@0.1.17" ya que la actualización no permite poner la configuración que establecimos acá.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>