## Curso de Webpack

Solo parte de un archivo JavaScript por página y en ella empieza a importar todos los modulos de tu aplicación, que tal si quieres escribir el código más limpio usando lo último de de JavaScript y también babel para darle soporte a todos los navegadores y ya entrados en gastos, porque no usar: Sass, Less, Styluss o PostCSS para generar nuestra hoja de estilos, por supuesto que puedes hacerlo con webpack, que tal si quieres hacer que se recargue el navegador al mismo tiempo cuando recargues tu código, con webpack es posible, y que tál si cuando estés listo para enviar tus cambios a producción, Comprimimos todo estó al máximo para que nuestra aplicación cargue como el rayo, nuestros usuarios estarán felices con el resultado y tú estarás orgulloso de todo el proceso, webpack es sin duda la herramienta con la que desarrollaras tu experiencia como desarrollador.

### Instalación de Entorno

Ya se que tu quieres empezar a empaquetar tus modulos y utilizar webpack en forma, pero primero tenemos que instalar el entorno y lo principal o lo que corre cualquier cosa echa en JavaScript en el Servidor en esté caso es Node.js. Porque tenemos que instalar algo dentro de nuestro computador en el cuál vamos a utilizar webpack, entonces está será nuestra dependecia principal, tenemos que instalar Node dentro de nuestro sistema, en lo cual vamos a tener instalado npm y gracias a npm, vamos a poder descargar otros modulos como: jQuery, React, Viue, etc. 

Tenemos 2 opciones de descarga:
La versión: LTS que es la producción listo para ser utilizado en cualquier entorno.
La versión: Current es la versión de la gente que vive al limite que tiene los nuevos features que es la versión actual.

Las dos funcionan bien y el curso lo pueden seguir con cualquiera de las 2 versiones.

### Iniciar nuestro proyecto

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

### Usando NPM

Ahora procedemos a instalar webpack, para ello ocuparemos npm, y ¿como hacemos la instalación con Npm? Lo hacemos de la siguiente manera desde la terminal:
``npm install nombreDelPaqueteAInstalar``

version especifica del paquete:
``npm install nombreDelPaqueteAInstalar@versiondelPaquete``

Configuración extra
``npm install webpack --save-dev``

Primero --save nos va a ayudar a guardar esté paquete y que se guarde dentro de nuestro package.json, el siguiente flag: -dev hara que se guarde esa dependencia pero como una dependecia de desarrollo porque webpack si bien nos va a ayudar a lo largo de todo esté curso solo nos va empaquetar nuestro archivo para desarrollo no va a ser una dependecia que vamos a utilizar está dependicia que vamos a utilizar dentro de producción como por ejemplo react, viue, agular, etc.

### Webpack

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

### Multiples EntryPoints

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

### Iniciar un Servidor de Desarrollo.

Hasta esté momento cada vez que hacemos un cambio a cualquiera de nuestros modulos nos toca irnos a la terminal y volver a compilar nuestro archivo de webpack, que tal si arreglamos eso, cada vez que haiga un cambio se actualice el archivo automaticamente, y que podamos ver los cambios inmediatamente en el navegador, para eso tenemos 2 cosas, hacerle un watch a nuestra tarea de webpack o crear un Servidor de desarrollo que también haga este watch pero al mismo tiempo que actualice el navegador sin que tengamos que darle F5.

