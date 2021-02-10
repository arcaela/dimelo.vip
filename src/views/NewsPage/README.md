## News Page - Paginas de noticia
News Pages tiene como función renderizar la paginas de noticias y contienen componentes, funciones reutilizables.
## Carpeta components
Contiene los componentes necesarios para ser usado por News Page
## components/CardNews - Card de las noticias
CardNews es la card que contiene la noticia literal y para funcionar tiene que recibir los siguientes parametros
``` CardNews({ likes = 0, like = false, autor: { name }, title, description, pictures, date }) { ```
Por otro lado, contiene existe cardNews.styles.js que estilizan el componente CardNews
## components/CreateNews - Pagina para crear noticia
CreateNews es la pagina donde renderizara un formulario la cual servira para crear un noticia.
## components/NoNews - No hay noticias
NoNews es un componente para renderizar un mensaje con imagen de 'No hay noticias'
## components/ShareNew - Pagina de noticia compartida
ShareNew  es la pagina donde renderizara una noticia compartidad y recibe como parametro de ruta el id de la noticia
``` route('share-new/:id) ```

