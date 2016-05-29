# First Angular CLI App

![angular-cli](http://www.flaviocorpa.com/content/images/2016/05/post.png)

Recuerdas el [post](http://www.flaviocorpa.com/aprende-angular-2-en-5-minutos/) que hice hace poco sobre Angular 2? Aunque es verdad que  se tardaba unos 5 minutos en leer el artículo (pese a lo que diga el algoritmo de tiempo estimado de lectura), realizar el tutorial paso a paso podía llevar entre **40 min y 1h...** 

Y no es que me haya salido un post demasiado espeso, es que precisamente una de las cosas más criticadas de Angular 2 han sido *su complejidad a la hora de empezar y montar proyectos*, sobre todo para principiantes. Pero el ***Angular Team*** no podía dejar las cosas así...

# Llega Angular CLI

Para quien no esté familiarizado con la nomenclatura, *CLI* se refiere a una interfaz de línea de comandos (*Command Line Interface*, en inglés), y ésta en concreto está diseñada y pensada para **guiar todo el proceso de creación de una app en Angular 2**.

De hecho, tanto si seguiste el tutorial que he mencionado antes como si eres nuevo en el blog, te invito a que sigas los pasos de este post. Volveremos a hacer la misma aplicación sobre ***pintores famosos***, pero esta vez, utilizando Angular CLI.

> Siguiendo este tutorial, pasaremos de tardar ~40 min a 30s en empezar con el proyecto con **sólo 3 comandos**

# Antes de nada

Bueno, obviamente y antes de entrar al trapo, necesitamos tener instalado en el ámbito **global** de nuestro equipo el angular-cli (este comando no cuenta :P)

```sh
npm install -g angular-cli
```

# El primer comando

Una vez hecho esto, ya podemos inicializar nuestra primera app en Angular 2:

```sh
ng init famous-painters
```

Aquí es donde empieza toda la **magia** de la aplicación y nos hace un ***scaffholding*** increíble con *un montón de ficheros que no vamos a explicar en este tutorial*.

![ng init](http://www.flaviocorpa.com/content/images/2016/05/cli1.png)

Observarás una estructura de ficheros que tal vez te resulte extraña al principio, ya que la aplicación está preparada para **routing, http, componentes separados por directorios, unit tests, e2e tests...** Sin embargo y por fortuna, todos estos ficheros generados siguen la [guía](https://angular.io/styleguide) de estilo oficial de Angular 2, y seguirán siendo actualizados a medida que dicha guía se modifica.

> Por lo tanto, utilizar Angular CLI implica seguir automáticamente la guía de estilo oficial de Angular 2

Es curioso que este primer comando crea por defecto el `AppComponent`de la aplicación por nosotros y de esta manera tenemos listo el punto de entrada a nuestra aplicación. 

Podemos repartir nuestro código que crea la lista de pintores famosos en los siguientes ficheros:

 - **src/app/famous-painters.component.ts** - La clase del main component
 - **src/app/famous-painters.component.html** - El template de nuestro componente, con una pequeña acualización[^n]:

```markup
<li *ngFor="let p of painters" ...></li>
```
 - **src/app/famous-painters.component.css** - Los estilos para el componente (nuestro anterior `style.css`)

# El segundo comando

Como estamos creando nuestra típica aplicación **master/detail**, queremos volver a recuperar nuestro componente para ver el detalle de cada pintor... coser y cantar!

```sh
ng generate component painter-detail
```

Veremos los siguientes ficheros generados

![ng generate component](http://www.flaviocorpa.com/content/images/2016/05/cli2.png)

Nuevamente volvemos a **reutilizar** nuestro código anterior para rellenar este componente para darle la funcionalidad que queremos.

> Ojo! Al generar el componente desde el CLI el selector por defecto ya no es `my-painter-detail` sino `app-painter-detail`!

# El tercer (y último) comando

Una vez conectados los componentes de la **lista/detalle** ya sólo tenemos que volver a crear nuestro *servicio*

```sh
ng generate service painter
```

Que genera los siguientes ficheros

![ng generate service](http://www.flaviocorpa.com/content/images/2016/05/cli3.png)

Añadimos nuestro **mock**[^n] que devuelve la lista de pintores estática y ya hemos terminado!

Aunque ya hayamos terminado con nuestro ejemplo, afortunadamente **sólo estamos rasgando la superficie del Angular CLI**, con el que podemos hacer cosas como:

- Crear un nuevo componente
- Crear una nueva directiva
- Crear una nueva ruta
- Crear un nuevo filtro (pipe)
- Crear un nuevo servicio
- Hacer deploy a Github Pages

Y mucho, mucho [más](https://github.com/angular/angular-cli#table-of-contents)...

# Resultado final

Para ver cómo ha quedado nuestra preciosa obra de arte, utilizamos el comando

```sh
ng serve
```

Este comando compilará todos los archivos, los distribuirá en la típica carpeta `dist` y por último iniciará un servidor corriendo en [`localhost:4200`](//localhost:4200) donde podremos ver el resultado de nuestro arduo trabajo! *(Si es que a picar 3 comandos se le puede llamar arduo...)*

Puedes ver el resultado final en [este](https://kutyel.github.io/famous-painters/) enlace así como ver el código terminado en el [repo](https://github.com/kutyel/famous-painters) que he creado en GitHub.

# ¡Importante!

Ya que gracias al Angular CLI tenemos el proyecto **actualizado a la última versión de Angular 2**, los próximos posts que tengo en mente (*como el nuevo **router** y cómo usar el nuevo **http** con observables*) los realizaré utilizando este proyecto como punto de partida, para poder **seguir donde nos quedamos**. 

Por lo que te invito a hacerlo en los **5 min** que vas a tardar para poder seguir el hilo si te apetece ;)

# Feedback

Espero que este tutorial te haya resultado útil y que haya incrementado tus ganas de empezar con Angular 2 y sobre todo de **seguir trasteando con Angular CLI!**

Si tienes cualquier duda o simplemente te gustaría dar algo de feedback siéntete libre de hacerlo en los comentarios y por favor *comparte* este post con cualquiera a quien le pueda interesar... aunque, si de verdad me quieres hacer un favor, haz *click* en la publicidad que aparece en la página para pueda seguir **manteniendo** esta web y seguir compartiendo toda esta información que tanto me entusiasma en español. 

¡Gracias de antemano y nos vemos pronto!

---

 - A partir de la Release Candidate, la sintaxis para el ngFor cambio de una almuadilla (#) al keyword 'let'.
 - Sí, yo también estoy harto de hacer *mocks* para imitar el funcionamiento de un servidor REAL, no te preocupes, dentro de **dos posts** estaremos llamando a un servicio web de verdad, prometido ;)
