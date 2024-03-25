const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://lucylopezpa.github.io",
  "baseurl": "/IdaEsbra",
  "title": "Colección Ida Esbra",
  "subtitle": "Archivo Nina S. de Friedemann",
  "credits": "Lucy López",
  "copyright": "Todos los derechos reservados, 2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "identifier",
        "label": "Identifier",
        "type": "text"
      },
      {
        "key": "title",
        "label": "Title",
        "type": "text"
      },
      {
        "key": "creator",
        "label": "Creator",
        "type": "text"
      },
      {
        "key": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "key": "description",
        "label": "Description",
        "type": "text"
      },
      {
        "key": "medium",
        "label": "Medium",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "title",
      "creator",
      "date",
      "description",
      "medium"
    ]
  }
};
export default config;