export const mdData = {"credits":{"attributes":{"name":"credits"},"body":"# Créditos\n\nEsta colección fue creada por [Sergio Rodríguez Gómez](https://srsergiorodriguez.github.io/).\n\nBasada en la plantilla [Serie Mini](https://github.com/srsergiorodriguez/serie-mini), para la creación de colecciones digitales, creada por [Sergio Rodríguez Gómez](https://srsergiorodriguez.github.io/).\n\nLas imágenes provienen del [Rijksstudio](https://www.rijksmuseum.nl/en), la colección digital del Rijks Museum de Países Bajos. Todas las imágenes usadas están en el dominio público.","bodyBegin":5,"frontmatter":"name: credits"},"explore":{"attributes":{"name":"explore","galleryFilters":["label"]},"body":"# Explorar\n\nUsa los componentes interactivos para explorar los ítems de la colección:\n\n<!-- La barra de búsqueda y la galería se cargan automáticamente -->","bodyBegin":6,"frontmatter":"name: explore\ngalleryFilters: [\"label\"] ## Lista metadatos para ampliar el filtro de la galería. p.e. [\"pid\", \"label\"]"},"metadata":{"attributes":{"name":"metadata"},"body":"# Metadatos\n\nEn esta sección se encuentran los metadatos de la colección. Pueden descargarse y usarse libremente.\n\n## Protocolo\n\nEste es el protocolo que especifica la construcción de los datos de la colección:\n\n| Dato   | Descripción                                                                     |  Tipo      |\n|---     |---                                                                              |---         |\n| pid    | Identificador único                                                             | categórico |\n| label  | Nombre de la obra. Iniciales con mayúsculas                                     | categórico |\n| autor  | Autor de la obra. Inciales con mayúsculas, incluir acentos                      | categórico |\n| fecha  | Año aproximado de producción de la obra. Escrito en número completo (p.ej 1589) | ordinal    |\n\n<!-- La tabla de metadatos se carga automáticamente -->","bodyBegin":5,"frontmatter":"name: metadata"},"home":{"attributes":{"name":"home"},"body":"# Introducción\n\nEsta es una plantilla para la creación de coleciones culturales digitales basada en Svelte\n\nEs similar a otros sistemas de computación mínima, como [Wax](https://minicomp.github.io/wax/) o [Collection Builder](https://collectionbuilder.github.io/), pero tiene como fin ser una herramienta educativa para las humanidades digitales acerca de conceptos esenciales relacionados con colecciones digitales (metadatos, ítems, protocolos, narrativas).\n\nEn particular, Serie Mini tiene las siguientes características:\n\n- Interfaz en español\n- Es fácil de instalar (El código está basado en Svelte, no en Jekyll. No requiere contentedores de Docker)\n- Fácil de usar (Tiene una interfaz CLI que guía en el proceso de configuración y todos los elementos de la colección se disponen en una carpeta particular)\n- Fácil de publicar en Github Pages por defecto","bodyBegin":5,"frontmatter":"name: home"},"tour":{"attributes":{"name":"tour"},"body":"# Recorrido por la colección\n\nEsta colección de muestra recopila varias imágenes con representaciones alegóricas de América hechas tomadas de [Rijksstudio](https://www.rijksmuseum.nl/en), la colección digital del Rijks Museum de Países Bajos. Todas las imágenes usadas están en el dominio público.\n\nUsa este archivo para incluir contenido que permita hacer un recorrido por la colección.\n\nPara poner una imagen correspondiente a un ítem de la colección en este recorrido, usa el formato convencional de Markdown con el que se insertan imágenes: `![TEXTO ALTERNATIVO](URL)`, pero, en vez de poner la url, pon el pid de la imagen precedido por un signo de interrogación. Por ejemplo: `![TEST](!AdriaenCollaert)`. Así se mostrará una imagen que, si se cliquea, te llevará al elemento de la colección correspondiente.\n\nAsí:\n\n![TEST](!AdriaenCollaert)\n\nPuedes usar urls de imágenes externas con normalidad en el formato Markdown si no sigues esta convención.","bodyBegin":5,"frontmatter":"name: tour"}};