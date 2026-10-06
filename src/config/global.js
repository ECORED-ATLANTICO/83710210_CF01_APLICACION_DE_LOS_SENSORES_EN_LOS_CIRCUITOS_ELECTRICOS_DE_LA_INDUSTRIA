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
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Medida y medición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Instrumentos de medida',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Instrumentación industrial',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instrumentos de medida',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Valor medido y valor real',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Magnitudes y prefijos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sensores, transductores y captadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sensor',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Transductor',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Clasificación de los transductores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Relación entre variable y dispositivo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Integración del sensor, transductor y sistema electrónico',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Variables y señales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Variable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Variable análoga',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Señal',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Señal análoga',
            hash: 't_3_4',
          },
        ],
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
        download: 'downloads/83710210_CF01_CFA.pdf',
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
        'Davis, C. (2018). <em>Electromechanical systems</em>. SHAREOK.',
      link: 'https://open.umn.edu/opentextbooks/textbooks/1707',
    },
    {
      referencia:
        'Dyer, J., & Davis, C. (2020). <em>Measurement and instrumentation: An introduction to concepts and methods</em>. SHAREOK.',
      link: 'https://open.umn.edu/opentextbooks/textbooks/measurement-and-instrumentation-an-introduction-to-concepts-and-methods',
    },
    {
      referencia:
        'Moebs, W., Ling, S. J., & Sanny, J. (2021). <em>Física universitaria volumen 2</em>. OpenStax.',
      link: 'https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/10-4-instrumentos-de-medicion-electrica',
    },
    {
      referencia:
        'Moebs, W., Ling, S. J., & Sanny, J. (2021). <em>Física universitaria volumen 1</em>. OpenStax.',
      link: 'https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/1-2-unidades-y-estandares',
    },
    {
      referencia:
        'Moebs, W., Ling, S. J., & Sanny, J. (2017). <em>University Physics Volume 1</em>. OpenStax.',
      link: 'https://openstax.org/books/university-physics-volume-1/pages/1-6-significant-figures',
    },
    {
      referencia:
        'Tiberius, C., & Mulder, M. (2026). <em>Engineering signal analysis: From Fourier to filtering: Theory</em>. TU Delft Open.',
      link: 'https://open.umn.edu/opentextbooks/textbooks/engineering-signal-analysis-from-fourier-to-filtering-theory',
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
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmar Urrutia Martínez',
          cargo: 'Experto temático',
          centro: 'N/A',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
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
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
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
