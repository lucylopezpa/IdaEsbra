---
name: metadata
---

# Metadatos

Esta colección utiliza metadatos descriptivos usando los protocolos de **CONTEN dm**. 

**CONTEN dm**, *Content Object Transfer Encoding Notation Data Model*, es un conjunto de protocolos diseñados para la descripción y gestión de metadatos de objetos digitales. 

Este estándar establece convenciones para la codificación de información descriptiva sobre recursos digitales, incluyendo elementos como título, autor, fecha de creación, formato de archivo y derechos de autor. Pueden descargarse y usarse libremente. 

## Protocolo

Este es el protocolo que especifica la construcción de los datos de la colección:

| Dato   | Descripción                                                                     |  Tipo      |
|---     |---                                                                              |---         |
| pid    | Identificador único                                                             | categórico |
| label  | Identificador único de la obra. Se expresa en número entero y progresivo.       | ordinal    |
| identifier| Corresponde al número topográfico del sistema de clasificación Dewey.        | categórico |
| creator  | Autor de la obra. Inciales con mayúsculas, incluir acentos                    | categórico |
| date  | Año aproximado de producción de la obra. Escrito en número completo (p.ej 1589)  | ordinal    |
| description | Proporciona un tema del recurso. Inciales con mayúsculas, incluir acentos  | categórico |
| subbject | Representa el tema principal del recurso. Inciales con mayúsculas, incluir acentos  | categórico |
| ancho  | Indica ancho del recurso. Se expresa en número entero por unidades de cm        | ordinal    |
| alto   | Indica alto del recurso. Se expresa en número entero por unidades de  cm        | ordinal    |
| medium  | Indica el formato o medio en el que se presenta el recurso. Inicial con mayúscula, incluir acentos.  | categórico |

<!-- La tabla de metadatos se carga automáticamente -->