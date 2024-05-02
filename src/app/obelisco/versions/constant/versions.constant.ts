import { ObeliscoVersion } from '../interfaces/versions.interfaces';

export const OBELISCO_VERSIONS: { versions: ObeliscoVersion[] } = {
  versions: [
    {
      version: '1.57.0',
      date: '09/01/2024',
      pullRequest: 'feat: mapa (#218)',
      changes: [
        { component: 'Mapa', modifications: 'Se incorpora el componente mapa' },
      ],
    },
    {
      version: '1.56.2',
      date: '04/01/2024',
      pullRequest: 'fix: cards (#219)',
      changes: [
        {
          component: 'Tarjetas',
          modifications: [
            'Evento deja de existir como tal, y evento simple pasa a llamarse Agenda',
            'Se maqueta de forma que etiqueta <a> contenga solo el título y se mantengan los estilos en hover y focus',
            'Se agrega padding cuando la tarjeta no tiene borde',
            'Se incorporan las clases ellipsis-1, ellipsis-2, ellipsis-3, y ellipsis-4, para truncar el texto a x cantidad de líneas. Para tarjetas se puede usar ellipsis-3 en título',
            'Se reemplaza h4 por h3 , manteniendo estilos (por accesibilidad)',
            'Se eliminan listas por columnas y ancho completo, y se dejan lista ancho por tarjeta 2 y 3 columnas, y lista desplazable',
          ],
        },
      ],
    },
    {
      version: '1.56.1',
      date: '30/11/2023',
      pullRequest: 'fix: v1.55.1 (#205)',
      changes: [
        {
          component: 'Header',
          modifications: [
            'Link "skip-to-main-content-link": se reemplaza texto "Ir al contenido principal" por "Saltar al contenido principal"',
            'Botón de dropdown de perfil: se modifican estilos en estados hover y focus',
          ],
          links: [
            {
              title: 'Tarjeta Header en Github-Estandares',
              url: 'https://github.com/gcba/estandares/issues/275#issuecomment-1783102853',
            },
          ],
        },
        {
          component: 'Colapsables',
          modifications: [
            'Se modifica icono de lista de radios a 24px',
            'Se elimina la opción de "nueva tarjeta de crédito" en colapsable con lista seleccionable',
            'Se modifican estilos para correcta visualización en Firefox',
            'Se reemplazan etiquetas h4 y h5 por span',
            'Se saca svg en content en after de button.card-header y se coloca el svg como background-image, para que no sea leído por lector de pantalla',
            'Se saca outline en radio cuando es navegado por teclado (focus-visible) y se agregan los mismos estilos de Radio de formulario en focus, focus-visible y hover',
          ],
          links: [
            {
              title: 'UI Kit (Figma) - Componente colapsables',
              url: 'https://www.figma.com/file/ToGlPBzfp1gKDmaCwKWtXS/UI-KIT---Obelisco?node-id=15586%3A643&mode=dev',
            },
          ],
        },
        {
          component: 'Footer',
          modifications: [
            'Se modifica border-top amarillo. Cambio en indicador',
            'Se modifica text-decoration-thickness en enlaces de footer (a 1px)',
            'Se modifica url de footer (Ver teléfonos, Términos y condiciones, y Política de privacidad). - Jira 239: 1) link "Terminos y condiciones" por la siguiente url(angular): https://buenosaires.gob.ar/inicio/terminos-y-condiciones, 2) link "Ver todos los telefonos" por la siguiente url(angular): https://buenosaires.gob.ar/inicio/telefonos, 3) link "Política de privacidad" por la siguiente url(angular): https://buenosaires.gob.ar/inicio/privacidad',
            'Spinner: se agrega min-width en los tamaños de spinner',
          ],
          links: [
            {
              title: 'UI Kit (Figma) - Componente footer',
              url: 'https://www.figma.com/file/ToGlPBzfp1gKDmaCwKWtXS/branch/51S6pxYyKEVz93tvtIn47o/UI-KIT---Obelisco?type=design&node-id=1022-9649&mode=design&t=KyZLTNvDGyEjhLgW-0',
            },
          ],
        },
        {
          component: 'Spinner',
          modifications: ['Se agrega min-width en los tamaños de spinner'],
        },
      ],
    },
    {
      version: '1.56.0',
      date: '13/11/2023',
      pullRequest: 'feat: destacado (#217)',
      changes: [
        {
          component: 'Panel grande',
          modifications: [
            'El componente Panel grande Horizontal pasa a llamarse Destacado Banner y el Panel grande Vertical pasa a llamarse Destacado Conjunto.',
            'Se mantienen las clases panel-horizontal y panel-vertical, y se agrega la clase panel-lateral para el Destacado Lateral.',
            'Se modifica html de panel grande horizontal en destacado banner',
            'Se elimina Panel grande de storybook (pasa a ser Destacado Banner y Conjunto)',
          ],
        },
        {
          component: 'Panel chico',
          modifications: [
            'Se se mantiene Panel chico hasta que desde el área de Diseño realicen la revisión de templates, donde se utiliza destacado chico',
          ],
        },
      ],
      other: [
        {
          version: '1.56.0',
          date: '08/11/2023',
          changes: [
            { component: 'General', modifications: 'chore: update cdn (#214)' },
          ],
        },
      ],
    },
    {
      version: '1.55.1',
      date: '24/10/2023',
      pullRequest: 'fix: variante colapsable color blanco (#202)',
      changes: [
        {
          component: 'Colapsables',
          modifications: [
            'Se agrega variante colapsable color blanco, correcciones de estilos',
          ],
        },
        {
          component: 'Navegación y pestañas',
          modifications: ['Se realiza ajuste en line-height'],
        },
        {
          component: 'Desplegables',
          modifications: ['Se realiza ajuste en line-height y box-shadow'],
        },
        {
          component: 'Header',
          modifications: [
            'Se realizan mejoras en accesibilidad de header, se agrega skip-link y role "banner"',
          ],
        },
      ],
      other: [
        {
          version: '1.55.1',
          date: '23/10/2023',
          changes: [
            {
              component: 'Bootstrap',
              modifications: [
                'Refactor: docs: se reemplazan scripts en documentación por actualización de bootstrap v4.6 (#204)',
              ],
            },
          ],
        },
      ],
    },
    {
      version: '1.55.0',
      date: '18/10/2023',
      pullRequest: 'feat: header (#203)',
      changes: [
        {
          component: 'Header',
          modifications: [
            'Se desarrolla nueva versión de header, sin eliminar los estilos del header previo.',
          ],
        },
      ],
    },
    {
      version: '1.54.0',
      date: '18/10/2023',
      pullRequest: 'fix: update de header (#199)',
      changes: [
        {
          component: 'Header',
          modifications: ['Actualización de header'],
        },
      ],
    },
    {
      version: '1.53.0',
      date: '09/10/2023',
      pullRequest: 'fix: update bootstrap v4 (#200)',
      changes: [
        {
          component: 'Bootstrap',
          modifications: ['Actualización de bootstrap a versión 4.6.2'],
        },
      ],
    },
    {
      version: '1.52.4',
      date: '03/10/2023',
      pullRequest: 'Bug Fixes',
      changes: [
        {
          component: 'Accesos',
          modifications: ['Corrección en extend sass (en listas de accesos)'],
        },
      ],
    },
    {
      version: '1.52.3',
      date: '28/09/2023',
      pullRequest: 'fix: fix-1_52_2 (#197)',
      changes: [
        {
          component: 'Navegación horizontal',
          modifications: ['Se modifica el max height de nav horizontal'],
        },
        {
          component: 'Panel grande',
          modifications: [
            'En panel grande horizontal, se modifica para que card-body tome el ancho completo aunque contenga poco texto',
            'En panel grande vertical, se agrega aspect ratio 16:9 a imagen',
          ],
        },
        {
          component: 'Accesos',
          modifications: [
            'En Lista de Accesos: se extiende la clase card deck a access deck para el mismo comportamiento en accesos',
            'Se comenta temporalmente sección Accesos horizontal y vertical',
            'Se actualiza nombre de Con bordes a Estados',
          ],
        },
        {
          component: 'Bloque (iniciar trámite)',
          modifications: [
            'se agrega en organismos como Bloque (previamente Botones-Organismos, previo Botón en caja)',
          ],
        },
        {
          component: 'Desplegables',
          modifications: [
            'Corrección en item-danger (cerrar sesión) en desplegables cuando está deshabilitado.',
            'Se agrega disabled a desplegable de selección.',
            'Se corrige radio en desplegable',
          ],
        },
        {
          component: 'Navegación y pestañas',
          modifications: ['En pestañas, se corrigen los tamaños'],
        },
        {
          component: 'Barra de desplazamiento horizontal',
          modifications: [
            'Se agregan estilos temporales a la barra de desplazamiento horizontal de la clase',
          ],
        },
        {
          component: 'Enlace',
          modifications: ['Se corrige focus en logo del header (imagenes)'],
        },
        {
          component: 'Buscador',
          modifications: [
            'Se corrigen estilos en focus del botón reset del buscador',
          ],
        },
        {
          component: 'Tarjetas',
          modifications: [
            'Se agrega Lista desplazable para noticias en tarjetas',
          ],
        },
      ],
    },
    {
      version: '1.52.2',
      date: '14/09/2023',
      pullRequest: 'fix: enlace y lista de enlaces (#196)',
      changes: [
        {
          component: 'Enlace',
          modifications: [
            'Se cambia el grosor del focus únicamente en los enlaces de textos.',
            'Se modifica color de focus, hover, visited.',
            'Se agrega muestra de enlace dentro de tag small.',
            'Se cambian los iconos: external, access, download.',
            'Se cambia espaciado entre texto y el icono, ahora es de 2px.',
            'Se cambia la medida de los iconos a 20px.',
            'Se cambia el grosor de la línea del text-decoration.',
            'Se agrega variante blanco en fondo oscuro',
          ],
        },
        {
          component: 'Lista de enlaces',
          modifications: [
            'Se modifica estilos en panel chico que contiene lista de enlace',
          ],
        },
        {
          component: 'Lista informativa',
          modifications: ['Variantes con viñeta y con check'],
        },
      ],
    },
    {
      version: '1.52.1',
      date: '31/08/2023',
      pullRequest: 'fix: fix 1.51.0 (#195)',
      changes: [
        {
          component: 'Generales',
          modifications: [
            'Cambio de nombre en clases contenedoras de los componentes, organismos, formulario',
            'Inicio / Instalación: Corrección de url de "Ver la documentación de componentes". Se modifica texto de definición de Obelisco en Instalación',
          ],
        },
        {
          component: 'Tablas',
          modifications: [
            'Se agrega clase universal de scroll horizontal (responsive-scroll)',
            'Se agrega tabla responsive, con clase responsive-scroll.',
            'Se corrige que la tabla (table-bordered) no pierda el borde cuando se encuentra dentro de contenedor con clase responsive-scroll.',
            'Corrección de accesibilidad y focus en tabla responsive',
          ],
        },
        {
          component: 'Paginado',
          modifications: [
            'Se corrige z-index cuándo page-ítem está activo.',
            'Ajuste de espaciados de paginado en mobile para cuando tenga 3 o 4 cifras (se comenta con equipo de Diseño, el componente estuvo pensado para 2 cifras).',
            'Ajuste en padding de no-events de paginado',
          ],
        },
        {
          component: 'Header',
          modifications: [
            'Se cambian ids por clases en el scss y ajuste de padding.',
            'ajuste en padding de navbar.',
            'Se elimina icon-search y icon-close de aria-controls de header.',
            'Se reemplaza justify-content: end; por justify-content: flex-end;.',
            'Ajuste en width de enlace nav-link de header',
          ],
        },
        {
          component: 'Navegación y pestañas',
          modifications: [
            'En pestañas, se reemplaza div por button en flechas de pestañas desplazables.',
            'Se elimina la clase px-0 de pestañas.',
            'Se agrega contenido de pestañas en el componente',
            'Se ajustan aspectos de accesibilidad (ids y aria-label) en pestañas.',
          ],
        },
        {
          component: 'Colapsables',
          modifications: [
            'Corrección en html de colapsable (se eliminan ids innecesarios) y se convierte texto de descripción de <Collapse> en variable.',
          ],
        },
        {
          component: 'Lista de pasos',
          modifications: [
            'Corrección de z-index y posicionamiento de after en lista de pasos',
          ],
        },
        {
          component: 'Enlace',
          modifications: [
            'Se agrega display: inline-block; y width: fit-content; en enlace para que se visualice correctamente cuando se hace focus.',
          ],
        },
        {
          component: 'Accesos',
          modifications: [
            'Se agrega width: 100% para que no tome el width fit-content de enlaces',
          ],
        },
        {
          component: 'Tarjetas',
          modifications: [
            'Se agrega width: 100% para que no tome el width fit-content de enlaces',
          ],
        },
        {
          component: 'Desplegable',
          modifications: [
            'Corrección de alineación de texto de item-text en desplegable',
          ],
        },
      ],
    },
    {
      version: '1.52.0',
      date: '24/08/2023',
      pullRequest: 'feat: desplegables de selección y navegación (#162)',
      changes: [
        {
          component: 'Desplegable',
          modifications: ['Se agregan desplegables de selección y navegación'],
        },
      ],
    },
    {
      version: '1.51.0',
      date: '07/08/2023',
      pullRequest: 'feat: banner (#194)',
      changes: [
        {
          component: 'Banner',
          modifications: ['Se agrega componente banner'],
        },
      ],
    },
    {
      version: '1.50.1',
      date: '26/07/2023',
      pullRequest: 'fix: 1.51 (#192)',
      changes: [
        {
          component: 'Header ',
          modifications: ['Cambios en estilos y mobile (buscador)'],
        },
        {
          component: 'Footer ',
          modifications: [
            'fix: footer icons y actualización de boxicons (#175): se agrega iconos de TikTok y Pinterest.',
          ],
        },
        {
          component: 'Generales ',
          modifications: ['Se actualiza versión de boxicons a v2.1.4'],
        },
      ],
    },
    {
      version: '1.50.0',
      date: '17/07/2023',
      pullRequest: 'Listas - Lista de pasos (#191)',
      changes: [
        {
          component: 'Lista de pasos',
          modifications: ['Se corrigen errores'],
        },
      ],
    },
    {
      version: '1.49.3',
      date: '12/07/2023',
      pullRequest: 'fix: gallery de html a react (#188)',
      changes: [
        {
          component: 'Galería',
          modifications: [
            'Se pasa el componente de html a react',
            'Se realizan ajustes a la visualización de las grillas',
            'Se corrige el borde de modal',
            'Se realizan ajustes en el componente y en el nombre del componente',
            'Se realizan mejoras a la proporción de imágenes (aspect-ratio 3/2) y nombre del contenedor en storybook',
          ],
        },
      ],
    },
    {
      version: '1.49.2',
      date: '11/07/2023',
      pullRequest: 'Dev 1.49.1',
      changes: [
        {
          component: 'Enlace',
          modifications: [
            'Se agrega word-break en enlace',
            'Se ajusta display de enlace dentro de panel y cards (display inline-block)',
          ],
        },
        {
          component: 'Alerta',
          modifications: [
            'Se ajusta color de tag a cuando tiene clase btn en alerta',
          ],
        },
        {
          component: 'Modal',
          modifications: ['Se corrige modal'],
        },
        {
          component: 'Footer',
          modifications: ['Se corrige footer info (indicador de utilidad)'],
        },
        {
          component: 'Footer',
          modifications: ['Se corrige footer info (indicador de utilidad)'],
        },
        {
          component: 'Header',
          modifications: ['Se prueba solución en header buscador en mobile'],
        },
      ],
    },
    {
      version: '1.49.1',
      date: '30/06/2023',
      pullRequest: 'fix: 1.49.1',
      changes: [
        {
          component: 'Tarjetas',
          modifications: [
            'Se agrega aspect-ratio, object-fit: cover; y object-position: center; en imagenes en tarjetas',
            'Se corrigen las rutas de tarjetas',
          ],
        },
        {
          component: 'Alerta',
          modifications: [
            'Se saca el display flex y se ajusta color de enlace en botón .btn',
          ],
        },
        {
          component: 'Panel',
          modifications: ['Cambio de imagen en panel'],
        },
      ],
    },
    {
      version: '1.49.0',
      date: '29/06/2023',
      pullRequest: 'feat: switch (#187)',
      changes: [
        {
          component: 'Switch',
          modifications: ['Se agrega el componente Switch'],
        },
      ],
      other: [
        {
          version: '1.49.0',
          date: '29/06/2023',
          changes: [
            {
              component: 'Footer',
              modifications: [
                'Se agrega wrap en contenedor de imágenes de footer para dispositivos menores a 300px',
              ],
            },
            {
              component: 'Header',
              modifications: ['Se saca palabra Menú en el botón header mobile'],
            },
            {
              component: 'Colapsable',
              modifications: [
                'Se agrega estilos para evitar que rompan los textos en colapsable cuando están en mobile',
              ],
            },
          ],
        },
      ],
    },
    {
      version: '1.48.4',
      date: '21/06/2023',
      pullRequest: 'fix: corrección en panel (#186)',
      changes: [
        {
          component: 'Panel grande',
          modifications: [
            'Corrección en panel que afectaba listas de tarjetas',
          ],
        },
      ],
    },
    {
      version: '1.48.3',
      date: '14/06/2023',
      pullRequest: 'fix_panel (#185)',
      changes: [
        {
          component: 'Panel',
          modifications: [
            'Se agregan nuevas variantes del componente panel',
            'Se agrega fondo al componente',
            'Se agrega panel horizontal',
          ],
        },
      ],
    },
    {
      version: '1.48.2',
      date: '01/06/2023',
      pullRequest: 'fix_generales (#184)',
      changes: [
        {
          component: 'Generales',
          modifications: ['Se agrega favicon en storybook'],
        },
        {
          component: 'Formularios',
          modifications: ['Corrección de tipografía en label de forms'],
        },
        {
          component: 'Buscador',
          modifications: [
            'Corrección en padding-left de buscador, y posición de icono reset',
          ],
        },
        {
          component: 'Footer',
          modifications: [
            'Corrección de focus en enlaces de footer',
            'Corrección en footer de url de oficios judiciales',
            'Corrección en footer de transparencia activa',
            'Se cambia el favicon y ajustes al scss footer',
          ],
        },
        {
          component: 'Enlace',
          modifications: ['Corrección de ícono en enlace download-link'],
        },
        {
          component: 'Colapsable',
          modifications: ['Ajuste de icono en colapsable'],
        },
      ],
    },
    {
      version: '1.48.1',
      date: '04/05/2023',
      pullRequest: 'fix generales (#183)',
      changes: [
        {
          component: 'Accesos',
          modifications: [
            'Corrección de gap en accesos con disposición vertical',
          ],
        },
        {
          component: 'Alerta',
          modifications: [
            'Se corrige alerta de error, y se modifica el orden de alertas en simple y con cierre',
          ],
        },
        {
          component: 'Colapsable',
          modifications: ['Margin top y bottom en hr de colapsables'],
        },
        {
          component: 'Panel',
          modifications: [
            'Se agrega el object fit de panel horizontal y vertical',
          ],
        },
        {
          component: 'Spinner',
          modifications: ['Se agrega export de componente Spinner'],
        },
        {
          component: 'Tipografía',
          modifications: [
            'Ajuste en font size de subtítulo',
            'Se formatea los archivos scss y ajuste en el txs de typography',
          ],
        },
      ],
    },
    {
      version: '1.48.0',
      date: '03/05/2023',
      pullRequest: 'feat: dev #152',
      changes: [
        {
          component: 'Spinner',
          modifications: [
            'Se agregan nuevas funcionalidades al componente spinner',
            'Se corrigen errores en el componente spinner y en el botón con spinner',
          ],
        },
        {
          component: 'Barra de progreso',
          modifications: ['Se corrigen errores en la barra de progreso'],
        },
        {
          component: 'Tarjetas',
          modifications: ['Se formatea archivo scss de componente tarjetas'],
        },
        {
          component: 'Accesos',
          modifications: [
            'Se corrigen errores en los accesos',
            'Se formatea archivo scss de componente accesos',
          ],
        },
        {
          component: 'Botones',
          modifications: [
            'Se corrigen errores en los botones',
            'Se formatea archivo scss de componente botón',
          ],
        },
        {
          component: 'Footer',
          modifications: [
            'Se corrigen errores en footer',
            'Se modifica el orden de los organismos en el footer',
          ],
        },
        {
          component: 'Colapsable',
          modifications: [
            'Se agrega el componente collapse list',
            'Se reemplaza el label por volanta en los colapsables, acorde a figma',
            'Se corrigen errores en el padding y backface-visibility de los colapsables',
          ],
        },
        {
          component: 'Generales',
          modifications: [
            'Se modifica el archivo preview.ts para optimizar la organización de los componentes',
          ],
        },
      ],
    },
    {
      version: '1.47.1',
      date: '17/04/2023',
      pullRequest: 'fix: se actualiza el tsconfig y url de versión',
      changes: [
        {
          component: 'Generales',
          modifications: ['Se actualiza el tsconfig y url de versión'],
        },
      ],
    },
    {
      version: '1.47.0',
      date: '14/04/2023',
      pullRequest: 'feat: Alerta - Tooltip - Paginador - Breadcrumb',
      changes: [
        {
          component: 'Alerta',
          modifications: [
            'Se agrega componente alerta',
            'Se agrega la capacidad de cerrar la alerta',
          ],
        },
        {
          component: 'Tooltip',
          modifications: ['Se agrega componente tooltip'],
        },
        {
          component: 'Paginado',
          modifications: [
            'Se agrega componente paginado',
            'Se corrige el paginado',
          ],
        },
        {
          component: 'Breadcrumb',
          modifications: [
            'Se agrega componente breadcrumb',
            'Se modifica la visualización del breadcrumb en storybook, se reemplaza el divider por el icono de material-icons-round, se corrigen los espaciados, se corrige el nombre en stories',
          ],
        },
        {
          component: 'Botón',
          modifications: [
            'Se corrige el espaciado del icono en el botón, se agrega el icono de material icons al botón',
          ],
        },
        {
          component: 'Botón',
          modifications: [
            'Se corrige el espaciado del icono en el botón, se agrega el icono de material icons al botón',
          ],
        },
        {
          component: 'General',
          modifications: [
            'Se agrega la versión actual del paquete de manera dinámica',
            'Se modifican los nombres de los componentes',
          ],
        },
        {
          component: 'Navegación y Pestañas',
          modifications: ['Se agrega el componente de navegación por pestañas'],
        },
        {
          component: 'Tipografía',
          modifications: [
            'Se reemplazan los textos secundarios por epígrafes y se ajusta su tamaño de fuente',
          ],
        },
      ],
    },
    {
      version: '1.46.2',
      date: '14/03/2023',
      pullRequest: 'fix: remover símbolo ~ deprecado',
      changes: [
        {
          component: 'General',
          modifications: ['Se reemplaza el símbolo ~ por node_modules'],
        },
      ],
    },
    {
      version: '1.46.1',
      date: '16/02/2023',
      pullRequest: 'Fix obelisco 1 46 0',
      changes: [
        {
          component: 'Radio - Checkbox',
          modifications: [
            'Se agregan los estilos de validación para radio y checkbox',
            'Ajuste en posición de círculo azul de radio',
          ],
        },
        {
          component: 'Tarjetas',
          modifications: [
            'Se corrige el espaciado mobile en card-deck',
            'Se corrigen los estilos de la tarjeta horizontal con icono sin borde',
          ],
        },
        {
          component: 'Etiquetas',
          modifications: [
            'Se corrigen los estilos en etiqueta para evitar desbordamiento',
          ],
        },
        {
          component: 'Header',
          modifications: ['Se cambia el icono logout del header'],
        },
        {
          component: 'Accesos',
          modifications: [
            'Se agrega clase group-access en listas por ancho tarjeta',
          ],
        },
        {
          component: 'Tipografía',
          modifications: ['Modificación de font-family de titulo h5'],
        },
        {
          component: 'Paginado',
          modifications: [
            'Modificación de font-weight de paginación y se reemplaza icono por el icono de material icons',
          ],
        },
        {
          component: 'General',
          modifications: [
            'Se modifica addons en instalación, plantillas y releases',
            'Se modifica versión',
          ],
        },
      ],
    },
    {
      version: '1.46.0',
      date: '07/02/2023',
      pullRequest: 'feat: Se agrega la sección versión',
      changes: [
        {
          component: 'General',
          modifications: [
            'Se agrega la sección versión',
            'Refactor: refactorización de archivos',
            'Se sacó el pascal case en los nombres de las historias y se colocaron tildes, nombres de componentes, se agrego material icons',
          ],
        },
      ],
    },
    {
      version: '1.45.3',
      date: '30/01/2023',
      pullRequest: 'fix: fix de la versión 1.45.2',
      changes: [
        {
          component: 'Panel',
          modifications: [
            'En Panel chico y grande (horizontal y vertical), en mobile, se modifica botones a ancho completo, se corrige el espaciado entre botones cuando el texto del botón es largo, y se centra card-body',
          ],
        },
        {
          component: 'Mensaje de estado',
          modifications: [
            'En el mensaje de estado, se agrega un margen cuando hay dos textos.',
          ],
        },
        {
          component: 'Tarjetas',
          modifications: [
            'Se finaliza la implementación del componente tarjeta lista card-column.',
            'En las tarjetas, en mobile, el card-title tiene un font-weight de 600.',
          ],
        },
      ],
    },
    {
      version: '1.45.2',
      date: '17/01/2023',
      pullRequest: 'master: Arreglo de versionado',
      changes: [
        {
          component: 'General',
          modifications: [
            'Se corrige el versionado del paquete para que coincida con la versión actual.',
          ],
        },
      ],
    },
    {
      version: '1.45.1',
      date: '17/01/2023',
      pullRequest: 'fix_audio',
      changes: [
        {
          component: 'Audio',
          modifications: ['Modificación del ancho en componente audio'],
        },
        {
          component: 'Navegacion y pestañas',
          modifications: [
            'En navegación vertical se modifica font-weight regular',
          ],
        },
        {
          component: 'Tipografía',
          modifications: [
            'Se modifica font-weight a 700 los que estan en 900',
            'Texto pequeño: Texto con tamaño 11.7px (clase text-xs) y modificación en Galeria',
            'Titulo h5: el tamaño 17px en vez de 16px',
          ],
        },
        {
          component: 'Alerta',
          modifications: ['Se modifica el icono de alerta'],
        },
        {
          component: 'Mensaje de estado',
          modifications: ['Arreglo svg en mensaje de estado'],
        },
      ],
    },
    {
      version: '1.45.0',
      date: '17/01/2023',
      pullRequest: 'feat_mensade_de_estado',
      changes: [
        {
          component: 'Mensaje de estado',
          modifications: ['Creación del componente mensaje de estado'],
        },
      ],
    },
    {
      version: '1.44.0',
      date: '17/01/2023',
      pullRequest: 'feat_button_outline',
      changes: [
        {
          component: 'Botón',
          modifications: ['Creación del componente botón con borde y en caja'],
        },
      ],
    },
    {
      version: '1.43.2',
      date: '17/01/2023',
      pullRequest: 'fix-radio-accesos',
      changes: [
        {
          component: 'Accesos',
          modifications: [
            'Modificación de estilos en lista de accesos para el alto del componente',
          ],
        },
        {
          component: 'Radio - Checkbox',
          modifications: ['Modificación de estilos en focus checkbox-radio'],
        },
        {
          component: 'Desplegable',
          modifications: ['Modificación de estilos en icono en desplegables'],
        },
      ],
    },
    {
      version: '1.43.1',
      date: '12/12/2022',
      pullRequest: 'fix_accordion',
      changes: [
        {
          component: 'Colapsable',
          modifications: ['Modificación de estilos generales “prioridades”'],
        },
      ],
    },
    {
      version: '1.43.0',
      date: '12/12/2022',
      pullRequest: 'feat',
      changes: [
        {
          component: 'Tarjetas',
          modifications: ['Creación del componente tarjeta con icono vertical'],
        },
      ],
    },
    {
      version: '1.42.0',
      date: '22/11/2022',
      pullRequest: 'feat_spinner',
      changes: [
        {
          component: 'Spinner',
          modifications: ['Creación del componente spinner'],
        },
      ],
    },
    {
      version: '1.41.1',
      date: '03/11/2022',
      pullRequest: 'fix_header',
      changes: [
        {
          component: 'Header',
          modifications: [
            'Se modificaron estilos en el componente header en la versión mobile',
          ],
        },
      ],
    },
    {
      version: '1.40.0',
      date: '01/11/2022',
      pullRequest: 'fix_list_group',
      changes: [
        {
          component: 'Accesos',
          modifications: [
            'Se agregó la variante cerrar sesión (modo info)',
            'Se agregaron los accesos con icono como en los templates rrss (con mr-2)',
          ],
        },
      ],
    },
    {
      version: '1.39.2',
      date: '01/11/2022',
      pullRequest: 'fix_progress_bar',
      changes: [
        {
          component: 'Barra de progreso',
          modifications: [
            'Se agregó la clase bg-color para la barra de estado. info/success',
          ],
        },
      ],
    },
    {
      version: '1.39.1',
      date: '01/11/2022',
      pullRequest: 'fix_dropdown',
      changes: [
        {
          component: 'Desplegable',
          modifications: [
            'Se agregó en desplegable con enlaces. div con button -> ul con li más a.',
          ],
        },
      ],
    },
    {
      version: '1.39.0',
      date: '22/08/2022',
      pullRequest: 'feat',
      changes: [
        {
          component: 'Desplegable',
          modifications: ['Se agregan nuevos colores #97'],
        },
      ],
    },
  ],
};
