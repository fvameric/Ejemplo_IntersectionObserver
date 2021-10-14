Ejemplo muy básico del uso de Intersection Observer.

## Intersection Observer API
Esta API nos ofrece una manera asíncrona de observar elementos DOM cada vez que aparezcan en el viewport (la parte que se muestra por ventana o toda la pantalla si estuviéramos en pantalla completa).

Esta API nació en contramedida a los métodos tradicionales para calcular posiciones y evitar las consultas intensivas al estado de cada DOM.

<div align="center">
    <img src="images/intersectratio.png">
</div>

Nos puede servir para:
- Cargar imágenes u otro contenido a medida que hacemos scroll (como en webs con desplazamiento infinito donde más y más contenido se carga y se muestra).
- Asegurar la visualización de anuncios.
- Implementar lógica, como activar animaciones o no dependiendo de si el usuario verá algún resultado.

Jugando con sus propiedades podemos utilizar otras funcionalidades, como por ejemplo el uso de threshold (umbral) para capturar los porcentajes de visibilidad. En otras palabras, conforme una caja se vaya mostrando, podemos detectar si se está visualizando un poco, la mitad, mucho o toda la caja. [Ejemplo](https://codepen.io/thisisjofrank/pen/pdQzMr) en Codepen.

En Angular (posiblemente) también veremos el uso de Observables para tener una manera de subscribirnos a una serie de datos, así como el uso de operaciones asíncronas.

## Links de interés:
- [Intersection Observer API MDN Web Docs](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)
- [Viewport MDN Web Docs](https://developer.mozilla.org/es/docs/Glossary/Viewport)
- [Intersection Observer W3C Working Draft](https://www.w3.org/TR/intersection-observer/)
- [Intersection Observer de Google Developers](https://developers.google.com/web/updates/2016/04/intersectionobserver)

## Angular Observables
- https://angular.io/guide/observables
- https://angular.io/guide/observables-in-angular
