# Bienvenido a tpfinal

Hola bienvenido/a tpfinal.  Se trata de una aplicación web que consiste en mostrar una lista de productos según su categoría y poder acceder al detalle de cada producto.  Es una aplicación de react que utilza las librerías bootstrap y react-router-dom principalmente.

## Instalación

Clonar el codigo a una carpeta local (https://github.com/furteaga77/tpfinal.git) y abrir la carpeta con VS-CODE (recomendable), abrir una terminal y correr el comando npm install para instalar las dependencias. Luego ejecutar npm start para verificar el correcto funcionamiento
Abrir [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.
La aplicación hace hot reload cuando tu realizas modificaciones sobre el código fuente, esto te permite, si compila bien, visualizar esas modificaciones sin reiniciar la app.\

## Sobre el Código

Se implementó un navbar con un logo y un menú con distintas categorías además del HOME obviamente, a saber: Ofertas, Almacén, Bebidas.  Se navega a través de componentes desarrollados utilizando las funciones que provee el React Router y otras propias que se basan en estas.  En el HOME por un lado, y luego en cada categoría, se muestra una lista de productos, distinta, que ha sido hardcodeado en un data.js.  Cuando se hace click en un producto determinado se muestran los datos de ese producto particular.  Se utilizó el componente ProductsList para mostrar la lista y el componente Product para el detalle.  Con está aplicación puede observarse muy bien, si se presta atención a las direcciones URL que genera cada link, como es el pasaje de parámetros a través de URLparams, en las distintas posiciones, ya sea detrás de / o detrás de ?.

## Alcance funcional

Puntos contemplados en el proyecto:

 - Barra de navegación con las categorías a mostrar y el HOME.
 - Home con productos destacados.
 - Listado de productos filtrado por categorias, el presionar en una categoria te dirige al listado recuperando de data.js solo los productos que pertenecen a dicha categoria.
 - Detalle de producto recuperando los datos de data.js por id de producto.

> Written with [StackEdit](https://stackedit.io/).
