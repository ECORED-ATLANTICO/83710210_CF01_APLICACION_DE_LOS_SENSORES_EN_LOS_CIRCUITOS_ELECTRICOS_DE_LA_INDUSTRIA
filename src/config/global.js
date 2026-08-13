export default {
  global: {
    Name: 'Sensores, medición y adquisición',
    Description:
      'El componente aborda los fundamentos de la medición, la instrumentación industrial, los sensores, transductores y sistemas de adquisición de señales. Asimismo, desarrolla conceptos relacionados con variables y señales, conversión de información y sistemas electrónicos básicos de control aplicados a procesos industriales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medición e instrumentación industrial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sensores, transductores y captadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Variables y señales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistemas de adquisición de señales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistemas electrónicos básicos de control',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acondicionador de señal',
      significado:
        'Dispositivo que adapta una señal para facilitar su adecuada adquisición y procesamiento.',
    },
    {
      termino: 'Adquisición',
      significado:
        'Proceso mediante el cual se obtiene y dispone información proveniente de una variable para su procesamiento.',
    },
    {
      termino: 'Automatización industrial',
      significado:
        'Aplicación de sistemas de control y tecnología para ejecutar y supervisar procesos industriales.',
    },
    {
      termino: 'Captación',
      significado:
        'Proceso mediante el cual se obtiene información de una variable física del proceso.',
    },
    {
      termino: 'Instrumentación industrial',
      significado:
        'Conjunto de elementos utilizados para medir, captar y controlar variables de un proceso.',
    },
    {
      termino: 'Sensor',
      significado:
        'Elemento que capta el valor de una variable del proceso y genera una señal de salida.',
    },
    {
      termino: 'Señal digital',
      significado:
        'Señal representada mediante valores discretos que permiten su procesamiento electrónico.',
    },
    {
      termino: 'Transductor',
      significado:
        'Elemento que recibe una señal y la convierte o adapta en otra adecuada para el sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Marín García, E. J. (2023). <em>Sistemas de medición electrónica. Generalidades y algo más</em>. Programa Editorial Universidad del Valle.',
      link: 'https://doi.org/10.25100/peu.7617650',
    },
    {
      referencia:
        'Pallás Areny, R. (2002). <em>Sensores y acondicionadores de señal</em> (3.ª ed.). Alfaomega/Marcombo.',
      link: 'https://catalogo.ut.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=27700',
    },
    {
      referencia:
        'Ramírez, J. D., Mejía Hernández, J. C., Quintero, H. F., Henao Castañeda, E. de J., Romero Piedrahita, C. A., & Pérez Castro, W. (2018). Banco de instrumentación para el acondicionamiento y adquisición de señales provenientes de un motor de combustión interna. <em>Revista Colombiana de Tecnologías de Avanzada</em>, 3(1), 24–30.',
      link: 'https://doi.org/10.24054/rcta.vi.147',
    },
    {
      referencia:
        'Universidad Tecnológica de Pereira. (s. f.). <em>Instrumentación Industrial I</em>.',
      link: 'https://media.utp.edu.co/maestria-en-matematica/archivos/Instrumentaci%C3%B3n%20Industrial%20I.pdf',
    },
    {
      referencia:
        'Universidad Tecnológica de Pereira. (s. f.). <em>Medidas e instrumentación</em>.',
      link: 'https://media.utp.edu.co/ingenieria-electrica/archivos/contenidoTematico/medidas-e-instrumentacion.pdf',
    },
    {
      referencia:
        'Vallejo Valencia, M., & Arias Londoño, A. (2022). <em>Introducción a la adquisición y acondicionamiento de señales</em> (1.ª ed.). Editorial ITM.',
      link: 'https://catalogo.itm.edu.co/gpd-introduccion-a-la-adquisicion-y-acondicionamiento-de-senales-9789585122642.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
